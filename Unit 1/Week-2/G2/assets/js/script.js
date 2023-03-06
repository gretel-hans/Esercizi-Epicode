//Esercizio 1
let nome1='Aldo';   
const numero='3.14';
var nome2='cliente';
document.getElementById('concatena').innerHTML=nome1+', '+nome2+', '+numero;



//Esercizio 1b
var concatena= nome1+ ', '+nome2+', '+numero;
document.getElementById('concatena2').innerHTML=concatena;



//Esercizio 2
var nome3='Mario';
document.getElementById('var').innerHTML=nome3;
document.getElementById('final').innerHTML=nome3;
document.getElementById('let2').innerHTML=nome3;

    {
    let nome4='Carla';
    document.getElementById('let').innerHTML=nome4;
    document.getElementById('let3').innerHTML=nome4;
    document.getElementById('final2').innerHTML=nome4;
}




//Esercizio 3
var valoreIniziale=15;
document.getElementById('iniziale').innerHTML='Valore iniziale: '+valoreIniziale;

var addizione=valoreIniziale+valoreIniziale;
var incremento=addizione;
incremento++;
document.getElementById('valore1').innerHTML='Addizione e incremento: '+addizione+', '+incremento ;

var sottrazione=valoreIniziale-10;
var decremento=sottrazione;
decremento--;
document.getElementById('valore2').innerHTML='Sottrazione e decremento: '+sottrazione+', '+decremento ;

var moltiplicazione=valoreIniziale*3;
document.getElementById('valore3').innerHTML='Moltiplicazione: '+moltiplicazione;

var divisione=valoreIniziale/3;
document.getElementById('valore4').innerHTML='Divisione: '+divisione;

var testo='è un numero';
document.getElementById('valore5').innerHTML='Concatenazione: '+valoreIniziale+' '+testo;