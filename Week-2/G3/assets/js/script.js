/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/
{
  let numero1=100;
  let numero2=69;
  if (numero1>numero2){
    document.getElementById('es1').innerHTML=numero1 +' è il numero più grande';
    console.log(numero1 +' è il numero più grande');
  }
  else{
    document.getElementById('es1').innerHTML=numero2 +' è il numero più grande';
    console.log(numero2 +' è il numero più grande');
  }
}




/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

{
  let numero =100;
  if(numero!=5){
    document.getElementById('es2').innerHTML='Not equal';
    console.log('Not equal');
  }
  else{
    document.getElementById('es2').innerHTML='Equal to 5';
    console.log('Equal to 5');
  }
}




/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

{
  let numero=15;
  if (numero%5==0){
    document.getElementById('es3').innerHTML='Divisibile per 5';
    console.log('Divisibile per 5');
  }
  else{
    document.getElementById('es3').innerHTML='Non divisibile per 5';
    console.log('Non divisibile per 5');
  }
}



/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/
{
  let numero=2;
  let numero1=6;
  if (numero==8 || numero1==8 || numero-numero1==8||numero1-numero==8|| numero+numero1==8){
    document.getElementById('es4').innerHTML='Verificato';
    console.log('Verificato');
  }
  else{
    document.getElementById('es4').innerHTML='Non verificato';
    console.log('Non verificato');
  }
}




/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

var totalShoppingCart=65;
var spesetotalShoppingCart;
if (totalShoppingCart>50){
  document.getElementById('es5').innerHTML='Hai diritto alla spedizione gratuita e il tuo tale ammonta a: '+totalShoppingCart+'€';
  console.log('Hai diritto alla spedizione gratuita e il tuo tale ammonta a: '+totalShoppingCart+'€');
}
else{
  var spesetotalShoppingCart=totalShoppingCart+10;
  document.getElementById('es5').innerHTML='Il tuo tale ammonta a: '+spesetotalShoppingCart+'€';
  console.log('Il tuo tale ammonta a: '+spesetotalShoppingCart+'€');
}





/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/
if (totalShoppingCart>50){
  totalShoppingCart-=totalShoppingCart*20/100;
  document.getElementById('es6').innerHTML='Hai diritto alla spedizione gratuita e il tuo tale ammonta a: '+totalShoppingCart+'€';
  console.log('Hai diritto alla spedizione gratuita e il tuo tale ammonta a: '+totalShoppingCart+'€');
}
else{
  totalShoppingCart-=totalShoppingCart*20/100;
  var totaleScontato=totalShoppingCart+10;
  document.getElementById('es6').innerHTML='Il tuo tale ammonta a: '+totaleScontato+'€';
  console.log('Il tuo tale ammonta a: '+totaleScontato+'€');
}





/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

{
  var numero=[12,5,10];
  numero.sort(function(a,b){return a-b});
  document.getElementById('es7').innerHTML=numero;
  console.log(numero);
}





/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/
{
  let numero=false;
  if(typeof(numero)=="number"){
    document.getElementById('es8').innerHTML='Hai inserito un numero';
    console.log('Hai inserito un numero');
  }
  else{
    document.getElementById('es8').innerHTML='Non hai inserito un numero';
    console.log('Non hai inserito un numero');
  }
}


/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

{
  let numero=13;
  if(numero%2==0){
    document.getElementById('es9').innerHTML=('Hai inserito un numero pari');
    console.log('Hai inserito un numero pari');
  }
  else{
    document.getElementById('es9').innerHTML=('Hai inserito un numero dispari');
    console.log('Hai inserito un numero dispari');
  }
}

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.*/
  {let val = 5
  if (val < 10 && val >5) {
      document.getElementById('es10').innerHTML='Il numero inserito è minore di 10';
      console.log("Il numero inserito è minore di 10");
    } else if (val <= 5) {
      document.getElementById('es10').innerHTML='Il numero inserito è minore o uguale di 5'
      console.log("Il numero inserito è minore o uguale di 5");
    } else {
      document.getElementById('es10').innerHTML='Il numero inserito è maggiore o uguale a 10';
      console.log("Il numero inserito è maggiore o uguale a 10");
    }
  }

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', ' html', ' css'],
}
me.city='Toronto';
document.getElementById('es11').innerHTML=me.name+', '+me.lastName+', '+me.skills+', '+ me.city;
console.log(me);


/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/
delete me.lastName;
document.getElementById('es12').innerHTML=me.name+', '+me.lastName+', '+me.skills+', '+ me.city;
console.log(me);

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/
me.skills.pop();
document.getElementById('es13').innerHTML=me.name+', '+me.lastName+', '+me.skills+', '+ me.city;
console.log(me);

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

  var numbers=[];
  numbers.push(2,10,65);
  document.getElementById('es14').innerHTML=numbers;
  console.log(numbers);



/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/
numbers.splice(2,1,100);
document.getElementById('es15').innerHTML=numbers;
  console.log(numbers);

/* SCRIVI QUI LA TUA RISPOSTA */
