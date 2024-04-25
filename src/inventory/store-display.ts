import {Inventory} from "./inventory";
import {StoreService} from "./store-service";
import {Item} from "../item/item";

export class StoreDisplay{
    inventory : Inventory = new Inventory();
    items : Array<Item> = this.inventory.getItems();
    storeService : StoreService = new StoreService(this.items);
    days: number = 5;

    displayStoreInventory() : void {
        for (let i = 0; i < this.days; i++) {
            console.log(`\n Day ${i} ${'-'.repeat(35)}`);
            console.table(this.items, ["name", "sellIn", "quality"]);
            this.storeService.updateStoreInventory();
        }
    }
}