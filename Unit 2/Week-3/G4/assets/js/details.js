let nomeFotografo= new URLSearchParams(window.location.search).get('fotografoNome');
let linkFotografo= new URLSearchParams(window.location.search).get('fotografoLink');
let srcFoto= new URLSearchParams(window.location.search).get('srcFoto');
let titoloFoto= new URLSearchParams(window.location.search).get('titoloFoto');

console.log(nomeFotografo);

let containerReference =document.getElementsByClassName('row fotoContainer')[0];

containerReference.innerHTML=`<h3 class="text-center">${titoloFoto}</h3><span></span>
<div class="col col-10 mx-auto" id="fotoWrapper">
    <img src="${srcFoto}" class="mb-1">
    <h4>by: <a href="${linkFotografo}" target="_blank">${nomeFotografo}</a></h4>
</div>`;