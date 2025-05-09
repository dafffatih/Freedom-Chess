export class Bidak {
    constructor(warna, baris, kolom) {
        this.warna = warna;
        this.baris = baris;
        this.kolom = kolom;
    }

    jalanValid(papan) { //papan ini sisinya data semua bidak 8x8 untuk mencari dimanakah jalan yang valid
        return [[],[]];
    }

    setPosisiBaru(baris, kolom) {
        this.baris = baris;
        this.kolom = kolom;
    }

    getBaris() {
        return this.baris;
    }

    getKolom() {
        return this.kolom;
    }
}

export class Pion extends Bidak {
    constructor(warna, baris, kolom) {
        super(warna, baris, kolom);
    }
    jalanValid(papan) {
        return [[],[]];
    }
}

export class Benteng extends Bidak {
    constructor(warna, baris, kolom) {
        super(warna, baris, kolom);
    }
    jalanValid(papan) {
        return [[],[]];
    }
}

export class Kuda extends Bidak {
    constructor(warna, baris, kolom) {
        super(warna, baris, kolom);
    }
    jalanValid(papan) {
        return [[],[]];
    }
}

export class Peluncur extends Bidak {
    constructor(warna, baris, kolom) {
        super(warna, baris, kolom);
    }
    jalanValid(papan) {
        return [[],[]];
    }
}

export class Mentri extends Bidak {
    constructor(warna, baris, kolom) {
        super(warna, baris, kolom);
    }
    jalanValid(papan) {
        return [[],[]];
    }
}

export class Raja extends Bidak {
    constructor(warna, baris, kolom) {
        super(warna, baris, kolom);
    }
    jalanValid(papan) {
        return [[],[]];
    }
}