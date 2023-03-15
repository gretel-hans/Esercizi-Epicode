let rowReference=document.getElementsByClassName('row')[0];
let libriArray=[];

fetch('https://striveschool-api.herokuapp.com/books')
.then((response)=>{
   return response.json();
})
.then((data)=>{
     
    data.forEach((element,index) => {
        libriArray.push(element) ;
        let divReference=document.createElement('div');
        divReference.setAttribute('id',`${i}`)
        divReference.classList.add('col', 'py-3');
        divReference.innerHTML=`<div class="card">
        <img src="${element.img}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${element.title}</h5>
          <p class="card-text">${element.price}€</p>
          <div class="d-flex justify-content-between">
         <a href="javascript:void(0)" onClick="scarta(${index})" class="btn btn-warning">Scarta</a>
          <a href="javascript:void(0)" onClick="compra"  class="btn btn-primary">Compra ora</a>
        </div>
        </div>
      </div>`;
      rowReference.appendChild(divReference);
    });
})

console.log(libriArray);



const scarta=(indice)=>{
    //console.log(indice);
    let divEliminato=document.getElementsByClassName('col')[indice];
    //console.log((divEliminato)[1]);
    divEliminato.style.display="none";
}

const compra=()=>{
    localStorage.setItem('')
}