// PARI E DISPARI - 
// 1 - L’utente sceglie pari o dispari e inserisce un numero da 1 a 5. 
// 2 - Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). 
// 3 - Sommiamo i due numeri, 
// 4 - Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) 
// 5 - Dichiariamo chi ha vinto.


// - 1 -
alert ('Ciao!');

let userTeam = prompt ('Team Pari o Team Dispari?');
console.log(userTeam);

let userNum = parseInt (prompt ('Inserisci un Numero da 1 a 5'));
console.log(userNum);

// - 2 -
function randomNumber(min , max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let pcNumber = randomNumber (1, 5);
console.log(pcNumber);







