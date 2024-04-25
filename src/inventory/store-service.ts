import {Item} from "../item/item";

export class StoreService {
    MAX_ITEM_QUALITY: number = 25;
    MIN_ITEM_QUALITY: number = 0;
    MIN_SELL_IN_DAYS: number = -5;
    items: Array<Item>;

    constructor(items = [] as Array<Item>) {
        this.items = items;
    }

    updateStoreInventory(): Array<Item> {
        for (let i in this.items) {
            this.updateItemQuality(this.items[i]);
            this.updateItemQualityRange(this.items[i]);
            this.updateItemSellIn(this.items, Number(i));
        }
        return this.items;
    }

    private updateItemQuality(item: Item): void {
        if (item.sellIn === 0) {
            item.qualityDegradeRate *= 2;
        }
        item.quality -= item.qualityDegradeRate;
    }

    private updateItemQualityRange(item: Item): void {
        if (item.quality < this.MIN_ITEM_QUALITY) {
            item.quality = this.MIN_ITEM_QUALITY;
        } else if (item.quality > this.MAX_ITEM_QUALITY) {
            item.quality = this.MAX_ITEM_QUALITY;
        }
    }

    private updateItemSellIn(items: Array<Item>, currentIndex: number): void {
        if (items[currentIndex].sellIn == this.MIN_SELL_IN_DAYS) {
            items.splice(currentIndex, 1);
        } else {
            items[currentIndex].sellIn -= items[currentIndex].sellInDecrementRate;
        }
    }
}