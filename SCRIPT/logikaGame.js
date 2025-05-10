export class LogikaGame {
    constructor(papan) {
        this.papan = papan;
        this.mapHTML = this.papan.getPapanHTML();
        this.map = this.papan.getPapan();
    }

    mulaiLogika() {
        this.map.forEach((x, baris) => {
            x.forEach((bidak, kolom) => {
                bidak.getDataHTML().addEventListener('mouseenter', function() {
                    if (bidak.getWarna() == 'putih') {
                        bidak.getDataHTML().style.backgroundColor = 'rgba(2, 173, 159, 0.8)';
                    }
                });
                bidak.getDataHTML().addEventListener('mouseleave', function() {
                    bidak.getDataHTML().style.backgroundColor = '';
                });
                bidak.getDataHTML().addEventListener('click', function() {
                    if (bidak.getWarna() == 'putih') {
                        bidak.getDataHTML().style.backgroundColor = 'rgba(2, 173, 159, 1)';
                    }
                });
            });
        });
        // this.papan.setBidak('pion', 'putih', 3, 4);
    }
}