import {Item} from "../item";

export class OrganicItem extends Item {
    constructor(name: string,
                sellIn: number,
                quality: number) {
        super(name, sellIn, quality);
        this.qualityDegradeRate = 2;
    }
}