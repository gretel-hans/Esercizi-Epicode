/*
headers: { 
"Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDE0MzBkZGY4MWI0MjAwMTM5YjI3ZTciLCJpYXQiOjE2NzkwNDQ4MjksImV4cCI6MTY4MDI1NDQyOX0.yjchb6DJi01o7J__Q8QMEvT91DmGJh8J5Qx0dgXPKDk" 
} 
*/
let productsArray = [];
let prodottoFiltro = [];
let rowReference = document.getElementsByClassName('row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4')[0];
let caricamentoReference = document.getElementById('caricamento')



const creaProdotto = (prodotto) => {
    caricamentoReference.style.display = "none";
    prodotto.forEach(product => {
        let colReference = document.createElement('div');
        colReference.classList.add('col');
        colReference.innerHTML = `
    <div class="card">
                    <a class="d-flex" href="dettaglioProdotto.html?productId=${product._id}" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Tooltip on top"><img src="${product.imageUrl}" href="dettaglioProdotto.html?productId=${product._id}" class="card-img-top" alt="..."></a>
                    <div class="card-body text-center">
                        <h5 class="card-title">${product.name}</h5>
                        <h6 class="card-title">${product.brand}</h6>
                        <p class="card-text" id="textDescription">${product.description}</p>
                        <h4 class="card-text">${product.price}€</h4>
                        <div class="d-flex justify-content-between" style="width:100%">
                            <div class="row row-cols-1">
                                <a href="backOffice.html?productId=${product._id}" class="col btn btn-outline-success">Modify</a>
                                <a href="dettaglioProdotto.html?productId=${product._id}" class="col btn btn-outline-primary">Find out more</a>
                            </div>
                        </div>
                    </div>
                </div>
    `;
        rowReference.appendChild(colReference);
    });

}




let eseguiFetch = () => {
    fetch('https://striveschool-api.herokuapp.com/api/product/', {
        headers: {
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDE0MzBkZGY4MWI0MjAwMTM5YjI3ZTciLCJpYXQiOjE2NzkwNDQ4MjksImV4cCI6MTY4MDI1NDQyOX0.yjchb6DJi01o7J__Q8QMEvT91DmGJh8J5Qx0dgXPKDk"
        }
    })
        .then(response => {
            if (response.ok) {
                return response.json();
            }
            else if (response.status == 400) {
                alert('La richiesta eseguita per visualizzare i nostri prodotti è andato in errore')
            }
            else if (response.status == 401) {
                alert('La richiesta eseguita per visualizzare i nostri prodotti è andato in errore per un problema nell\'autorizzazione al nostro server')
            }
            else if (response.status == 404) {
                alert('Non sono state trovate le informazioni cercate')
            }
            else if (response.status == 500) {
                alert('C\'è un problema nel server')
            }

        })
        .then(products => {
            //console.log(products);
            productsArray = products;
            prodottoFiltro = products;
            creaProdotto(productsArray);
        })
        .catch(err => {
            console.log(err);
        })
}

setTimeout(eseguiFetch, 500)


let inputReference = document.getElementById("txt")
//console.log(inputReference)
let elementiFiltrati = [];



let stampaRisultato = () => {
    let newMap = [];
    filtraProdotti = (prodotto) => {
        if ((prodotto.name.toLowerCase()).includes(inputReference.value.toLowerCase())) {
            return prodotto
        }
    }
    const newArr = prodottoFiltro.map(filtraProdotti);

    newArr.forEach((element, index) => {
        if (element != undefined) {
            //console.log(element);
            newMap.push(element);
            rowReference.innerHTML = "";
        }
    })

    newMap.forEach(element => {
        let newcolReference = document.createElement('div');
        newcolReference.classList.add('col');
        newcolReference.innerHTML = `
<div class="card">
                <a class="d-flex" href="dettaglioProdotto.html?productId=${element._id}" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Tooltip on top"><img src="${element.imageUrl}" href="dettaglioProdotto.html?productId=${element._id}" class="card-img-top" alt="..."></a>
                <div class="card-body text-center">
                    <h5 class="card-title">${element.name}</h5>
                    <h6 class="card-title">${element.brand}</h6>
                    <p class="card-text" id="textDescription">${element.description}</p>
                    <h4 class="card-text">${element.price}€</h4>
                    <div class="d-flex justify-content-between" style="width:100%">
                        <div class="row row-cols-1">
                            <a href="backOffice.html?productId=${element._id}" class="col btn btn-outline-success">Modify</a>
                            <a href="dettaglioProdotto.html?productId=${element._id}" class="col btn btn-outline-primary">Find out more</a>
                        </div>
                    </div>
                </div>
            </div>`;
        rowReference.appendChild(newcolReference);
    })

    //console.log(newMap);

    if (newMap.length == 0) {
        let vuoto = document.createElement('h2');
        vuoto.classList.add('mx-auto', 'text-danger', 'text-center');
        vuoto.setAttribute('id', 'trovatoNiente')
        vuoto.innerHTML = `The Product you searched is not available in our shop! <i class="bi bi-emoji-frown text-danger mx-auto"></i> `
        rowReference.innerText = "";
        rowReference.appendChild(vuoto);
    }


    if (!inputReference.value) {
        rowReference.innerHTML = "";
        prodottoFiltro.forEach(element => {
            //console.log('è vuoto')
            let newcolReference2 = document.createElement('div');
            newcolReference2.classList.add('col');
            newcolReference2.innerHTML = `
    <div class="card">
                    <a class="d-flex" href="dettaglioProdotto.html?productId=${element._id}" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Tooltip on top"><img src="${element.imageUrl}" href="dettaglioProdotto.html?productId=${element._id}" class="card-img-top" alt="..."></a>
                    <div class="card-body text-center">
                        <h5 class="card-title">${element.name}</h5>
                        <h6 class="card-title">${element.brand}</h6>
                        <p class="card-text" id="textDescription">${element.description}</p>
                        <h4 class="card-text">${element.price}€</h4>
                        <div class="d-flex justify-content-between" style="width:100%">
                            <div class="row row-cols-1">
                                <a href="backOffice.html?productId=${element._id}" class="col btn btn-outline-success">Modify</a>
                                <a href="dettaglioProdotto.html?productId=${element._id}" class="col btn btn-outline-primary">Find out more</a>
                            </div>
                        </div>
                    </div>
                </div>
    `;
            rowReference.appendChild(newcolReference2);

        })
    }

    //console.log(inputReference.value);

}