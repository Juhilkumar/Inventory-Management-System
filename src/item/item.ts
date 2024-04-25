export class Item {
    name: string;
    sellIn: number;
    quality: number;
    qualityDegradeRate: number
    sellInDecrementRate: number
    onSale: boolean

    constructor(name: string,
                sellIn: number,
                quality: number,
                qualityDegradeRate ?: number,
                sellInDecrementRate ?: number,
                onSale?: boolean,
    ) {
        this.name = name;
        this.sellIn = sellIn;
        this.quality = quality;
        this.qualityDegradeRate = qualityDegradeRate ?? 1;
        this.sellInDecrementRate = sellInDecrementRate ?? 1;
        this.onSale = onSale ?? false;
    }
}