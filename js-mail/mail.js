//ESERCIZIO MAIL

// Creo un array con le email degli invitati alla festa
const guestsEmail = ['clara@guest.com', 'andrea@guest.com', 'anna@guest.com', 'luca@guest.com']
// Chiedo all'utente la sua email e verifico se è presente nella lista di chi può accedere alla festa
const email = prompt("Inserisci la tua email");
let presente = false;
let messaggio = ("Mi dispiace, la tua email non è presente nella lista degli invitati!");

for (let i = 0; i < guestsEmail.length && !presente; i++) {
    if (email === guestsEmail[i]) {
        presente = true;
        messaggio = ("La tua email risulta nella lista degli invitati!");
    }
}
console.log(messaggio);
