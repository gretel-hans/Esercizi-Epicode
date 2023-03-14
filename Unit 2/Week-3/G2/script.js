let btnSalva=document.getElementById('salva');
let btnRimuovi=document.getElementById('rimuovi');
let inpuName=document.getElementById('name');
let ultimoNome;
let lista=document.getElementsByClassName('list-group')[0];
let btnCancellaTutto=document.getElementById('cancellaStorage');

let nameArray=[];

const mostraUltimo=()=>{
    ultimoNome=document.createElement('li');
    ultimoNome.classList.add('list-group-item', 'list-group-item-primary');
    ultimoNome.innerText='Nome inserito: '+(nameArray[nameArray.length-2]);
    lista.appendChild(ultimoNome);
}


btnSalva.onclick=()=>{
    if(inpuName.value !=''){
        nameArray.push(inpuName.value)
        localStorage.setItem('name',JSON.stringify(nameArray));
        console.log(nameArray[nameArray.length-2]);
        if(nameArray.length>1){
            mostraUltimo();  
        }
        inpuName.value='';
    }else{
        alert('Inserisci un campo nell\'input per poter procedere');
    }
}


btnRimuovi.onclick=()=>{
        if(nameArray.length>1){
            lista.removeChild(lista.lastChild);
            //console.log(nameArray[nameArray.length-2]);
        }

}

btnCancellaTutto.addEventListener('click',()=>{
    console.log('eliminato tutto');
    localStorage.clear();
    localStorage.removeItem('name');
}) 

let i;
if (!sessionStorage.getItem('secondi')){
     i=0;
}else{
    i=parseInt(sessionStorage.getItem('secondi')) ;
}





const contaSecondi=()=>{
    sessionStorage.setItem('secondi',i);
    i++;
    document.getElementById('tempoTrascorso').innerText='Hai trascorso '+sessionStorage.getItem('secondi')+' secondi in questa sessione';
}

setInterval(contaSecondi,1000);
