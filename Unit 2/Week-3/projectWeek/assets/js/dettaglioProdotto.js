

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
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDQwMmEwNWQ5MTJlOTAwMTRjMjNmYTMiLCJpYXQiOjE2ODQ3NzczNzAsImV4cCI6MTY4NTk4Njk3MH0.RJ1s8NGriAzo8QkETgx1tmmpKudamnNop3ilTgGcIhY" 
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
            detailArray = products;
            riempiDettagli(detailArray);
        })
        .catch(err => {
            console.log(err);
        })
}

getFetch();

