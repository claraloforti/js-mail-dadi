//ESERCIZIO GIOCO DEI DADI

// Genero un numero random da 1 a 6 per l'User e uno per il PC
const diceUser = Math.floor(Math.random() * 6) + 1;
const dicePC = Math.floor(Math.random() * 6) + 1;
const betUser = `Puntata User: ${diceUser}`;
const betPC = `Puntata PC: ${dicePC}`;
let risultato;

// Chi fa il punteggio più alto vince
if (diceUser > dicePC) {
    risultato = ('Hai vinto!');
} else if (diceUser < dicePC) {
    risultato = ('Hai perso!');
} else {
    risultato = ('Pareggio!');
}

document.getElementById("result").innerHTML = `${betUser}<br>${betPC}<br>${risultato}`;