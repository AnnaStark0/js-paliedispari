// PARI E DISPARI - 
// 1 - L’utente sceglie pari o dispari e inserisce un numero da 1 a 5. 
// 2 - Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). 
// 3 - Sommiamo i due numeri, 
// 4 - Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) 
// 5 - Dichiariamo chi ha vinto.


// - 1 -
alert ('Ciao!');

let userTeam = prompt ('Scegli: Pari o Dispari?');
console.log(userTeam);

let userNum = parseInt (prompt ('Inserisci un Numero da 1 a 5'));
console.log(userNum);


// - 2 -
function randomNumber(min , max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let pcNum = randomNumber (1, 5);
console.log(pcNum);


// - 3 -
let somma = userNum + pcNum;
console.log(somma);


// - 4 -
function isOddEven(number) {
    if (number % 2 == 0) {
        return 'pari';
    }
    return 'dispari';
}

let result = isOddEven (somma);
console.log(result);


// - 5 -
if (userTeam == result) {
    console.log('You Win!');
} else {
    console.log('You Lose!');
}






