/* ESERCIZIO 1
 Scrivi una funzione per cambiare il titolo del documento in qualcos'altro.
*/
var titolo = document.querySelector("h1")
const changeTitle = function (newTitle) {
    titolo.innerHTML = "Questo è il nuovo titolo";
}

changeTitle(titolo);


/* ESERCIZIO 2
 Scrivi una funzione per cambiare la classe del titolo della pagina in "myHeading".
*/

const addClassToTitle = function () {
    titolo.classList.add("myHeading");
}

addClassToTitle();

/* ESERCIZIO 3
 Scrivi una funzione per cambiare il contenuto di tutti i p che sono discendenti di un div.
*/


var contenuti=document.querySelectorAll("div p")
const changePcontent = function () {
    contenuti.forEach(element => {
        element.innerHTML="Nuovo contenuto";
    });
}

//changePcontent();


/* ESERCIZIO 4
 Scrivi una funzione per cambiare la proprietà href di ogni link a https://www.google.com
*/

var siti=document.querySelectorAll("a")
const changeUrls = function () {
    siti.forEach(element=>{
        element.setAttribute("href","https://www.google.com");
        element.setAttribute("target","_blank");
    })
}
changeUrls();

/* ESERCIZIO 5
 Scrivi una funzione per aggiungere un nuovo elemento alla seconda lista non-ordinata.
*/


const addToTheSecond = function (content) {
    var aggLista=document.getElementById("secondList")
    let nuovoElemento=document.createElement("li")
    nuovoElemento.textContent=content;
    aggLista.appendChild(nuovoElemento);
}
addToTheSecond("New li");

/* ESERCIZIO 6
 Scrivi una funzione per aggiungere un secondo paragrafo al primo div.
*/

var testo=document.querySelector("div")
const addParagraph = function (content) {
    let nuovoP=document.createElement("p");
    nuovoP.textContent=content;
    testo.appendChild(nuovoP);
}
addParagraph("Nuovo p");

/* ESERCIZIO 7
 Scrivi una funzione per far scomparire la prima lista non-ordinata.
*/

var lista=document.getElementById("firstList")
const firstUlDisappear = function () {
    lista.style.visibility="hidden";
}

firstUlDisappear();

/* ESERCIZIO 8
 Scrivi una funzione per rendere verde lo sfondo di ogni lista non-ordinata.
*/
var ulist=document.querySelectorAll("ul")
const paintItGreen = function () {
    ulist.forEach(element =>{
        element.style.backgroundColor="green";
    })
}
paintItGreen();

/* ESERCIZIO 9
 Rendi il tag h1 capace di cambiare colore del testo ogni volta che l'utente ci clicca sopra.
*/

titolo.addEventListener('click',function makeItClickable(){
    n1=(Math.floor(Math.random()*265));
    n2=(Math.floor(Math.random()*265));
    n3=(Math.floor(Math.random()*265));
    titolo.style.cursor="pointer";
    titolo.style.color=`rgb(${n1},${n2},${n3})`
})



/* ESERCIZIO 10
 Cambia il testo del footer con qualcos'altro quando l'utente ci clicca sopra.
*/    

var fot=document.querySelector(".footer")
var content1="<p>ciao si nuovo footer</p>"
const changeFooterText = function () {
    fot.addEventListener('click',function(){
        fot.innerHTML=content1;
    })
}


changeFooterText()

/* ESERCIZIO 11
 Aggiungi un event listener al campo di testo nella pagina e fai in modo che dopo ogni lettera il suo valore venga mostrato in console.
*/

const inputField = document.getElementById('input-field')
inputField.addEventListener("keyup",function(){
    console.log(inputField.value)
})



/* ESERCIZIO 12
 Crea un messaggio di benvenuto con un alert quando la pagina ha finito di caricarsi.

*/

window.onload = function () {
    let x=window.prompt("Ciao come ti chiami ?");
    window.alert(`Ciao ${x} la pagina ha finito di caricare`);
}