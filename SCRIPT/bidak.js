export class Bidak {
    constructor(warna, baris, kolom, dataHTML) {
        this.warna = warna;
        this.baris = baris;
        this.kolom = kolom;
        this.dataHTML = dataHTML;
    }

    jalanValid(papan) { //papan ini sisinya data semua bidak 8x8 untuk mencari dimanakah jalan yang valid
        return [[],[]];
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
    jalanValid(papan) {
        return [[],[]];
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
    jalanValid(papan) {
        return [[],[]];
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
    jalanValid(papan) {
        return [[],[]];
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
    jalanValid(papan) {
        return [[],[]];
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
    jalanValid(papan) {
        return [[],[]];
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
    jalanValid(papan) {
        return [[],[]];
    }
}

export class Kosong extends Bidak {
    constructor(warna, baris, kolom, dataHTML) {
        super(warna, baris, kolom, dataHTML);
        dataHTML.innerHTML = '';
    }
    jalanValid(papan) {
        return [[],[]];
    }
}