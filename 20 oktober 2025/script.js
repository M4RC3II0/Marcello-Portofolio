const semuaRadio = document.querySelectorAll(`input[type="radio"]`);
semuaRadio.forEach(radio =>{
    radio.addEventListener('change', function () {
        const namaSoal = this.name;
        const radioSatuSoal = document.querySelectorAll(`input[name="${namaSoal}"]`)

            radioSatuSoal.forEach(r =>{
                r.disabled = true;
                if (r === this) {
                    r.parentElement.classList.add("chosen");
                } else {
                    r.parentElement.classList.add("locked");
                }
    });
    });
});

function cekJawaban() {
    let skor = 0;

    const kunci ={
        soal1 : 'b',
        soal2 : 'a',
        soal3 : 'b',
        soal4 : 'a',
        soal5 : 'c',
        soal6 : 'b',
        soal7 : 'a',
        soal8 : 'c',
        soal9 : 'd',
        soal10 : 'd'

    };

    for(let nomor in kunci){
        let jawaban = document.querySelector(`input[name="${nomor}"]:checked`)
        if (jawaban && jawaban.value === kunci[nomor]) {
            skor += 1;
        }
    }
    document.getElementById('hasil').innerHTML = skor*10;
}