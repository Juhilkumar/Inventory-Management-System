import {Item} from "../../src/item/item";
import {ItemFactory} from "../../src/item/item-factory";
import {ItemTypes} from "../../src/item/item-types";

export class MockInventory {
    itemFactory: ItemFactory = new ItemFactory();
    items: Array<Item> = [
        this.itemFactory.createItem(ItemTypes.NORMAL, "Apple", 10, 10),
        this.itemFactory.createItem(ItemTypes.NORMAL,"Banana", -1, 9),
        this.itemFactory.createItem(ItemTypes.NORMAL,"Strawberry", 1, 0),
        this.itemFactory.createItem(ItemTypes.SPECIAL, "Cheddar Cheese", 10, 24, -1),
        this.itemFactory.createItem(ItemTypes.SPECIAL,"Instant Ramen", 0, 5, 0, 0),
        this.itemFactory.createItem(ItemTypes.ORGANIC,"Organic Avocado", 5, 16)
    ];

    getItems() : Array<Item> {
        return this.items;
    }
}