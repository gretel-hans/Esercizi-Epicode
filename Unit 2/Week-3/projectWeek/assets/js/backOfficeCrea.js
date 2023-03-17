let productName = document.getElementById('productName')
let productDescription = document.getElementById('productDescription')
let productBrand = document.getElementById('productBrand')
let productImageUrl = document.getElementById('productImageUrl')
let productPrice = document.getElementById('productPrice')
let newProduct = {}

let btnProsegui = document.getElementById('proseguiCreazione');

btnProsegui.addEventListener('click', () => {
    newProduct = {
        name: productName.value,
        description: productDescription.value,
        brand: productBrand.value,
        imageUrl: productImageUrl.value,
        price: productPrice.value
    }
    eseguiFetch(newProduct);
})

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
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDE0MzBkZGY4MWI0MjAwMTM5YjI3ZTciLCJpYXQiOjE2NzkwNDQ4MjksImV4cCI6MTY4MDI1NDQyOX0.yjchb6DJi01o7J__Q8QMEvT91DmGJh8J5Qx0dgXPKDk",
            "Content-Type": "application/json",
        }
    })
        .then(response => {
            if (response.ok) {
                alert('Prodotto salvato con successo');
                pulisciInput();
            } else {
                alert('ERRORE prodotto non salvato')
            }
        })
}




