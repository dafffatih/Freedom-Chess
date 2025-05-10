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

    cekWarnaBidak(bidak) {

    }

    setBidak(bidak, warna, baris, kolom) {
        switch (bidak) {
            case 'pion':
                // if (warna == 'putih') {
                //     this.papanHTML[baris][kolom].innerHTML = this.pionPutih;
                // } else {
                //     this.papanHTML[baris][kolom].innerHTML = this.pionHitam;
                // }
                this.papan[baris][kolom] = new Bidak.Pion(warna, baris, kolom, this.papanHTML[baris][kolom]);
                break;
            case 'benteng':
                // if (warna == 'putih') {
                //     this.papanHTML[baris][kolom].innerHTML = this.bentengPutih;
                // } else {
                //     this.papanHTML[baris][kolom].innerHTML = this.bentengHitam;
                // }
                this.papan[baris][kolom] = new Bidak.Benteng(warna, baris, kolom, this.papanHTML[baris][kolom]);
                break;
            case 'kuda':
                // if (warna == 'putih') {
                //     this.papanHTML[baris][kolom].innerHTML = this.kudaPutih;
                // } else {
                //     this.papanHTML[baris][kolom].innerHTML = this.kudaHitam;
                // }
                this.papan[baris][kolom] = new Bidak.Kuda(warna, baris, kolom, this.papanHTML[baris][kolom]);
                break;
            case 'peluncur':
                // if (warna == 'putih') {
                //     this.papanHTML[baris][kolom].innerHTML = this.peluncurPutih;
                // } else {
                //     this.papanHTML[baris][kolom].innerHTML = this.peluncurHitam;
                // }
                this.papan[baris][kolom] = new Bidak.Peluncur(warna, baris, kolom, this.papanHTML[baris][kolom]);
                break;
            case 'mentri':
                // if (warna == 'putih') {
                //     this.papanHTML[baris][kolom].innerHTML = this.mentriPutih;
                // } else {
                //     this.papanHTML[baris][kolom].innerHTML = this.mentriHitam;
                // }
                this.papan[baris][kolom] = new Bidak.Mentri(warna, baris, kolom, this.papanHTML[baris][kolom]);
                break;
            case 'raja':
                // if (warna == 'putih') {
                //     this.papanHTML[baris][kolom].innerHTML = this.rajaPutih;
                // } else {
                //     this.papanHTML[baris][kolom].innerHTML = this.rajaHitam;
                // }
                this.papan[baris][kolom] = new Bidak.Raja(warna, baris, kolom, this.papanHTML[baris][kolom]);
                break;
            case 'kosong':
                // this.papanHTML[baris][kolom].innerHTML = '';
                this.papan[baris][kolom] = new Bidak.Kosong(warna, baris, kolom, this.papanHTML[baris][kolom]);
                break;
        }
    }
}