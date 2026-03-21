let modal = document.getElementById('myModal');
let btn1 = document.getElementById('btn1');
let btn2 = document.getElementById('btn2');
let btn3 = document.getElementById('btn3');
let btn4 = document.getElementById('btn4');
let span = document.getElementsByClassName('close')[0];
let body = document.getElementsByTagName('body')[0]
let movie = document.getElementById('Movie');

btn1.onclick = function () {
    modal.style.display = "block";
    document.getElementById('Movie').textContent = 'Forest Gump';
    document.getElementById('img').src = 'gambar1.png';
    document.getElementById('star').textContent = '⭐⭐⭐⭐⭐';
    document.getElementById('sin').textContent = 'Forrest, a man with low IQ, recounts the early years of his life when he found himself in the middle of key historical events. All he wants now is to be reunited with his childhood sweetheart, Jenny.';
}
btn2.onclick = function () {
    modal.style.display = "block";
    document.getElementById('Movie').textContent = 'Fight Club';
    document.getElementById('img').src = 'gambar2.png';
    document.getElementById('star').textContent = '⭐⭐⭐⭐½';
    document.getElementById('sin').textContent = 'Unhappy with his capitalistic lifestyle, a white-collared insomniac forms an underground fight club with Tyler, a careless soap salesman. Soon, their venture spirals down into something sinister.';
}
btn3.onclick = function () {
    modal.style.display = "block";
    document.getElementById('Movie').textContent = 'Whiplash';
    document.getElementById('img').src = 'gambar3.jpeg';
    document.getElementById('star').textContent = '⭐⭐⭐⭐⭐';
    document.getElementById('sin').textContent = 'Andrew enrols in a music conservatory to become a drummer. But he is mentored by Terence Fletcher, whose unconventional training methods push him beyond the boundaries of reason and sensibility.';
}
btn4.onclick = function () {
    modal.style.display = "block";
    document.getElementById('Movie').textContent = '12 Angry Men';
    document.getElementById('img').src = 'gambar4.jpg';
    document.getElementById('star').textContent = '⭐⭐⭐⭐⭐';
    document.getElementById('sin').textContent = 'The jury in a New York City court is locked in a heated debate over the fate of an 18-year-old accused of murdering his father. The case seems open and shut, but the jurors are forced to look past their own prejudices.';
}
window.onclick = function (event) {
    if (event.target == span) {
        modal.style.display = "none"
    }
}