import {expect} from "chai";
import {StoreService} from "../../../src/inventory/store-service";
import {ItemFactory} from "../../../src/item/item-factory";
import {Item} from "../../../src/item/item";
import {ItemTypes} from "../../../src/item/item-types";

describe('Organic Item', () => {
    let itemFactory : ItemFactory;
    let organicItem : Item;

    beforeEach(() => {
        itemFactory = new ItemFactory();
        organicItem = itemFactory.createItem(ItemTypes.ORGANIC, "Organic Avocado", 5, 16);
    })

    it('Should return the twice as quality degrade rate as normal item', () => {
        const result : number = organicItem.qualityDegradeRate;
        expect(result).to.equal(2);
    })

    it('Should return the default value for sellIn decrement rate', () => {
        const result : number = organicItem.sellInDecrementRate;
        expect(result).to.equal(1);
    })

    it('Should return the default value for onSale', () => {
        const result : boolean = organicItem.onSale;
        expect(result).to.equal(false);
    })

    it('Should degrade the quality twice as fast for each day', () => {
        const items : Array<Item> = [organicItem];
        let storeService : StoreService = new StoreService(items);
        let days = 3;

        for (let i = 0; i < days; i++) {
            storeService.updateStoreInventory();
        }
        const result = items[0].quality;

        expect(result).to.equal(10);
    })
})