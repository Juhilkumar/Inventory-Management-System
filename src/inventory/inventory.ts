import {Item} from "../item/item";
import {ItemFactory} from "../item/item-factory";
import {ItemTypes} from "../item/item-types";

export class Inventory {
    itemFactory: ItemFactory = new ItemFactory();
    items: Array<Item> = [
        this.itemFactory.createItem(ItemTypes.NORMAL, "Apple", 10, 10),
        this.itemFactory.createItem(ItemTypes.NORMAL,"Banana", -2, 9),
        this.itemFactory.createItem(ItemTypes.NORMAL,"Strawberry", 1, 26),
        this.itemFactory.createItem(ItemTypes.SPECIAL, "Cheddar Cheese", 10, 16, -1),
        this.itemFactory.createItem(ItemTypes.SPECIAL,"Instant Ramen", 0, 5, 0, 0),
        this.itemFactory.createItem(ItemTypes.ORGANIC,"Organic Avocado", 5, 16)
    ];

    getItems() : Array<Item> {
        return this.items;
    }
}