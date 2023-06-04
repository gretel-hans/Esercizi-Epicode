

let idProd = new URLSearchParams(window.location.search).get('productId')
let containerReference = document.getElementById('backOfficeContainer')


let newProduct = {}


//Fine var BackOffice Creazione prodotto


//Variabili BackOffice Modifica prodotto

let productName = document.getElementById('productName')
let productDescription = document.getElementById('productDescription')
let productBrand = document.getElementById('productBrand')
let productImageUrl = document.getElementById('productImageUrl')
let productPrice = document.getElementById('productPrice')

let btnCancellazione = document.getElementById('proseguiCancellazione');
let btnProseguiModifica = document.getElementById('proseguiModifica')
let btnresetInfo = document.getElementById('resetInfo');

//Fine var BackOffice Modifica prodotto

let h2Reference = document.getElementById('backofficeTitle');

//Pagina Creazione 

if (!idProd) {
    h2Reference.innerText = "Welcome to the Product creation page!";
    //console.log('Pagina da creare');
    containerReference.innerHTML = `
    <button type="button" class="btn btn-danger" data-bs-toggle="modal"
    data-bs-target="#staticBackdrop">
    Create Product
    </button>
    <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false"
    tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h1 class="modal-title fs-5" id="staticBackdropLabel">
                    Product creation
                </h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal"
                    aria-label="Close"></button>
            </div>
            <div class="modal-body">
                Are you sure you want to create this new Product?
            </div>
            <div class="modal-footer mx-auto">
                <button type="button" class="btn btn-danger" data-bs-dismiss="modal">
                    Close
                </button>
                <div type="button" onclick="proseguiCreazione()" class="btn btn-success"
                    data-bs-dismiss="modal">
                    Create new Product
                </div>
            </div>
        </div>
    </div>
    </div>
    `;
} else {
    //console.log('Ciaooo');
    h2Reference.innerText = "Welcome to the Product modification page!"
    containerReference.innerHTML = `
    <a type="button" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
    Modify Product
    </a>
    <a type="button" class="btn btn-danger" onclick="nascondiModifica()" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
    Delete Product
    </a>
    <a type="button" class="btn btn-success" id="resetInfo" onclick="resetCampi()">
    Reset Product info
    </a>
    <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false"
    tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h1 class="modal-title fs-5" id="staticBackdropLabel">
                    Product Modification
                </h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal"
                    aria-label="Close"></button>
            </div>
            <div class="modal-body">
                Are you sure you want to modify this Product?
            </div>
            <div class="modal-footer mx-auto">
                <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">
                    Close
                </button>
                <div type="button" id="proseguiModifica" onclick="eseguiModifica()" class="btn btn-success"
                    data-bs-dismiss="modal">
                    Modify the Product
                </div>
                <div type="button" id="proseguiCancellazione" onclick="cancella()" class="btn btn-danger"
                    data-bs-dismiss="modal">
                    Delete the Product
                </div>
            </div>
        </div>
    </div>
    </div>
    `;
}
//Pagina modifica



let proseguiCreazione = () => {
    newProduct = {
        name: productName.value,
        description: productDescription.value,
        brand: productBrand.value,
        imageUrl: productImageUrl.value,
        price: productPrice.value
    }
    eseguiFetch(newProduct);
}

const pulisciInput = () => {
    productName.value = '';
    productDescription.value = "";
    productBrand.value = "";
    productImageUrl.value = "";
    productPrice.value = "";
}

const eseguiFetch = (prodottoNuovo) => {
    fetch('https://striveschool-api.herokuapp.com/api/product/', {
        method: 'POST',
        body: JSON.stringify(prodottoNuovo),
        headers: {
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDQwMmEwNWQ5MTJlOTAwMTRjMjNmYTMiLCJpYXQiOjE2ODQ3NzczNzAsImV4cCI6MTY4NTk4Njk3MH0.RJ1s8NGriAzo8QkETgx1tmmpKudamnNop3ilTgGcIhY" ,
            "Content-Type": "application/json",
        }
    })
        .then(response => {
            if (response.ok) {
                alert('Prodotto salvato con successo');
                pulisciInput();
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
        }).catch(error => {
            console.log(error)
        })
}




let idProdotto = new URLSearchParams(window.location.search).get('productId')
//console.log(idProdotto);
let prodottoOttenuto = [];

let prodottoDaInviare = [];

const riempiProdotto = (prodotto) => {
    productName.value = prodotto.name;
    productDescription.value = prodotto.description;
    productBrand.value = prodotto.brand;
    productImageUrl.value = prodotto.imageUrl;
    productPrice.value = prodotto.price;

}

const getFetch = () => {
    fetch(`https://striveschool-api.herokuapp.com/api/product/${idProdotto}`, {
        headers: {
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDQwMmEwNWQ5MTJlOTAwMTRjMjNmYTMiLCJpYXQiOjE2ODQ3NzczNzAsImV4cCI6MTY4NTk4Njk3MH0.RJ1s8NGriAzo8QkETgx1tmmpKudamnNop3ilTgGcIhY" 
        }
    })
        .then(response => {
            if (response.ok) {
                return response.json();
            }
            else if (response.status == 400) {
                alert('La richiesta eseguita per visualizzare il prodotto è andato in errore')
            }
            else if (response.status == 401) {
                alert('La richiesta eseguita per visualizzare il nostro prodotto è andato in errore per un problema nell\'autorizzazione al nostro server')
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
            prodottoOttenuto = products;
            riempiProdotto(prodottoOttenuto);
        })
        .catch(err => {
            console.log(err);
        })
}

if (idProd) {
    getFetch();
}


let resetCampi = () => {
    if (confirm('Are you sure you want to reset the Product details?') === true) {
        getFetch();
    }
}



const riempiArray = () => {
    prodottoDaInviare = {
        name: productName.value,
        description: productDescription.value,
        brand: productBrand.value,
        imageUrl: productImageUrl.value,
        price: productPrice.value
    }

}

const faiFetch = () => {
    riempiArray();
    fetch(`https://striveschool-api.herokuapp.com/api/product/${idProdotto}`, {
        method: 'PUT',
        body: JSON.stringify(prodottoDaInviare),
        headers: {
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDQwMmEwNWQ5MTJlOTAwMTRjMjNmYTMiLCJpYXQiOjE2ODQ3NzczNzAsImV4cCI6MTY4NTk4Njk3MH0.RJ1s8NGriAzo8QkETgx1tmmpKudamnNop3ilTgGcIhY" ,
            "Content-Type": "application/json",
        }
    })
        .then(response => {
            if (response.ok) {
                alert('Prodotto modificato con successo');
                window.location.replace('./homePage.html');
            } else {
                alert('ERRORE prodotto non modificato')
            }
        }).catch(error => {
            console.log(error)
        })
}
//console.log(faiFetch);

/*const pulisciInput = () => {
    productName.value = "";
    productDescription.value = "";
    productBrand.value = "";
    productImageUrl.value = "";
    productPrice.value = "";
}*/


const faiFetchCancellazione = () => {
    fetch(`https://striveschool-api.herokuapp.com/api/product/${idProdotto}`, {
        headers: {
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDQwMmEwNWQ5MTJlOTAwMTRjMjNmYTMiLCJpYXQiOjE2ODQ3NzczNzAsImV4cCI6MTY4NTk4Njk3MH0.RJ1s8NGriAzo8QkETgx1tmmpKudamnNop3ilTgGcIhY"
        },
        method: "DELETE"
    })
        .then(response => {
            if (response.ok) {
                alert('Prodotto cancellato')
                pulisciInput();
                window.location.replace('./homePage.html');
            } else {
                alert('Errore prodotto non cancellato')
            }
        })
        .catch(err => {
            console.log(err);
        })
}

let eseguiModifica = () => {
    faiFetch();
}

let cancella = () => {
    faiFetchCancellazione()
}

