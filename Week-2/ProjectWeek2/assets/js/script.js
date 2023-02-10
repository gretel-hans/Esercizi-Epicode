var risultatoDigitato;


function n(dato){ 
    if(risultatoDigitato==true){
        document.getElementById("operazioni").value = ""; 
        document.getElementById("operazioni").value += dato;
        risultatoDigitato=false;
    }
    else {
        document.getElementById("operazioni").value += dato;
    }
 }
 

 document.getElementById('risultato').addEventListener('click',function(){
     document.getElementById("operazioni").value = eval(document.getElementById("operazioni").value);
 risultatoDigitato=true; 
 })

 
 document.getElementById('cancella').addEventListener('click',function (){
    document.getElementById("operazioni").value = ""; 
 })

 