celsiusBox = window.document.getElementById('cel2');
fahrenheitBox = window.document.getElementById('fah2');
kelvinBox = window.document.getElementById('kel2');

celsiusBox.addEventListener('keyup', celsiusToFK);
fahrenheitBox.addEventListener('keyup', fahrenheitToCK);
kelvinBox.addEventListener('keyup', kelvinToCF);

function celsiusToFK() {
    let celsiusToFah = (Number(celsiusBox.value) * 9 / 5) + 32;
    let celsiusToKe = Number(celsiusBox.value) + 273.15;
    if (celsiusBox.value === '') {
        fahrenheitBox.value = '';
        kelvinBox.value = '';
    } else {
        fahrenheitBox.value = celsiusToFah.toFixed(2);
        kelvinBox.value = celsiusToKe.toFixed(2);
    }
}

function fahrenheitToCK() {
    let fahrenheitToCel = (Number(fahrenheitBox.value) - 32) * 5 / 9;
    let fahrenheitToKel = (Number(fahrenheitBox.value) - 32) * 5 / 9 + 273.15;
    if (fahrenheitBox.value === '') {
        celsiusBox.value = '';
        kelvinBox.value = '';
    } else {
        celsiusBox.value = fahrenheitToCel.toFixed(2);
        kelvinBox.value = fahrenheitToKel.toFixed(2);
    }
    
}

function kelvinToCF() {
    let kelvinToCel = Number(kelvinBox.value) - 273.15;
    let kelvinToFah = (Number(kelvinBox.value) - 273.15) * 9 / 5 + 32;
    if (kelvinBox.value === '') {
        celsiusBox.value = '';
        fahrenheitBox.value = '';
    } else {
        celsiusBox.value = kelvinToCel.toFixed(2);
        fahrenheitBox.value = kelvinToFah.toFixed(2);
    }
}

function seleciona1(){
    document.getElementById('cel2').select();
}

function seleciona2(){
    document.getElementById('fah2').select();
}

function seleciona3(){
    document.getElementById('kel2').select();
}

function limpar() {
    celsiusBox.value = "";
    fahrenheitBox.value = "";
    kelvinBox.value = "";
}
