let inputText = document.getElementById('inputText');
let inputTrenn = document.getElementById('inputTrenn');
let davorTrenn = document.getElementById('davorTrenn');
let danachTrenn = document.getElementById('danachTrenn');
let outputVorne = document.getElementById('outputVorne');
let outputHinten = document.getElementById('outputHinten');



let trennTrenn = () => {
    console.log('trennTrenn trennt');
    let stringKette = inputText.value.split(" ");
    let position = inputTrenn.value;
    let schnittstelle = stringKette.indexOf(position);
    if (davorTrenn.checked && schnittstelle > 0) {
        let ausgabeDavor = stringKette.splice(0, schnittstelle);
        outputVorne.innerHTML = ausgabeDavor.join(" ");
        outputHinten.innerHTML = stringKette.join(" ");
    } else if (danachTrenn.checked && schnittstelle > 0) {
        let ausgabeDanach = stringKette.splice((schnittstelle + 1));
        outputHinten.innerHTML = ausgabeDanach.join(" ");
        outputVorne.innerHTML = stringKette.join(" ");
    } else if (davorTrenn.checked && schnittstelle === -1) {
        outputVorne.innerHTML = "Das Zeichen konnte leider nicht gefunden werden";
        outputHinten.innerHTML = inputText.value;
    } else if (danachTrenn.checked && schnittstelle === -1) {
        outputVorne.innerHTML = inputText.value;
        outputHinten.innerHTML = "Das Zeichen konnte leider nicht gefunden werden";
    }

}