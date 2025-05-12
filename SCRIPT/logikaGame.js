export class LogikaGame {
    constructor(papan, riwayatGame) {
        this.giliran = 'putih';
        this.papan = papan; // objek class Papan
        this.map = this.papan.getPapan(); // array berisi objek Bidak
        this.riwayatGame = riwayatGame;
        this.undo = document.getElementById('undo');
        this.restart = document.getElementById('restart');
    }

    #logikaJalan(bidakAsal, bidakTujuan) {
        let barisAsal = bidakAsal.getBaris();
        let kolomAsal = bidakAsal.getKolom();
        let namaAsal = bidakAsal.getNama();
        let warnaAsal = bidakAsal.getWarna();
        let barisTujuan = bidakTujuan.getBaris();
        let KolomTujuan = bidakTujuan.getKolom();
        this.papan.setBidak(namaAsal, warnaAsal, barisTujuan, KolomTujuan);
        this.papan.setBidak('kosong', '', barisAsal, kolomAsal);
        this.map = this.papan.getPapan();
        this.riwayatGame.addRiwayat(this.map);
    }

    #gantian() {
        if (this.giliran == 'putih') {
            return 'hitam';
        } else {
            return 'putih';
        }
    }

    #restart() {
        this.giliran = 'putih';
        let mapBaru = this.riwayatGame.restart();
        mapBaru.flat().forEach((bidak) => {
            this.papan.setBidak(bidak.getNama(), bidak.getWarna(), bidak.getBaris(), bidak.getKolom());
        });
    }

    #cekGameOver(warna) {
        let menang;
        if (warna == 'putih') {
            menang = 'HITAM';
        } else {
            menang = 'PUTIH';
        }
        document.getElementById('gameOver').style.display = 'flex';
        document.getElementById('judulGameOver').innerHTML = `${menang} MENANG`;
        document.getElementById('restartGameOver').addEventListener('click', () => {
            document.getElementById('gameOver').style.display = 'none';
            this.#restart();
        });
    }

    mulaiLogika() {
        let gameOver = false;
        let bidakTerpilih = this.map[0][0];
        let jalan = [[],[]];
        this.map.forEach((x) => {
            x.forEach((bidak) => {
                bidakTerpilih.diklik = false;
                bidak.getDataHTML().addEventListener('mouseenter', () => {
                    bidak = this.map[bidak.getBaris()][bidak.getKolom()];
                    bidakTerpilih = this.map[bidakTerpilih.getBaris()][bidakTerpilih.getKolom()];
                    if (!gameOver) {
                        if ((bidak.getWarna() == this.giliran && !bidak.diklik) || (bidakTerpilih.diklik && jalan.flat().includes(bidak))) {
                            bidak.getDataHTML().style.cursor = 'pointer';
                            bidak.getDataHTML().style.backgroundColor = 'rgba(2, 173, 159, 0.3)';
                        }
                    }
                });
                bidak.getDataHTML().addEventListener('mouseleave', () => {
                    bidak = this.map[bidak.getBaris()][bidak.getKolom()];
                    bidakTerpilih = this.map[bidakTerpilih.getBaris()][bidakTerpilih.getKolom()];
                    if (!gameOver) {
                        bidak.getDataHTML().style.cursor = 'default';
                        if (bidak.getWarna() == this.giliran && !bidak.diklik) {
                            bidak.getDataHTML().style.backgroundColor = '';
                        }
                        if (bidakTerpilih.diklik && jalan[0].includes(bidak)) {
                            bidak.getDataHTML().style.backgroundColor = 'rgba(2, 13, 173, 0.3)';
                        }
                        if (bidakTerpilih.diklik && jalan[1].includes(bidak)) {
                            bidak.getDataHTML().style.backgroundColor = 'rgba(173, 2, 2, 0.3)';
                        }
                    }
                });
                bidak.getDataHTML().addEventListener('click', () => {
                    bidak = this.map[bidak.getBaris()][bidak.getKolom()];
                    bidakTerpilih = this.map[bidakTerpilih.getBaris()][bidakTerpilih.getKolom()];
                    if (!gameOver) {
                        if (bidak.getWarna() == this.giliran) {
                            if (bidakTerpilih === bidak) {
                                bidakTerpilih.diklik = !bidakTerpilih.diklik;
                            } else {
                                bidakTerpilih.diklik = false;
                                jalan.flat().forEach((jalan2) => {jalan2.getDataHTML().style.backgroundColor = '';});
                                bidakTerpilih.getDataHTML().style.backgroundColor = '';
                                bidakTerpilih = bidak;
                                bidakTerpilih.diklik = true;
                            }
                            if (bidakTerpilih.diklik) {
                                jalan = bidakTerpilih.cekJalan(this.papan.getPapan());
                                for (let i = 0; i < jalan[0].length; i++) {
                                    jalan[0][i].getDataHTML().style.backgroundColor = 'rgba(2, 13, 173, 0.3)'
                                }
                                for (let i = 0; i < jalan[1].length; i++) {
                                    jalan[1][i].getDataHTML().style.backgroundColor = 'rgba(173, 2, 2, 0.3)'
                                }
                                bidakTerpilih.getDataHTML().style.backgroundColor = 'rgba(2, 173, 159, 0.8)';
                            } else {
                                jalan.flat().forEach((jalan2) => {jalan2.getDataHTML().style.backgroundColor = '';});
                                bidakTerpilih.getDataHTML().style.backgroundColor = 'rgba(2, 173, 159, 0.3)';
                            }
                        }
                        if (jalan.flat().includes(bidak) && bidakTerpilih.diklik) {
                            jalan.flat().forEach((jalan2) => {jalan2.getDataHTML().style.backgroundColor = '';});
                            bidakTerpilih.getDataHTML().style.backgroundColor = '';
                            bidakTerpilih.diklik = false;
                            this.#logikaJalan(bidakTerpilih, bidak);
                            this.giliran = this.#gantian(this.giliran);
                            if (bidak.getNama() == 'raja') {
                                this.#cekGameOver(bidak.getWarna());
                            }
                        }
                    }
                });
            });
        });
        this.undo.addEventListener('click', () => {
            if (this.riwayatGame.getPanjangRiwayat() != 1) {
                this.giliran = this.#gantian(this.giliran);
            }
            let mapBaru = this.riwayatGame.undo();
            this.papan.setPapan(mapBaru);
            this.map = mapBaru;
            mapBaru.flat().forEach((bidak) => {
                this.papan.setBidak(bidak.getNama(), bidak.getWarna(), bidak.getBaris(), bidak.getKolom());
            });
        });
        this.restart.addEventListener('click', () => {
            this.#restart();
        });
    }
}