import * as Bidak from "./bidak.js";

export class Papan {
    constructor() {
        this.papan = Array(8).fill(null).map(() => Array(8).fill(null));
    }

    setBidak(bidak, warna, baris, kolom) {
        if (bidak == 'pion') {
            this.papan[baris][kolom] = new Bidak.Pion(warna, baris, kolom);
        }
        // const bidak = new Bidak(warna, {baris, kolom});
    }
}

const papan = new Papan();