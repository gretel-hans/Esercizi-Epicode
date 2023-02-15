var i=0;
document.getElementById('aggiungi').addEventListener('click',function(){
var task=document.getElementById('testo').value;

    if(task==""){
        window.alert('La task deve avere una descrizione!')
    }else{
        var nuovaTask=document.getElementById("lista");
        nuovaTask.innerHTML+=`<li id="li_${i}"> ${task} <button type="button" class="delete" id="${i}" onclick="cancella(li_${i})">Cancella</button></li>`;
        i++;
        document.getElementById('testo').value="";
    }
})

function cancella(_indice){
var elCanc=document.getElementById(`${_indice}`);
elCanc.remove();
}