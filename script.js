//ESERCIZIO MAIL
// Creo un array con le email degli invitati alla festa
const guestsEmail = ['clara@guest.com', 'andrea@guest.com', 'anna@guest.com', 'luca@guest.com']
// Chiedo all'utente la sua email e verifico se è presente nella lista di chi può accedere alla festa
const email = prompt("Scrivi la tua email");
let presente = false;
let messaggio = ("La tua email non è presente tra gli inviti!");

for (let i = 0; i < guestsEmail.length && !presente; i++) {
    if (email === guestsEmail[i]) {
        presente = true;
        messaggio = ("Congratulazioni! Sei stato invitato!");
    }
}
console.log(messaggio);




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
