
let productName = document.getElementById('productName')
let productDescription = document.getElementById('productDescription')
let productBrand = document.getElementById('productBrand')
let productImageUrl = document.getElementById('productImageUrl')
let productPrice = document.getElementById('productPrice')

let btnCancellazione = document.getElementById('proseguiCancellazione');
let btnProseguiModifica = document.getElementById('proseguiModifica')
let btnresetInfo = document.getElementById('resetInfo');


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
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDE0MzBkZGY4MWI0MjAwMTM5YjI3ZTciLCJpYXQiOjE2NzkwNDQ4MjksImV4cCI6MTY4MDI1NDQyOX0.yjchb6DJi01o7J__Q8QMEvT91DmGJh8J5Qx0dgXPKDk"
        }
    })
        .then(response => {
            return response.json();
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

getFetch();

btnresetInfo.addEventListener('click', () => {
    if (confirm('Are you sure you want to reset the Product details?') === true) {
        getFetch();
    }
});



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
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDE0MzBkZGY4MWI0MjAwMTM5YjI3ZTciLCJpYXQiOjE2NzkwNDQ4MjksImV4cCI6MTY4MDI1NDQyOX0.yjchb6DJi01o7J__Q8QMEvT91DmGJh8J5Qx0dgXPKDk",
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
        })
}
//console.log(faiFetch);

const pulisciInput = () => {
    productName.value = "";
    productDescription.value = "";
    productBrand.value = "";
    productImageUrl.value = "";
    productPrice.value = "";
}


const faiFetchCancellazione = () => {
    fetch(`https://striveschool-api.herokuapp.com/api/product/${idProdotto}`, {
        headers: {
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDE0MzBkZGY4MWI0MjAwMTM5YjI3ZTciLCJpYXQiOjE2NzkwNDQ4MjksImV4cCI6MTY4MDI1NDQyOX0.yjchb6DJi01o7J__Q8QMEvT91DmGJh8J5Qx0dgXPKDk"
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


btnProseguiModifica.addEventListener('click', faiFetch);
btnCancellazione.addEventListener('click', faiFetchCancellazione);

/*
let btnmodificaScelta = document.getElementById('sceltoModifica')
let btncancellazioneScelta = document.getElementById('sceltoCancellazione')
let nascondiModifica = document.getElementById('proseguiModifica');
let nascondiCancellazione = document.getElementById('proseguiCancellazione');




btnmodificaScelta.addEventListener('click', () => {
    nascondiCancellazione.classList.toggle('nascondi')
})

btncancellazioneScelta.addEventListener('click', () => {
    nascondiModifica.classList.toggle('nascondi')
})*/
