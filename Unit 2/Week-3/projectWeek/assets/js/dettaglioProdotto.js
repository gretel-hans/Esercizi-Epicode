let idprodottoEstratto = new URLSearchParams(window.location.search).get('productId')
let detailArray = [];
let containerReference = document.getElementById('dettaglioContainer');

const riempiDettagli = (prodotti) => {
    containerReference.innerHTML = `
<div class="row row-cols-1 row-cols-md-2 text-center" id="rigaDettaglio">
<div class="col col-md-8" id="dettaglioFoto">
    <img class="dettaglioFoto"
        src="${prodotti.imageUrl}">
</div>
<div class="col col-md-4 d-flex flex-column justify-content-between">
    <h2>${prodotti.name}</h2>
    <h4>${prodotti.brand}</h4>
    <div class="overflow-auto">${prodotti.description}</div>
    <h3>${prodotti.price}€</h3>
</div>
</div>
`;
}



const getFetch = () => {
    fetch(`https://striveschool-api.herokuapp.com/api/product/${idprodottoEstratto}`, {
        headers: {
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDE0MzBkZGY4MWI0MjAwMTM5YjI3ZTciLCJpYXQiOjE2NzkwNDQ4MjksImV4cCI6MTY4MDI1NDQyOX0.yjchb6DJi01o7J__Q8QMEvT91DmGJh8J5Qx0dgXPKDk"
        }
    })
        .then(response => {
            return response.json();
        })
        .then(products => {
            console.log(products);
            detailArray = products;
            riempiDettagli(detailArray);
        })
        .catch(err => {
            console.log(err);
        })
}

getFetch();

