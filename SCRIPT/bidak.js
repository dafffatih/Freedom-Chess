export class Bidak {
    constructor(warna, baris, kolom, dataHTML) {
        this.warna = warna;
        this.baris = baris;
        this.kolom = kolom;
        this.dataHTML = dataHTML;
        this.jalan = [[],[]]; // [[kosong],[musuh]]
    }

    cekJalan(papan) { //papan ini sisinya data semua bidak 8x8 untuk mencari dimanakah jalan yang valid
        return jalan;
    }

    setPosisiBaru(baris, kolom) {
        this.baris = baris;
        this.kolom = kolom;
    }

    getDataHTML() {
        return this.dataHTML;
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
}

export class Pion extends Bidak {
    constructor(warna, baris, kolom, dataHTML) {
        super(warna, baris, kolom, dataHTML);
        if (warna == 'putih') {
            dataHTML.innerHTML = '<i class="fa-solid fa-chess-pawn" style="color: white"></i>';
        } else {
            dataHTML.innerHTML = '<i class="fa-solid fa-chess-pawn"></i>';
        }
    }
    cekJalan(papan) {
        if (warna == 'putih') {
            if (baris > 0 && papan[baris - 1][kolom].getWarna == '') {
                this.jalan[0].push(papan[baris - 1][kolom]);
                if (this.baris == 6 && papan[baris - 2][kolom].getWarna == '') {
                    this.jalan[0].push(papan[baris - 2][kolom]);
                } 
            }
            if (kolom > 0 && papan[baris - 1][kolom - 1].getWarna == 'hitam') {
                this.jalan[1].push(papan[baris - 1][kolom - 1]);
            }
            if (kolom < 7 && papan[baris - 1][kolom + 1].getWarna == 'hitam') {
                this.jalan[1].push(papan[baris - 1][kolom + 1]);
            }
        } else {
            if (baris < 7 && papan[baris + 1][kolom].getWarna == '') {
                this.jalan[0].push(papan[baris + 1][kolom]);
                if (this.baris == 1 && papan[baris + 2][kolom].getWarna == '') {
                    this.jalan[0].push(papan[baris + 2][kolom]);
                } 
            }
            if (kolom > 0 && papan[baris + 1][kolom - 1].getWarna == 'putih') {
                this.jalan[1].push(papan[baris + 1][kolom - 1]);
            }
            if (kolom < 7 && papan[baris + 1][kolom + 1].getWarna == 'putih') {
                this.jalan[1].push(papan[baris + 1][kolom + 1]);
            }
        }
        return jalan;
    }
}

export class Benteng extends Bidak {
    constructor(warna, baris, kolom, dataHTML) {
        super(warna, baris, kolom, dataHTML);
        if (warna == 'putih') {
            dataHTML.innerHTML = '<i class="fa-solid fa-chess-rook" style="color: white"></i>';
        } else {
            dataHTML.innerHTML = '<i class="fa-solid fa-chess-rook"></i>';
        }
    }
    cekJalan(papan) {
        return jalan;
    }
}

export class Kuda extends Bidak {
    constructor(warna, baris, kolom, dataHTML) {
        super(warna, baris, kolom, dataHTML);
        if (warna == 'putih') {
            dataHTML.innerHTML = '<i class="fa-solid fa-chess-knight" style="color: white"></i>';
        } else {
            dataHTML.innerHTML = '<i class="fa-solid fa-chess-knight"></i>';
        }
    }
    cekJalan(papan) {
        return jalan;
    }
}

export class Peluncur extends Bidak {
    constructor(warna, baris, kolom, dataHTML) {
        super(warna, baris, kolom, dataHTML);
        if (warna == 'putih') {
            dataHTML.innerHTML = '<i class="fa-solid fa-chess-bishop" style="color: white"></i>';
        } else {
            dataHTML.innerHTML = '<i class="fa-solid fa-chess-bishop"></i>';
        }
    }
    cekJalan(papan) {
        return jalan;
    }
}

export class Mentri extends Bidak {
    constructor(warna, baris, kolom, dataHTML) {
        super(warna, baris, kolom, dataHTML);
        if (warna == 'putih') {
            dataHTML.innerHTML = '<i class="fa-solid fa-chess-queen" style="color: white"></i>';
        } else {
            dataHTML.innerHTML = '<i class="fa-solid fa-chess-queen"></i>';
        }
    }
    cekJalan(papan) {
        return jalan;
    }
}

export class Raja extends Bidak {
    constructor(warna, baris, kolom, dataHTML) {
        super(warna, baris, kolom, dataHTML);
        if (warna == 'putih') {
            dataHTML.innerHTML = '<i class="fa-solid fa-chess-king" style="color: white"></i>';
        } else {
            dataHTML.innerHTML = '<i class="fa-solid fa-chess-king"></i>';
        }
    }
    cekJalan(papan) {
        return jalan;
    }
}

export class Kosong extends Bidak {
    constructor(warna, baris, kolom, dataHTML) {
        super(warna, baris, kolom, dataHTML);
        dataHTML.innerHTML = '';
    }
    cekJalan(papan) {
        return jalan;
    }
}