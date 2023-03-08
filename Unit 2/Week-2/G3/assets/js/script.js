/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
    Dichiara una variabile di nome "myself" e assegnale come valore il tuo nome.
*/
console.log("Esercizio 1");

let myself = "Hansel";

/* ESERCIZIO 2
    Dato il seguente array, scrivi del codice per stampare ogni elemento dell'array in console.
*/
console.log("Esercizio 2");
const pets = ['dog', 'cat', 'hamster', 'redfish', 'chinchilla']

for (let i = 0; i < pets.length; i++) {
    console.log(pets[i]);
}

/* ESERCIZIO 3
    Scrivi del codice per aggiungere all'array pets un nuovo elemento.
*/
console.log("Esercizio 3");
pets.push('gorilla');
console.log(pets);
/* ESERCIZIO 4
    Scrivi del codice per rimuovere dall'array pets l'ultimo elemento aggiunto.
*/
console.log("Esercizio 4");
pets.pop();
console.log(pets);

/* ESERCIZIO 5
    Scrivi del codice per spostare il primo elemento dall'array "pets" in ultima posizione.
*/
console.log("Esercizio 5");

pets.push(pets.splice(0, 1))
console.log(pets);


/* ESERCIZIO 6
    Cicla gli elementi dell'array pets, e stampa true in console se l'animale comincia con la lettera "c". Stampa false in caso contrario.



const checkInitial=function(){
    pets.forEach((element)=>element.slice(0,1)==='c')
}

pets.filter(checkInitial)
*/
console.log("Esercizio 6");

for (let i = 0; i < pets.length; i++) {
    if (pets[i].slice(0, 1) === 'c') {
        console.log('true', pets[i]);
    } else {
        console.log('false', pets[i]);
    }
}

/* ESERCIZIO 7
    Dato il seguente array di oggetti, scrivi del codice per aggiungere ad ognuno di essi una proprietà "licensePlate" con valore a tua scelta.
*/
const cars = [
    {
        brand: 'Ford',
        model: 'Fiesta',
        color: 'red',
        trims: ['titanium', 'st', 'active'],
    },
    {
        brand: 'Peugeot',
        model: '208',
        color: 'blue',
        trims: ['allure', 'GT'],
    },
    {
        brand: 'Volkswagen',
        model: 'Polo',
        color: 'black',
        trims: ['life', 'style', 'r-line'],
    },
]

for (let i = 0; i < cars.length; i++) {
    cars[i].licensePlate = 'DS707SH'
}
console.log("Esercizio 7");
console.log(cars);

/* ESERCIZIO 8
    Scrivi una funzione per aggiungere un nuovo oggetto in ultima posizione nell'array "cars", rispettando la struttura degli altri elementi.
    Alla fine dell'esecuzione, la funzione dovrà ritornare la nuova lunghezza dell'array cars.
*/
console.log("Esercizio 8");
const newElement = function () {
    cars.push({
        brand: 'Alfa Romeo',
        model: 'Giulietta',
        color: 'white',
        trims: ['sport', 's-line', 'suv'],
    });
    return (console.log(cars.length));
}

newElement();

/* ESERCIZIO 9
    Scrivi una funzione per per salvare il primo elemento della proprietà "trims" di ogni auto nel nuovo array "justFirstTrims", sotto definito.
*/
console.log("Esercizio 9");

let justFirstTrims = []
// inserisci la tua funzione qui
const firstTrim = function () {
    for (let i = 0; i < cars.length; i++) {
        justFirstTrims.push(cars[i].trims[0]);
    }
    return console.log(justFirstTrims)
}

firstTrim();
/* ESERCIZIO 10
    Cicla l'array "cars" e costruisci un if/else statament per mostrare due diversi messaggi in console.
    Se la lunghezza del valore della proprietà "color" è uguale o minore di 4, mostra in console "Fizz".
    Altrimenti, mostra in console "Buzz".
*/
console.log("Esercizio 10");

for (let i = 0; i < cars.length; i++) {
    if (cars[i].color.length <= 4) {
        console.log("Fizz", cars[i].color);
    } else {
        console.log("Buzz", cars[i].color);
    }
}


/* ESERCIZIO 11
    Utilizza il metodo .filter() sull'array cars in modo da ottenere un nuovo array in cui sono presenti
    solamente le auto che hanno più di 2 trims disponibili.
*/
console.log("Esercizio 11");

let newTrims = cars.filter(function (car) {
    return car.trims.length > 2;
});
console.log(newTrims);

/* ESERCIZIO 12
    Utilizza il metodo .map() sull'array cars in modo da ottenere un nuovo array in cui sono presenti
    stringhe formate nel seguente modo: "Ford Fiesta", "Peugeot 208" etc.
*/
console.log("Esercizio 12");

let newCars = cars.map(function (car) {
    return car.brand += " " + car.model
})

console.log(newCars);

/* ESERCIZIO 13
    Utilizza un ciclo while per stampare in console i valori del seguente array numerico fino al raggiungimento del numero 32.
*/
console.log("Esercizio 13");
const numericArray = [
    6, 90, 45, 75, 84, 98, 35, 74, 31, 2, 8, 23, 100, 32, 66, 313, 321, 105,
]

let i = 0;
while (numericArray[i] != 32) {
    console.log(numericArray[i]);
    i++;
}

/* ESERCIZIO 14
    Partendo dall'array fornito e utilizzando un costrutto switch, genera un nuovo array composto dalle posizioni di ogni carattere all'interno
    dell'alfabeto italiano.
    es. [f, b, e] --> [6, 2, 5]
*/
console.log("Esercizio 14");
//const charactersArray = ['g', 'n', 'u', 'z', 'd']
const charactersArray = ['f', 'a', 'g', 'e','?']
let newArray = []
for (let i = 0; i < charactersArray.length; i++) {
    switch (charactersArray[i]) {
        case "a":
            newArray += 1 + " ";
            break;
        case "b":
            newArray += 2 + " ";
            break;
        case "c":
            newArray += 3 + " ";
            break;
        case "d":
            newArray += 4 + " ";
            break;
        case "e":
            newArray += 5 + " ";
            break;
        case "f":
            newArray += 6 + " ";
            break;
        case "g":
            newArray += 7 + " ";
            break;

        case "h":
            newArray += 8 + " ";
            break;
        case "i":
            newArray += 9 + " ";
            break;
        case "j":
            newArray += 10 + " ";
            break;
        case "k":
            newArray += 11 + " ";
            break;
        case "l":
            newArray += 12 + " ";
            break;
        case "m":
            newArray += 13 + " ";
            break;
        case "n":
            newArray += 14 + " ";
            break;
        case "o":
            newArray += 15 + " ";
            break;
        case "p":
            newArray += 16 + " ";
            break;
        case "q":
            newArray += 17 + " ";
            break;
        case "r":
            newArray += 18 + " ";
            break;
        case "s":
            newArray += 19 + " ";
            break;
        case "t":
            newArray += 20 + " ";
            break;
        case "u":
            newArray += 21 + " ";
            break;
        case "v":
            newArray += 22 + " ";
            break;
        case "w":
            newArray += 23 + " ";
            break;
        case "x":
            newArray += 24 + " ";
            break;
        case "y":
            newArray += 25 + " ";
            break;
        case "z":
            newArray += 26 + " ";
            break;
        default:
            newArray += charactersArray[i] + " non è un numero";

    }
}
console.log(newArray);

