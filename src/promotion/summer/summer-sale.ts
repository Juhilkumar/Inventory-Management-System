import {Item} from "../../item/item";

export class SummerSale {
    item: Item;

    constructor(item: Item) {
        this.item = item;
    }

    summerSalePromotion(item: Item) {
        if (item.sellIn < 3) {
            item.onSale = true;
        }
    }
}