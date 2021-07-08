import datosRyM from './data.js';
console.log(datosRyM); //console log que nos dice los metodos de DATA.JS

//Variables, constantes y atrapadas de elementos
const lupa = document.getElementById("search");
const arrayTodos = datosRyM.arrayQueMuestraTodos(); 
const main = document.getElementById("main-container");
let selectInput = document.getElementById("filtro");
let arrayOrden; 

//////////eventos////////////

window.addEventListener("load" , ()=>{ //función para disparar todos los bichos en el main
  mostrarBichosMain(arrayTodos);
} );

lupa.addEventListener("click", filtraNombre);

selectInput.addEventListener("change", ()=> { //Función para disparar más de un evento
  const value = selectInput.options[selectInput.selectedIndex].value;
  switch (value) {
    case 'A-Z' :  ordenAZ();
      break;
  
    case 'Z-A' : ordenZA();
      break;
    case '...' :
      main.innerHTML="";
       mostrarBichosMain(arrayTodos);
    break;

  }
})

//////////////////funciones////////////////

function mostrarBichosMain(arrayTodos) {
  
  for(let i = 0 ; i< arrayTodos.length;  i++){ 

    const container = document.createElement("div")
    container.className= "container";

    const fichasContainer = document.createElement("div")
    fichasContainer.className = "fichasContainer";
    container.appendChild(fichasContainer);

    const img = document.createElement("img")
    img.src = arrayTodos[i].image;
    img.className = "imagen-ficha-main";
    fichasContainer.appendChild(img);
    container.appendChild(fichasContainer)

    const name = document.createElement("h1")
    name.className = "nombreFichaMain";
    
    const nameText = document.createTextNode(arrayTodos[i].name);
    name.appendChild(nameText);
    fichasContainer.appendChild(name);
    container.appendChild(fichasContainer);

    document.getElementById("main-container").appendChild(container);
                                     
   } 

  openModal(arrayTodos);
 console.log(main);


}


function openModal(array){

let clickPersonajes = document.getElementsByClassName("fichasContainer");
let modalPersonajes = document.getElementById("modal-container");
modalPersonajes.style.display= "none";

    for(let i=0; i<clickPersonajes.length; i++){

    let clickFicha = clickPersonajes[i];
    
    
    clickFicha.addEventListener("click" , ()=>{ 
      
      modalPersonajes.style.display= "block";
      modalPersonajes.innerHTML +=
        `<div class="fichaModal">
          <div id="contenedorInfo" class="info">
            <img class="imgModal" src=${array[i].image}>
              <div class="infoPersonajeModal">
              <h1 class="name">${array[i].name}</h1>
              <h2 class="species">${array[i].species} - ${array[i].status}</h2>
              <div class="modalOrigin">
                  <p class="titleModal">Dónde vive</p>
                  <div class="origin">${array[i].origin.name}</div>
              </div>
              <div class="modalEpisode">
                  <p class="titleModal">Episodios donde aparece</p>
                  <div class="episode">${array[i].episode.length}</div>
              </div>
              </div>
          </div>
          <div class="close"><span class="closeModal">&times;</span></div> 
        </div>`;
      

        let closeModal = document.getElementsByClassName("closeModal")[0];
        closeModal.addEventListener("click",()=>{
          modalPersonajes.style.display= "none";
          modalPersonajes.innerHTML = "";
        });
      });
}
}


function filtraNombre(){
  let catchInput = (document.getElementById("input-search").value);
  let arrayNombres = datosRyM.filterByName(catchInput);
   console.log(arrayNombres);

  if(arrayNombres.length === 0){
    console.log("El objeto está vacío");  
    
    //Hacer mensaje de error dinámico 
  }

  main.innerHTML = "";
  mostrarBichosMain(arrayNombres);
  
    
 
}

function ordenAZ() {
  arrayOrden = datosRyM.ordenAZ(arrayOrden);

  main.innerHTML = "";
  mostrarBichosMain(arrayOrden);
  
console.log('esta funcionando la funcion de opcion AZ');
}

function ordenZA() {
  arrayOrden = datosRyM.ordenZA(arrayOrden);

  main.innerHTML = "";
  mostrarBichosMain(arrayOrden);
  
console.log('esta funcionando la funcion de opcion ZA');  
}


