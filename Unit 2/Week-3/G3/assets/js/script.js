let rowReference=document.getElementsByClassName('row')[0];
let libriArray=[];
let i;

let btnCompra=document.getElementById('btncompra');
let listCartReference=document.getElementById('cartList');
let carrelloArray=[];

fetch('https://striveschool-api.herokuapp.com/books')
.then((response)=>{
   return response.json();
})
.then((data)=>{
     
    data.forEach((element,index) => {
        libriArray.push(element) ;
        let divReference=document.createElement('div');
        divReference.setAttribute('id',`${index}`)
        i=index;
        divReference.classList.add('col', 'py-3');
        divReference.innerHTML=`<div class="card">
        <img src="${element.img}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${element.title}</h5>
          <p class="card-text">${element.price}€</p>
          <div class="d-flex justify-content-between">
         <a href="javascript:void(0)" onClick="scarta(${index},${element.asin})" class="btn btn-warning">Scarta</a>
         <a href="javascript:void(0)" onClick="compra(${index},${element.asin})" id="btncompra"  class="btn btn-primary">Compra ora</a>
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

let h=0;
const compra=(indice,codice)=>{
    h++;
    let cartLi=document.createElement('li');
    cartLi.classList.add('d-flex','justify-content-between','align-items-center','my-2');
    cartLi.innerHTML=`<div class="cartDiv">${libriArray[indice].title}</div>
    <div class="d-flex">
        <div class="cartPrice">${libriArray[indice].price}€</div>
        <div onclick="eliminaCarrello(${h-1})"><i class="bi bi-trash"></i></div>
    </div>`;
    listCartReference.appendChild(cartLi);
    carrelloArray[h-1]={code:`${libriArray[indice].asin}`,name:`${libriArray[indice].title}`, price:`${libriArray[indice].price}€`}
    localStorage.setItem('Cart',JSON.stringify(carrelloArray));

    console.log(carrelloArray);
console.log(codice);
    //console.log(libriArray[indice])

}

const eliminaCarrello=(indice,codice)=>{
    console.log('eliminato elemento'+indice)
    console.log(carrelloArray);
    carrelloArray.forEach((element,indice)=>{
        if (element.asin==codice)
        {
            console.log('libro selezionato:'+element.title+element.price);
        }
    })
   // carrelloArray.splice(indice,1);
    //carrelloArray[indice]='';
    //localStorage.setItem('Cart',JSON.stringify(carrelloArray) );
}

