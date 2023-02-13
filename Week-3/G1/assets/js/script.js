/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato..
*/

{
    let area = 0;
    function AreaRettangolo(base, altezza) {
        base = 10;
        altezza = 5;
        var area = base * altezza;
        return area;
    }
    console.log('L\'area del rettangolo è: ' + AreaRettangolo(area));
}


/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 2 y
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/
{
    var somma = 0;
    function crazySum(n1, n2) {
        n1 = 10;
        n2 = 10;
        if (n1 == n2) {
            somma = (n1 + n2) * 3;
        } else {
            somma = n1 + n2;
        }
        return somma;
    }
    console.log(crazySum(somma))
}





/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 4 y
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400. in 
*/

{
    let valido = false;
    function boundary(n) {
        n = 400;
        if ((n >= 20 && n <= 100) || (n == 400)) {
            valido = true;
        }
        else {
            valido = false;
        }
        return valido;
    }
    console.log(boundary(valido))
}

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 6 y
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/
{
    var num;
    function check3and7(num) {
        if ((num % 3 == 0 || num % 7 == 0) && num > 0) {
            console.log('Il numero è divisibile per 3 o 7');
        } else {
            console.log('Il numero non è divisibile per 3 o 7');
        }
    }
    console.log(check3and7(num));
}


/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 7 fac
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 8 fac 
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 9 fac
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 10 y
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

{
    let n
    function giveMeRandom(n) {
        var numeriCasuali = []
        for (let i = 0; i < n; i++) {
            numeriCasuali[i] = (Math.floor(Math.random() * 11))
        }
        return numeriCasuali
    }
    console.log(giveMeRandom(n));
}

/* SCRIVI QUI LA TUA RISPOSTA */


/* EXTRA 2
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "shoppingCartTotal" che calcola il totale dovuto al negozio (tenendo conto delle quantità di ogni oggetto).
*/

{
    var TotaleCart = 0;
    var shoppingCart = [
        {
            price: 40,
            name: "felpe",
            id: "1840",
            quantity: 200
        },
        {
            price: 2,
            name: "calze",
            id: "1325",
            quantity: 150
        },
        {
            price: 120,
            name: "scarpe",
            id: "1080",
            quantity: 487
        },
        {
            price: 35,
            name: "occhiali",
            id: "0990",
            quantity: 280
        }
    ]
    function shoppingCartTotal() {
        for (let i = 0; i < shoppingCart.length; i++) {
            console.log('Al negzio di ' + shoppingCart[i].name + ' devi: ' + (shoppingCart[i].price * shoppingCart[i].quantity + '€'))
            TotaleCart += (shoppingCart[i].price * shoppingCart[i].quantity)
        }
        console.log('In tutto ai negozi devi: ' + TotaleCart + '€');
    }
    shoppingCartTotal();



    /* EXTRA 3
     Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
     Crea una funzione chiamata "addToShoppingCart" che riceve un nuovo oggetto dello stesso tipo, lo aggiunge a "shoppingCart" e ritorna il nuovo numero totale degli elementi.
    */


    function addToShoppingCart() {
        shoppingCart.push({
            price: 4.50,
            name: "cappellino",
            id: "2028",
            quantity: 210
        })
    }
    addToShoppingCart();
    console.log(shoppingCart)

}

/* EXTRA 10
 Scrivi una funzione che riceve una data come parametro, e calcola il numero di giorni passati da quella data.
*/

function calcoladata(_data){
let data= new Date(_data);
let oggi=new Date();
let millisecondsDifference=oggi.getTime()-data.getTime();
let days=Math.floor(millisecondsDifference/1000/60/60/24)
console.log('Sono passati: '+days+' giorni');
}

calcoladata("2023,2,1");
