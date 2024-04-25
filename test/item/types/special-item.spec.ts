import {SpecialItem} from "../../../src/item/types/special-item";
import {expect} from "chai";
import {StoreService} from "../../../src/inventory/store-service";
import {ItemFactory} from "../../../src/item/item-factory";
import {Item} from "../../../src/item/item";
import {ItemTypes} from "../../../src/item/item-types";

describe('Special Item', () => {
    let itemFactory : ItemFactory;
    let specialItem: Item;

    beforeEach(() => {
        itemFactory = new ItemFactory();
        specialItem = itemFactory.createItem(ItemTypes.SPECIAL, "Cheddar Cheese", 10, 16, -1, 2);
    })

    it('Should return the quality degrade rate as specified', () => {
        const result : number = specialItem.qualityDegradeRate;
        expect(result).to.equal(-1);
    })

    it('Should return the sellIn decrement rate as specified', () => {
        let item: SpecialItem =  new SpecialItem("Instant Ramen", 0, 5, 0, 0);
        const result : number = item.sellInDecrementRate;
        expect(result).to.equal(0);
    })

    it('Should return the default value when sellIn decrement rate is not specified', () => {
        let specialItem : Item = itemFactory.createItem(ItemTypes.SPECIAL, "Cheddar Cheese", 10, 16, -5);
        const result : number = specialItem.sellInDecrementRate;
        expect(result).to.equal(1);
    })

    it('Should return the default value for onSale', () => {
        const result : boolean = specialItem.onSale;
        expect(result).to.equal(false);
    })

    it('Should degrade the item quality by the provided rate for each day', () => {
        let items : Array<Item> = [specialItem];
        let storeService : StoreService = new StoreService(items);
        const days = 3;

        for (let i = 0; i < days; i++) {
            storeService.updateStoreInventory();
        }
        const result : number = items[0].quality;

        expect(result).to.equal(19);
    })

    it('Should degrade the sellIn date by the provided rate for each day', () => {
        let items : Array<Item> = [specialItem];
        let storeService : StoreService = new StoreService(items);
        const days = 3;

        for (let i = 0; i < days; i++) {
            storeService.updateStoreInventory();
        }
        const result : number = items[0].sellIn;

        expect(result).to.equal(4);
    })
})