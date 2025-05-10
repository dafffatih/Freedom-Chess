import { Papan } from "./papan.js";
import { LogikaGame } from "./logikaGame.js";

export class GameManager {
    constructor() {
        this.papan = new Papan();
        this.logikaGame = new LogikaGame(this.papan);
    }

    #susunBidak() {
        for (let i = 0; i < 8; i++) {
            this.papan.setBidak('pion', 'putih', 6, i);
            this.papan.setBidak('pion', 'hitam', 1, i);
            for (let j = 2; j < 6; j++) {
                this.papan.setBidak('kosong', '', j, i);
            }
        }
        this.papan.setBidak('benteng', 'hitam', 0, 0);
        this.papan.setBidak('kuda', 'hitam', 0, 1);
        this.papan.setBidak('peluncur', 'hitam', 0, 2);
        this.papan.setBidak('raja', 'hitam', 0, 3);
        this.papan.setBidak('mentri', 'hitam', 0, 4);
        this.papan.setBidak('peluncur', 'hitam', 0, 5);
        this.papan.setBidak('kuda', 'hitam', 0, 6);
        this.papan.setBidak('benteng', 'hitam', 0, 7);
        this.papan.setBidak('benteng', 'putih', 7, 0);
        this.papan.setBidak('kuda', 'putih', 7, 1);
        this.papan.setBidak('peluncur', 'putih', 7, 2);
        this.papan.setBidak('raja', 'putih', 7, 3);
        this.papan.setBidak('mentri', 'putih', 7, 4);
        this.papan.setBidak('peluncur', 'putih', 7, 5);
        this.papan.setBidak('kuda', 'putih', 7, 6);
        this.papan.setBidak('benteng', 'putih', 7, 7);
    }

    mulaiGame() {
        this.#susunBidak();
        this.logikaGame.mulaiLogika(this.papan);
    }


}