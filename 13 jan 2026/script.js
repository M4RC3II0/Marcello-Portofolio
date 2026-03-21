function tampilkanAngka() {
    let angka = document.getElementById("numberInput").value;
    let output = document.getElementById("output");
    let angkaGenap = document.getElementsByClassName("angkaGenap")[0];
    let angkaGanjil = document.getElementsByClassName("angkaGanjil")[0];
    let kelipatan3 = document.getElementsByClassName("angkaGanjil")[0];


    output.innerHTML = "";
    angkaGenap.innerHTML = "";
    angkaGanjil.innerHTML = "";

    // for loop untuk menampilkan angka dari 1 hingga 
    output.innerHTML += "<strong>Angka 1 sampai " + angka + ":</strong><br>";
    for (let i = 1; i <= angka; i++) {
        output.innerHTML += i + " ";
    }
    output.innerHTML += "<br><br>";

    // for loop untuk menampilkan angka genap
    angkaGenap.innerHTML += "<strong>Angka Genap sampai " + angka + ":</strong><br>";
    for (let i = 1; i <= angka; i++) {
        if (i % 2 === 0) {
            angkaGenap.innerHTML += i + " ";
        }
    }
    angkaGenap.innerHTML += "<br><br>";

    // for loop untuk menampilkan angka ganjil
    angkaGanjil.innerHTML += "<strong>Angka Ganjil sampai " +angka+ ":</strong><br>";
    for (let i = 1; i <= angka; i++) {
        if (i % 2 === 1) {
            angkaGanjil.innerHTML += i + " ";
        }
    }
    angkaGanjil.innerHTML += "<br><br>";

    // for loop untuk menampilkan angka kelipatan 3
    kelipatan3.innerHTML += "<strong>Angka kelipatan 3, sampai " + angka + ":</strong><br>";
    for (let i = 1; i <= angka; i++) {
        if (i % 3 === 0) {
            kelipatan3.innerHTML += i + " ";
        }
    }

}