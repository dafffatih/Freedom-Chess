const rows = document.querySelectorAll('.papan tr');
const petak = [];

rows.forEach((row) => {
    const cols = row.querySelectorAll('td');
    petak.push(Array.from(cols));
});

const pionPutih = '<i class="fa-solid fa-chess-pawn pion bidakPutih" style="color: white"></i>';
const bentengPutih = '<i class="fa-solid fa-chess-rook benteng bidakPutih" style="color: white"></i>';
const peluncurPutih = '<i class="fa-solid fa-chess-bishop peluncur bidakPutih" style="color: white"></i>';
const kudaPutih = '<i class="fa-solid fa-chess-knight kuda bidakPutih" style="color: white"></i>';
const rajaPutih = '<i class="fa-solid fa-chess-king raja bidakPutih" style="color: white"></i>';
const mentriPutih = '<i class="fa-solid fa-chess-queen mentri bidakPutih" style="color: white"></i>';

const pionHitam = '<i class="fa-solid fa-chess-pawn pion bidakHitam"></i>';
const bentengHitam = '<i class="fa-solid fa-chess-rook benteng bidakHitam"></i>';
const peluncurHitam = '<i class="fa-solid fa-chess-bishop peluncur bidakHitam"></i>';
const kudaHitam = '<i class="fa-solid fa-chess-knight kuda bidakHitam"></i>';
const rajaHitam = '<i class="fa-solid fa-chess-king raja bidakHitam"></i>';
const mentriHitam = '<i class="fa-solid fa-chess-queen mentri bidakHitam"></i>';

for (let i = 0; i < 8; i++){
    petak[1][i].innerHTML = pionHitam;
}
petak[0][0].innerHTML = bentengHitam;
petak[0][1].innerHTML = kudaHitam;
petak[0][2].innerHTML = peluncurHitam;
petak[0][3].innerHTML = mentriHitam;
petak[0][4].innerHTML = rajaHitam;
petak[0][5].innerHTML = peluncurHitam;
petak[0][6].innerHTML = kudaHitam;
petak[0][7].innerHTML = bentengHitam;

for (let i = 0; i < 8; i++){
    petak[6][i].innerHTML = pionPutih;
}
petak[7][0].innerHTML = bentengPutih;
petak[7][1].innerHTML = kudaPutih;
petak[7][2].innerHTML = peluncurPutih;
petak[7][3].innerHTML = mentriPutih;
petak[7][4].innerHTML = rajaPutih;
petak[7][5].innerHTML = peluncurPutih;
petak[7][6].innerHTML = kudaPutih;
petak[7][7].innerHTML = bentengPutih;

function cekWarna(giliran) {
    if (giliran) {
        return '.bidakPutih';
    } else {
        return '.bidakHitam';
    }
}

function cekTujuan(warna, baris, kolom) {
    if (petak[baris][kolom].querySelector(cekWarna(!warna))) {
        return 1; // ada musuh
    } else if (petak[baris][kolom].querySelector(cekWarna(warna))) {
        return 2; // ada kawan
    } else {
        return 3; // kosong
    }
}

function logikaPion(warna, jalan, baris, kolom) {
    if (warna) {
        if (baris != 0 && cekTujuan(warna, baris - 1, kolom) == 3) {
            jalan[1].push(petak[baris - 1][kolom]);
            if (baris == 6 && cekTujuan(warna, baris - 2, kolom) == 3) {
                jalan[1].push(petak[baris - 2][kolom]);
            }
        }
        if (kolom - 1 >= 0){
            if (cekTujuan(warna, baris - 1, kolom - 1) == 1) {
                jalan[0].push(petak[baris - 1][kolom - 1]);
            }
        }
        if (kolom + 1 <= 7){
            if (cekTujuan(warna, baris - 1, kolom + 1) == 1) {
                jalan[0].push(petak[baris - 1][kolom + 1]);
            }
        }
    } else if (!warna) {
        if (baris != 7 && cekTujuan(warna, baris + 1, kolom) == 3) {
            jalan[1].push(petak[baris + 1][kolom]);
            if (baris == 1 && cekTujuan(warna, baris + 2, kolom) == 3) {
                jalan[1].push(petak[baris + 2][kolom]);
            }
        }
        if (kolom - 1 >= 0){
            if (cekTujuan(warna, baris + 1, kolom - 1) == 1) {
                jalan[0].push(petak[baris + 1][kolom - 1]);
            }
        }
        if (kolom + 1 <= 7){
            if (cekTujuan(warna, baris + 1, kolom + 1) == 1) {
                jalan[0].push(petak[baris + 1][kolom + 1]);
            }
        }
    }
    return jalan;
}

function logikaBenteng(warna, jalan, baris, kolom) {
    let jarakBaris = [-1, 0, 1, 0];
    let jarakKolom = [0, 1, 0, -1];
    for (let i = 0; i < 4; i++) {
        let barisTemp = baris + jarakBaris[i];
        let kolomTemp = kolom + jarakKolom[i];
        while (barisTemp >= 0 && barisTemp <= 7 && kolomTemp >= 0 && kolomTemp <= 7) {
            if (cekTujuan(warna, barisTemp, kolomTemp) == 2) {
                break;
            } else if (cekTujuan(warna, barisTemp, kolomTemp) == 1) {
                jalan[0].push(petak[barisTemp][kolomTemp]);
                break;
            } else if (cekTujuan(warna, barisTemp, kolomTemp) == 3) {
                jalan[1].push(petak[barisTemp][kolomTemp]);
            }
            barisTemp += jarakBaris[i];
            kolomTemp += jarakKolom[i];
        }
    }
    return jalan;
}

function logikaKuda(warna, jalan, baris, kolom) {
    let jarakBaris = [-2, -2, -1, 1, 2, 2, 1, -1];
    let jarakKolom = [-1, 1, 2, 2, 1, -1, -2, -2];
    for(let i = 0; i < 8; i++) {
        if (baris + jarakBaris[i] >= 0 && baris + jarakBaris[i] <= 7 && kolom + jarakKolom[i] >= 0 && kolom + jarakKolom[i] <= 7)
        if (cekTujuan(warna, baris + jarakBaris[i], kolom + jarakKolom[i]) == 1) {
            jalan[0].push(petak[baris + jarakBaris[i]][kolom + jarakKolom[i]]);
        } else if (cekTujuan(warna, baris + jarakBaris[i], kolom + jarakKolom[i]) == 3) {
            jalan[1].push(petak[baris + jarakBaris[i]][kolom + jarakKolom[i]]);
        }
    }
    return jalan;
}

function logikaPeluncur(warna, jalan, baris, kolom) {
    let jarakBaris = [-1, 1, 1, -1];
    let jarakKolom = [1, 1, -1, -1];
    for (let i = 0; i < 4; i++) {
        let barisTemp = baris + jarakBaris[i];
        let kolomTemp = kolom + jarakKolom[i];
        while (barisTemp >= 0 && barisTemp <= 7 && kolomTemp >= 0 && kolomTemp <= 7) {
            if (cekTujuan(warna, barisTemp, kolomTemp) == 2) {
                break;
            } else if (cekTujuan(warna, barisTemp, kolomTemp) == 1) {
                jalan[0].push(petak[barisTemp][kolomTemp]);
                break;
            } else if (cekTujuan(warna, barisTemp, kolomTemp) == 3) {
                jalan[1].push(petak[barisTemp][kolomTemp]);
            }
            barisTemp += jarakBaris[i];
            kolomTemp += jarakKolom[i];
        }
    }
    return jalan;
}

function logikaMentri(warna, jalan, baris, kolom) {
    let jarakBaris = [-1, -1, 0, 1, 1, 1, 0, -1];
    let jarakKolom = [0, 1, 1, 1, 0, -1, -1, -1];
    for (let i = 0; i < 8; i++) {
        let barisTemp = baris + jarakBaris[i];
        let kolomTemp = kolom + jarakKolom[i];
        while (barisTemp >= 0 && barisTemp <= 7 && kolomTemp >= 0 && kolomTemp <= 7) {
            if (cekTujuan(warna, barisTemp, kolomTemp) == 2) {
                break;
            } else if (cekTujuan(warna, barisTemp, kolomTemp) == 1) {
                jalan[0].push(petak[barisTemp][kolomTemp]);
                break;
            } else if (cekTujuan(warna, barisTemp, kolomTemp) == 3) {
                jalan[1].push(petak[barisTemp][kolomTemp]);
            }
            barisTemp += jarakBaris[i];
            kolomTemp += jarakKolom[i];
        }
    }
    return jalan;
}

function logikaRaja(warna, jalan, baris, kolom) {
    let jarakBaris = [-1, -1, 0, 1, 1, 1, 0, -1];
    let jarakKolom = [0, 1, 1, 1, 0, -1, -1, -1];
    for (let i = 0; i < 8; i++) {
        let barisTemp = baris + jarakBaris[i];
        let kolomTemp = kolom + jarakKolom[i];
        if (barisTemp >= 0 && barisTemp <= 7 && kolomTemp >= 0 && kolomTemp <= 7) {
            if (cekTujuan(warna, barisTemp, kolomTemp) == 1) {
                jalan[0].push(petak[barisTemp][kolomTemp]);
            } else if (cekTujuan(warna, barisTemp, kolomTemp) == 3) {
                jalan[1].push(petak[barisTemp][kolomTemp]);
            }
        }
    }
    return jalan;
}

function logikaBidak(warna, kotak, baris, kolom) {
    let jalan = [[], []];
    let bidak = kotak.querySelector('i');
    if (bidak.classList.contains('pion')){
        jalan = logikaPion(warna, jalan, baris, kolom);
    } else if (bidak.classList.contains('benteng')){
        jalan = logikaBenteng(warna, jalan, baris, kolom);
    } else if (bidak.classList.contains('kuda')){
        jalan = logikaKuda(warna, jalan, baris, kolom);
    } else if (bidak.classList.contains('peluncur')){
        jalan = logikaPeluncur(warna, jalan, baris, kolom);
    } else if (bidak.classList.contains('mentri')){
        jalan = logikaMentri(warna, jalan, baris, kolom);
    } else if (bidak.classList.contains('raja')){
        jalan = logikaRaja(warna, jalan, baris, kolom);
    }
    return jalan;
}

function logikaGame() {
    let gameOver = false;
    let giliran = true;
    let jalan = [[], []];
    let jalanTerpilih = jalan;
    let kotakTerpilih = petak[0][0];
    petak.forEach((kolom, baris) => {
        kolom.forEach((kotak, kolom) => {
            kotak.diklik = false;
            kotakTerpilih.diklik = false;
            kotak.addEventListener("mouseenter", function() {
                if (!gameOver) {
                    if (!kotak.diklik && kotak.querySelector(cekWarna(giliran))) {
                        kotak.style.backgroundColor = "rgba(2, 173, 159, 0.8)";
                    } else if ((jalan[0].includes(kotak) || jalan[1].includes(kotak)) && kotakTerpilih.diklik){
                        kotak.style.backgroundColor = "rgba(2, 173, 159, 0.8)";
                    }
                }
            });
            kotak.addEventListener("mouseleave", function() {
                if (!gameOver) {
                    if (!kotak.diklik && kotak.querySelector(cekWarna(giliran))) {
                        kotak.style.backgroundColor = "";
                    } else if (kotakTerpilih.diklik) {
                        if (jalan[0].includes(kotak)){
                            kotak.style.backgroundColor = "rgba(173, 2, 2, 0.8)";
                        } else if (jalan[1].includes(kotak)){
                            kotak.style.backgroundColor = "rgba(2, 13, 173, 0.8)";
                        }
                    }
                }
            });
            kotak.addEventListener('click', function() {
                if (!gameOver) {
                    if (kotak.querySelector(cekWarna(giliran))) {
                        if (kotakTerpilih == kotak) {
                            kotak.diklik = !kotak.diklik;
                        } else {
                            kotakTerpilih.style.backgroundColor = "";
                            kotakTerpilih.diklik = false;
                            kotakTerpilih = kotak;
                            kotak.diklik = true;
                            for (let i = 0; i < jalanTerpilih[0].length; i++) {
                                jalanTerpilih[0][i].style.backgroundColor = "";
                            }
                            for (let i = 0; i < jalanTerpilih[1].length; i++) {
                                jalanTerpilih[1][i].style.backgroundColor = "";
                            }
                        }
                        if (kotak.diklik) {
                            kotak.style.backgroundColor = "rgba(2, 173, 159, 1)";
                            jalan = logikaBidak(giliran, kotakTerpilih, baris, kolom);
                            jalanTerpilih = jalan;
                            for (let i = 0; i < jalan[0].length; i++) {
                                jalan[0][i].style.backgroundColor = "rgba(173, 2, 2, 0.8)";
                            }
                            for (let i = 0; i < jalan[1].length; i++) {
                                jalan[1][i].style.backgroundColor = "rgba(2, 13, 173, 0.8)";
                            }
                        } else if (!kotak.diklik) {
                            kotak.style.backgroundColor = "rgba(2, 173, 159, 0.8)";
                            for (let i = 0; i < jalanTerpilih[0].length; i++) {
                                jalanTerpilih[0][i].style.backgroundColor = "";
                            }
                            for (let i = 0; i < jalanTerpilih[1].length; i++) {
                                jalanTerpilih[1][i].style.backgroundColor = "";
                            }
                        }
                    }
                    if (kotakTerpilih.diklik && (jalan[0].includes(kotak) || jalan[1].includes(kotak))) {
                        let pemenang = 0;
                        if (jalan[0].includes(kotak)){
                            if (kotak.querySelector('.raja.bidakHitam')) {
                                pemenang = 1;
                                gameOver = true;
                            } else if (kotak.querySelector('.raja.bidakPutih')) {
                                pemenang = 2;
                                gameOver = true;
                            }
                            kotak.innerHTML = '';
                            kotak.innerHTML = kotakTerpilih.innerHTML;
                            kotakTerpilih.innerHTML = '';
                        } else if (jalan[1].includes(kotak)){
                            kotak.innerHTML = kotakTerpilih.innerHTML;
                            kotakTerpilih.innerHTML = '';
                        }
                        for (let i = 0; i < jalanTerpilih[0].length; i++) {
                            jalanTerpilih[0][i].style.backgroundColor = "";
                        }
                        for (let i = 0; i < jalanTerpilih[1].length; i++) {
                            jalanTerpilih[1][i].style.backgroundColor = "";
                        }
                        kotakTerpilih.diklik = false;
                        kotakTerpilih.style.backgroundColor = "";
                        giliran = !giliran;
                    }
                }
            });
        });
    });
}
logikaGame();