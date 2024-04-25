import {expect} from "chai";
import {StoreService} from "../../../src/inventory/store-service";
import {Item} from "../../../src/item/item";
import {ItemFactory} from "../../../src/item/item-factory";
import {ItemTypes} from "../../../src/item/item-types";

describe('Normal Item', () => {
    let itemFactory: ItemFactory;
    let normalItem: Item;

    beforeEach(() => {
        itemFactory = new ItemFactory();
        normalItem = itemFactory.createItem(ItemTypes.NORMAL, "Apple", 3, 7);
    });

    it('Should return the default value for quality degrade rate', () => {
        const result : number = normalItem.qualityDegradeRate;
        expect(result).to.equal(1);
    })

    it('Should return the default value for sellIn decrement rate', () => {
        const result : number = normalItem.sellInDecrementRate;
        expect(result).to.equal(1);
    })

    it('Should return the default value for onSale items', () => {
        const result : boolean = normalItem.onSale;
        expect(result).to.equal(false);
    })

    it('Should degrade the item quality by one for each day', () => {
        const items : Array<Item> = [normalItem];
        let storeService : StoreService = new StoreService(items);
        let days = 3;

        for (let i = 0; i < days; i++) {
            storeService.updateStoreInventory();
        }
        const result : number = items[0].quality;

        expect(result).to.equal(4);
    })
})