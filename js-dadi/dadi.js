//ESERCIZIO GIOCO DEI DADI

// Genero un numero random da 1 a 6 per l'User e uno per il PC
const diceUser = Math.floor(Math.random() * 6) + 1;
const dicePC = Math.floor(Math.random() * 6) + 1;
console.log('Puntata User: ' + diceUser, 'Puntata PC: ' + dicePC);
// Chi fa il punteggio più alto vince
if (diceUser > dicePC) {
    console.log('Hai vinto!');
} else if (diceUser < dicePC) {
    console.log('Hai perso!');
} else {
    console.log('Pareggio!');
}