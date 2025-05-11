export class Bidak {
    constructor(nama, warna, baris, kolom, dataHTML) {
        this.nama = nama;
        this.warna = warna;
        this.baris = baris;
        this.kolom = kolom;
        this.dataHTML = dataHTML;
        this.jalan = [[],[]]; // [[kosong],[musuh]]
    }

    cekJalan(papan) { //papan ini isinya data semua bidak 8x8 untuk mencari dimanakah jalan yang valid
        return this.jalan;
    }

    jalan(barisBaru, kolomBaru, dataHTMLBaru) {
        this.baris = barisBaru;
        this.kolom = kolomBaru;
        this.dataHTML = dataHTMLBaru;
    }
    
    getNama() {
        return this.nama;
    }

    getWarna() {
        return this.warna;
    }
    
    getBaris() {
        return this.baris;
    }
    
    getKolom() {
        return this.kolom;
    }

    getDataHTML() {
        return this.dataHTML;
    }
}

export class Pion extends Bidak {
    constructor(nama, warna, baris, kolom, dataHTML) {
        super(nama, warna, baris, kolom, dataHTML);
        if (warna == 'putih') {
            dataHTML.innerHTML = '<i class="fa-solid fa-chess-pawn" style="color: white"></i>';
        } else {
            dataHTML.innerHTML = '<i class="fa-solid fa-chess-pawn"></i>';
        }
    }
    
    cekJalan(papan) {
        if (this.warna == 'putih') {
            if (this.baris > 0 && papan[this.baris - 1][this.kolom].getWarna() == '') {
                this.jalan[0].push(papan[this.baris - 1][this.kolom]);
                if (this.baris == 6 && papan[this.baris - 2][this.kolom].getWarna() == '') {
                    this.jalan[0].push(papan[this.baris - 2][this.kolom]);
                } 
            }
            if (this.kolom > 0 && papan[this.baris - 1][this.kolom - 1].getWarna() == 'hitam') {
                this.jalan[1].push(papan[this.baris - 1][this.kolom - 1]);
            }
            if (this.kolom < 7 && papan[this.baris - 1][this.kolom + 1].getWarna() == 'hitam') {
                this.jalan[1].push(papan[this.baris - 1][this.kolom + 1]);
            }
        } else {
            if (this.baris < 7 && papan[this.baris + 1][this.kolom].getWarna() == '') {
                this.jalan[0].push(papan[this.baris + 1][this.kolom]);
                if (this.baris == 1 && papan[this.baris + 2][this.kolom].getWarna() == '') {
                    this.jalan[0].push(papan[this.baris + 2][this.kolom]);
                } 
            }
            if (this.kolom > 0 && papan[this.baris + 1][this.kolom - 1].getWarna() == 'putih') {
                this.jalan[1].push(papan[this.baris + 1][this.kolom - 1]);
            }
            if (this.kolom < 7 && papan[this.baris + 1][this.kolom + 1].getWarna() == 'putih') {
                this.jalan[1].push(papan[this.baris + 1][this.kolom + 1]);
            }
        }
        return this.jalan;
    }
}

export class Benteng extends Bidak {
    constructor(nama, warna, baris, kolom, dataHTML) {
        super(nama, warna, baris, kolom, dataHTML);
        if (warna == 'putih') {
            dataHTML.innerHTML = '<i class="fa-solid fa-chess-rook" style="color: white"></i>';
        } else {
            dataHTML.innerHTML = '<i class="fa-solid fa-chess-rook"></i>';
        }
    }
    cekJalan(papan) {
        return this.jalan;
    }
}

export class Kuda extends Bidak {
    constructor(nama, warna, baris, kolom, dataHTML) {
        super(nama, warna, baris, kolom, dataHTML);
        if (warna == 'putih') {
            dataHTML.innerHTML = '<i class="fa-solid fa-chess-knight" style="color: white"></i>';
        } else {
            dataHTML.innerHTML = '<i class="fa-solid fa-chess-knight"></i>';
        }
    }
    cekJalan(papan) {
        return this.jalan;
    }
}

export class Peluncur extends Bidak {
    constructor(nama, warna, baris, kolom, dataHTML) {
        super(nama, warna, baris, kolom, dataHTML);
        if (warna == 'putih') {
            dataHTML.innerHTML = '<i class="fa-solid fa-chess-bishop" style="color: white"></i>';
        } else {
            dataHTML.innerHTML = '<i class="fa-solid fa-chess-bishop"></i>';
        }
    }
    cekJalan(papan) {
        return this.jalan;
    }
}

export class Mentri extends Bidak {
    constructor(nama, warna, baris, kolom, dataHTML) {
        super(nama, warna, baris, kolom, dataHTML);
        if (warna == 'putih') {
            dataHTML.innerHTML = '<i class="fa-solid fa-chess-queen" style="color: white"></i>';
        } else {
            dataHTML.innerHTML = '<i class="fa-solid fa-chess-queen"></i>';
        }
    }
    cekJalan(papan) {
        return this.jalan;
    }
}

export class Raja extends Bidak {
    constructor(nama, warna, baris, kolom, dataHTML) {
        super(nama, warna, baris, kolom, dataHTML);
        if (warna == 'putih') {
            dataHTML.innerHTML = '<i class="fa-solid fa-chess-king" style="color: white"></i>';
        } else {
            dataHTML.innerHTML = '<i class="fa-solid fa-chess-king"></i>';
        }
    }
    cekJalan(papan) {
        return this.jalan;
    }
}

export class Kosong extends Bidak {
    constructor(nama, warna, baris, kolom, dataHTML) {
        super(nama, warna, baris, kolom, dataHTML);
        dataHTML.innerHTML = '';
    }
    cekJalan(papan) {
        return this.jalan;
    }
}