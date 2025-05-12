export class RiwayatGame {
    constructor() {
        this.riwayatMap = [];
    }

    getPanjangRiwayat() {
        return this.riwayatMap.length;
    }

    addRiwayat(papanBaru) {
        this.riwayatMap.push(
            papanBaru.map(row =>
                row.map(cell =>
                    Object.assign(Object.create(Object.getPrototypeOf(cell)), cell)
                )
            )
        );
    }
    
    undo() {
        if (this.riwayatMap.length >= 2) {
            this.riwayatMap.pop();
        }
        return this.riwayatMap[this.riwayatMap.length - 1].map(row =>
            row.map(cell =>
                Object.assign(Object.create(Object.getPrototypeOf(cell)), cell)
            )
        );
    }

    restart() {
        let riwayatTemp = this.riwayatMap[0];
        this.riwayatMap = [];
        this.addRiwayat(riwayatTemp);
        return this.riwayatMap[this.riwayatMap.length - 1].map(row =>
            row.map(cell =>
                Object.assign(Object.create(Object.getPrototypeOf(cell)), cell)
            )
        );
    }
}