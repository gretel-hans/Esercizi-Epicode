/*
headers: { 
"Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDE0MzBkZGY4MWI0MjAwMTM5YjI3ZTciLCJpYXQiOjE2NzkwNDQ4MjksImV4cCI6MTY4MDI1NDQyOX0.yjchb6DJi01o7J__Q8QMEvT91DmGJh8J5Qx0dgXPKDk" 
} 
*/
let productsArray = [];
let rowReference = document.getElementsByClassName('row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4')[0];
let caricamentoReference = document.getElementById('caricamento')

const creaProdotto = (prodotto) => {
    caricamentoReference.style.display = "none";
    prodotto.forEach(product => {
        let colReference = document.createElement('div');
        colReference.classList.add('col');
        colReference.innerHTML = `
    <div class="card">
                    <img src="${product.imageUrl}" class="card-img-top" alt="...">
                    <div class="card-body text-center">
                        <h5 class="card-title">${product.name}</h5>
                        <h6 class="card-title">${product.brand}</h6>
                        <p class="card-text" id="textDescription">${product.description}</p>
                        <h4 class="card-text">${product.price}€</h4>
                        <div class="d-flex justify-content-between" style="width:100%">
                            <div class="row row-cols-1">
                                <a href="backOfficeModifica.html?productId=${product._id}" class="col btn btn-outline-success">Modify</a>
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
            return response.json();
        })
        .then(products => {
            console.log(products);
            productsArray = products;
            creaProdotto(productsArray);
        })
        .catch(err => {
            console.log(err);
        })
}

setTimeout(eseguiFetch, 500)