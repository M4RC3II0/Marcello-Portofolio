function btn() {
    const input = document.getElementById('suhu1').value;
    const suhu1 = parseFloat(input);
    const awal = document.getElementById('suhi').value;
    const akhir = document.getElementById('suhu').value;
    if (isNaN(suhu1)) {
        document.getElementById('hasil').innerHTML = 'Masukkan angka suhu yang valid';
        return;
    }

    let celcius;
    if (awal === 'celcius') {
        celcius = suhu1;
    } else if (awal === 'kelvin') {
        celcius = suhu1 - 273;
    } else if (awal === 'fahrenheit') {
        celcius = (suhu1 - 32) * 5 / 9;
    } else if (awal === 'reamur') {
        celcius = suhu1 * 5 / 4;
    }

    // convert Celsius to target unit
    let resultNumber;
    let unitLabel;
    if (akhir === 'celcius') {
        resultNumber = celcius;
        unitLabel = '°C';
    } else if (akhir === 'kelvin') {
        resultNumber = celcius + 273;
        unitLabel = 'K';
    } else if (akhir === 'fahrenheit') {
        resultNumber = (celcius * 9 / 5) + 32;
        unitLabel = '°F';
    } else if (akhir === 'reamur') {
        resultNumber = celcius * 4 / 5;
        unitLabel = '°R';
    }

    const hasil = resultNumber.toFixed(2) + ' ' + unitLabel;
    document.getElementById('hasil').innerHTML = hasil;
}