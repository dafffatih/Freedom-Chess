export class LogikaGame {
    constructor(papan) {
        this.papan = papan;
        this.map = this.papan.getPapan();
        this.mapHTML = this.papan.getPapanHTML();
    }

    mulaiLogika() {
        let gameOver = false;
        let giliran = 'putih';
        let bidakTerpilih = this.map[0][0];
        let jalan = [[],[]];
        this.map.forEach((x, baris) => {
            x.forEach((bidak, kolom) => {
                bidakTerpilih.diklik = false;
                bidak.getDataHTML().addEventListener('mouseenter', function() {
                    if (!gameOver) {
                        if (bidak.getWarna() == giliran && !bidak.diklik) {
                            bidak.getDataHTML().style.backgroundColor = 'rgba(2, 173, 159, 0.8)';
                        }
                        if (bidakTerpilih.diklik) {
                            
                        }
                    }
                });
                bidak.getDataHTML().addEventListener('mouseleave', function() {
                    if (!gameOver) {
                        if (bidak.getWarna() == giliran && !bidak.diklik) {
                            bidak.getDataHTML().style.backgroundColor = '';
                        }
                    }
                });
                bidak.getDataHTML().addEventListener('click', function() {
                    // this.map[3][3].getDataHTML().innerHTML = "cobvaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa";
                    if (!gameOver) {
                        if (bidak.getWarna() == giliran) {
                            if (bidakTerpilih === bidak) {
                                bidakTerpilih.diklik = !bidakTerpilih.diklik;
                            } else {
                                bidakTerpilih.diklik = false;
                                bidakTerpilih.getDataHTML().style.backgroundColor = '';
                                bidakTerpilih = bidak;
                                bidakTerpilih.diklik = true;
                            }
                            if (bidakTerpilih.diklik) {
                                jalan = bidakTerpilih.cekJalan();
                                // for (let i = 0; i < jalan[0].length; i++) {
                                //     jalan[0][i].getDataHTML().style.backgroundColor = 'rgba(2, 13, 173, 0.8)'
                                // }
                                // for (let i = 0; i < jalan[1].length; i++) {
                                //     jalan[1][i].getDataHTML().style.backgroundColor = 'rgba(173, 2, 2, 0.8)'
                                // }
                                bidakTerpilih.getDataHTML().style.backgroundColor = 'rgba(2, 173, 159, 1)';
                            } else {
                                bidakTerpilih.getDataHTML().style.backgroundColor = 'rgba(2, 173, 159, 0.8)';
                            }
                        }
                    }
                });
            });
        });
        // this.papan.setBidak('pion', 'putih', 3, 4);
    }
}