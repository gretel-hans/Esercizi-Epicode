let myAPI='2PjjVDvLKUrEwTPVcemTPf8ERVcYQ4NwI8aoilZu5C7eBTgi7Efk2rIJ'
let rowReference=document.getElementById('fotoAlbum');
let standardUrl='https://api.pexels.com/v1/search?query=';

let url1='https://api.pexels.com/v1/search?query=nature';
let url2='https://api.pexels.com/v1/search?query=cats';

let btnReference=document.getElementById('btnSearch');
let fotoquery=document.getElementById('searchFoto');

const estraiFoto=(foto)=>{
    rowReference.innerHTML=``;
    foto.forEach(foto => {
       let newCol=document.createElement('div');
    newCol.classList.add('col-md-4');
    newCol.innerHTML=`<div class="card mb-4 shadow-sm">
    <img src="${foto.src.original}" height="200px">
    <div class="card-body">
      <h5 class="card-title">${foto.alt}</h5>
      <p class="card-text">
        Photo description
      </p>
      <div class="d-flex justify-content-between align-items-center">
        <div class="btn-group">
          <div type="button" class="btn btn-sm btn-outline-secondary">
            View
          </div>
          <div type="button" id="hide" onclick="nascondiCard()" class="btn btn-sm btn-outline-secondary">
            HIDE
          </div>
        </div>
        <small class="text-muted">${foto.id}</small>
      </div>
    </div>
  </div>`;
  rowReference.appendChild(newCol); 
    });
}

const caricaFoto=()=>{
fetch(url1,{
    method:'GET',
    headers:{
        Authorization:myAPI
    }
})
.then((response)=>{
    return response.json();
})
.then((foto)=>{
    //console.log(foto.photos);
    let arrayFoto=foto.photos;
    //console.log(arrayFoto[0]);
    estraiFoto(arrayFoto);
})
.catch(err=>{console.log(err)});
}


const caricaFoto2=()=>{
    fetch(url2,{
        method:'GET',
        headers:{
            Authorization:myAPI
        }
    })
    .then((response)=>{
        return response.json();
    })
    .then((foto)=>{
        //console.log(foto.photos);
        let arrayFoto=foto.photos;
        //console.log(arrayFoto[0]);
        estraiFoto(arrayFoto);
    })
    .catch(err=>{console.log(err)});
    } 

    btnReference.addEventListener('click',()=>{
        fetch(standardUrl+fotoquery.value,{
            method:'GET',
            headers:{
                Authorization:myAPI
            }
        })
        .then((response)=>{
            return response.json();
        })
        .then((foto)=>{
            //console.log(foto.photos);
            let arrayFoto=foto.photos;
            //console.log(arrayFoto[0]);
            estraiFoto(arrayFoto);
        })
        .catch(err=>{console.log(err)});
        fotoquery.value=''; 
        }
        
    )

    const nascondiCard=()=>{
        let btnHide=document.getElementById('hide');
        console.log(btnHide.closest('div .col-md-4'))
    }