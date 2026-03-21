const daftarSiswa = []
function tambahSiswa() {
    const nama = document.getElementById("nama").value
    const nilai = parseFloat(document.getElementById("nilai").value)
    const kehadiran = parseFloat(document.getElementById("kehadiran").value)

    if(nama === "" || isNaN(nilai) || isNaN(kehadiran)) {
        alert("Mohon lengkapi semua data siswa.")
        return
    }

    if (nilai < 0 || nilai > 100 || kehadiran < 0 || kehadiran > 100) {
        alert("Nilai dan kehadiran harus 0-100.")
        return
    }

    let grade = "";
    if (nilai >= 85) {
        grade = "A"
    }else if (nilai >= 75) {
        grade = "B"
    }else if (nilai >= 60) {
        grade = "C"
    }else{
        grade = "D"
    }

    let status = "";
    if (nilai >= 75 && kehadiran >= 80) {
        status = "Lulus";
    }else{
        status = "Tidak Lulus";
    }

    const siswa = {
        nama,
        nilai,
        kehadiran,
        grade,
        status
    }

    daftarSiswa.push(siswa)
    tampilkanSiswa()
    hitungRataRata()

    document.getElementById("nama").value = ""
    document.getElementById("nilai").value = ""
    document.getElementById("kehadiran").value = ""
}

function tampilkanSiswa() {
    const tabel = document.getElementById('tabelSiswa');
    tabel.innerHTML = ""

    daftarSiswa.forEach((siswa) => {
        const row = `
        <tr>
            <td>${siswa.nama}</td>
            <td>${siswa.nilai}</td>
            <td>${siswa.kehadiran}</td>
            <td>${siswa.grade}</td>
            <td>${siswa.status}</td>
        </tr>
        `;
        tabel.innerHTML += row;
    });
}

function hitungRataRata() {
    let total = 0;

    daftarSiswa.forEach((siswa) => {
        total += siswa.nilai;
    });

    const rataRata = total / daftarSiswa.length;
    document.getElementById('rataRata').innerText = `
    Rata-rata Nilai kelas : ${rataRata.toFixed(2)}
    `
}