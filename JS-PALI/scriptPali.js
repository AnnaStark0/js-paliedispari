// PALINDROMA - 
// 1 - Chiedere all’utente di inserire una parola. 
// 2 - Creare una funzione per capire se la parola inserita è palindroma.


// - 1 -
let userWord = prompt ('Inserisci una Parola');
console.log(userWord);


// - 2 -


var parolaInversa = invertiParola(userWord);

if(userWord == parolaInversa){
    console.log('la parola è palindroma');
  } else {
    console.log('la parola non è palindroma');
  }
  

function invertiParola(str){
  var strInversa = str.split('').reverse().join('');  
  return strInversa;
}

//Commento onesto: SOLUZIONE TROVATA SU INTERNET


