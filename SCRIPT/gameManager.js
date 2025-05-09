import { Papan } from "./papan.js";

export class GameManager {
    constructor() {
        this.papan = new Papan();
    }

    #susunBidak() {
        this.papan.setBidak('pion', 'putih', 1, 2);
    }

    mulaiGame() {
        this.#susunBidak();
    }


}