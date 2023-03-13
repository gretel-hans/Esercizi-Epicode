console.log('Benvenuto nell\'esercizio sulle classi');

class User{
    constructor(_firstName,_lastName,_age,_location){
        this.firstName=_firstName;
        this.lastName=_lastName;
        this.age=_age;
        this.location=_location;
    }
    paragoneEta=function(_user2){
        if (this.age > _user2.age){
            console.log(this.firstName +' è più grande di '+ _user2.firstName) 
        } else if(this.age < _user2.age){
            console.log(_user2.firstName +' è più grande di '+ this.firstName)
        } else {
            console.log(_user2.firstName +' e '+ this.firstName + ' hanno la stessa età')
        }
    }
}

const Aurora= new User('Aurora','Bassi',19,'Roma');
const Mario= new User('Mario','Rossi',19,'Milano');
const Olivia= new User('Olivia','Bianchi',20,'Padova');

Aurora.paragoneEta(Mario);

class Pet{
    constructor(_petName,_ownerName,_species,_breed){
        this.petName=_petName;
        this.ownerName=_ownerName;
        this.species=_species;
        this.breed=_breed;
    }
    paragonePadrone=function(_Pet2){
        if(this.ownerName===_Pet2.ownerName){
            console.log(this.petName +' e '+ _Pet2.petName +' hanno lo stesso padrone di nome '+ this.ownerName)
        }else{
            console.log(this.petName +' e '+ _Pet2.petName +' non hanno lo stesso padrone')
        }
    }
}


listCreate=(Pet1)=>{
    let lista=document.createElement('li');
    lista.classList.add('list-group-item');
    lista.innerText=`Il Pet di ${Pet1.ownerName} si chiama ${Pet1.petName}, ed è un ${Pet1.species} di razza ${Pet1.breed}`;
    document.getElementsByClassName('list-group list-group-item-primary')[0].appendChild(lista);
    PetName.value='';
    OwnerName.value='';
    SpeciesName.value='';
    BreedName.value='';
}

let PetName=document.getElementById('PetName');
let OwnerName=document.getElementById('OwnerName');
let SpeciesName=document.getElementById('SpeciesName');
let BreedName=document.getElementById('BreedName');

document.getElementById('Registra').addEventListener('click',function(){
    if(PetName.value!='' && OwnerName.value!='' && SpeciesName.value!='' && BreedName.value!=''){
    alert('Hai inserito il tuo Pet nel form grazie!')
    const Pet1=new Pet(PetName.value,OwnerName.value,SpeciesName.value,BreedName.value);
    listCreate(Pet1);
    }else{
        alert('Inserisci tutti i dati del tuo pet per poter procedere!');
    }
})

const Pet2=new Pet('Spike','Ilario','Dog','Lupo Cecoslovacco');
const Pet3=new Pet('Nebe','Michi','Dog','Bassotto');

Pet2.paragonePadrone(Pet3);