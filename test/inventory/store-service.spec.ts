import {Item} from "../../src/item/item";
import {MockInventory} from "./mock-inventory";
import {StoreService} from "../../src/inventory/store-service";
import {expect} from "chai";

describe('Store Service', () => {
    const MAX_ITEM_QUALITY: number = 25;
    const MIN_ITEM_QUALITY: number = 0;
    const DAYS: number = 7;

    let inventory: MockInventory;
    let items: Array<Item>;
    let storeService: StoreService;

    beforeEach(() => {
        inventory = new MockInventory();
        items = inventory.getItems();
        storeService = new StoreService(items);
    });

    it('Should be able to decrement the item quality twice as fast when the sellIn value is less than zero', () => {
        const initialItemsWithZeroOrLessSellIn = items.filter((item) => item.sellIn < 0);
        initialItemsWithZeroOrLessSellIn.forEach((item) => {
            item.qualityDegradeRate *= 2
        });

        storeService.updateStoreInventory();
        const result = items.filter((item) => item.sellIn < 0);

        expect(result[0].quality).to.be.equal(initialItemsWithZeroOrLessSellIn[0].quality);
    })

    it('Should not degrade the item quality when the quality is already zero', () => {
        for (let i = 0; i < DAYS; i++) {
            storeService.updateStoreInventory();
        }

        const result: Array<Item> = items.filter((item) => item.quality < MIN_ITEM_QUALITY);

        expect(result).to.be.an("Array").that.is.empty;
    })

    it('Should not improve the item quality when the quality is already maximum', () => {
        for (let i = 0; i < DAYS; i++) {
            storeService.updateStoreInventory();
        }
        const result: Array<Item> = items.filter((item) => item.quality > MAX_ITEM_QUALITY);

        expect(result).to.be.an("Array").that.is.empty;
    })

    it('Should delete the item from inventory when the sellIn date is at minimum', () => {
        const initialItemsCount: number = items.length;
        const itemsWithSellInDateLessThanDays: Array<Item> = items.filter((item) => item.sellIn < 0);

        for (let i = 0; i < DAYS; i++) {
            storeService.updateStoreInventory();
        }
        const afterItemsCount: number = items.length;

        expect(afterItemsCount).to.be.equal(initialItemsCount - itemsWithSellInDateLessThanDays.length);
    })
})