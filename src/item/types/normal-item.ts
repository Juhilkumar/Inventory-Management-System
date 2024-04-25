import {Item} from "../item";

export class NormalItem extends Item{
    constructor(name: string, sellIn: number, quality: number) {
        super(name, sellIn, quality);
    }
}