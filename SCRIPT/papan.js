import * as Bidak from "./bidak.js";

export class Papan {
    constructor() {
        // papan = array(bidak, bidak, bidak, ...) 2d
        // papanHTML = (td, td, td, td) 2d
        this.papan = Array(8).fill(null).map(() => Array(8).fill(null));
        const tabel = document.querySelectorAll('.papan tr');
        this.papanHTML = [];
        tabel.forEach((baris) => {
            const kolom = baris.querySelectorAll('td');
            this.papanHTML.push(Array.from(kolom));
        });
        this.pionPutih = '<i class="fa-solid fa-chess-pawn pion bidakPutih" style="color: white"></i>';
        this.bentengPutih = '<i class="fa-solid fa-chess-rook benteng bidakPutih" style="color: white"></i>';
        this.peluncurPutih = '<i class="fa-solid fa-chess-bishop peluncur bidakPutih" style="color: white"></i>';
        this.kudaPutih = '<i class="fa-solid fa-chess-knight kuda bidakPutih" style="color: white"></i>';
        this.rajaPutih = '<i class="fa-solid fa-chess-king raja bidakPutih" style="color: white"></i>';
        this.mentriPutih = '<i class="fa-solid fa-chess-queen mentri bidakPutih" style="color: white"></i>';
        this.pionHitam = '<i class="fa-solid fa-chess-pawn pion bidakHitam"></i>';
        this.bentengHitam = '<i class="fa-solid fa-chess-rook benteng bidakHitam"></i>';
        this.peluncurHitam = '<i class="fa-solid fa-chess-bishop peluncur bidakHitam"></i>';
        this.kudaHitam = '<i class="fa-solid fa-chess-knight kuda bidakHitam"></i>';
        this.rajaHitam = '<i class="fa-solid fa-chess-king raja bidakHitam"></i>';
        this.mentriHitam = '<i class="fa-solid fa-chess-queen mentri bidakHitam"></i>';
    }

    getPapan() {
        return this.papan;
    }

    getPapanHTML() {
        return this.papanHTML;
    }

    setPapan(papan) {
        this.papan = papan;
    }

    setPapanHTML(papanHTML) {
        this.papanHTML = papanHTML;
    }

    setBidak(bidak, warna, baris, kolom) {
        switch (bidak) {
            case 'pion':
                this.papan[baris][kolom] = new Bidak.Pion(bidak, warna, baris, kolom, this.papanHTML[baris][kolom]);
                break;
            case 'benteng':
                this.papan[baris][kolom] = new Bidak.Benteng(bidak, warna, baris, kolom, this.papanHTML[baris][kolom]);
                break;
            case 'kuda':
                this.papan[baris][kolom] = new Bidak.Kuda(bidak, warna, baris, kolom, this.papanHTML[baris][kolom]);
                break;
            case 'peluncur':
                this.papan[baris][kolom] = new Bidak.Peluncur(bidak, warna, baris, kolom, this.papanHTML[baris][kolom]);
                break;
            case 'mentri':
                this.papan[baris][kolom] = new Bidak.Mentri(bidak, warna, baris, kolom, this.papanHTML[baris][kolom]);
                break;
            case 'raja':
                this.papan[baris][kolom] = new Bidak.Raja(bidak, warna, baris, kolom, this.papanHTML[baris][kolom]);
                break;
            case 'kosong':
                this.papan[baris][kolom] = new Bidak.Kosong(bidak, warna, baris, kolom, this.papanHTML[baris][kolom]);
                break;
        }
    }
}