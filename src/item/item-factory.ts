import {ItemTypes} from "./item-types";
import {OrganicItem} from "./types/organic-item";
import {SpecialItem} from "./types/special-item";
import {NormalItem} from "./types/normal-item";
import {Item} from "./item";

export class ItemFactory {
    createItem(type : string,
               name: string,
               sellIn: number,
               quality: number,
               qualityDegradeRate ?: number,
               sellInDecrementRate ?: number) : Item {
        switch (type) {
            case ItemTypes.ORGANIC:
                return new OrganicItem(name, sellIn, quality);
            case ItemTypes.SPECIAL:
                return new SpecialItem(name, sellIn, quality, qualityDegradeRate, sellInDecrementRate);
            default:
                return new NormalItem(name, sellIn, quality);
        }
    }
}