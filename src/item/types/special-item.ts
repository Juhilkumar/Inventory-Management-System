import {Item} from "../item";

export class SpecialItem extends Item {
    constructor(name: string,
                sellIn: number,
                quality: number,
                qualityDegradeRate?: number,
                sellInDecrementRate?: number) {
        super(name, sellIn, quality, qualityDegradeRate, sellInDecrementRate);
    }
}