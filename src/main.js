import datosRyM from './data.js';
console.log(datosRyM); //console log que nos dice los metodos de DATA.JS

//Variables, constantes y atrapadas de elementos
const lupa = document.getElementById("search");
const arrayTodos = datosRyM.arrayQueMuestraTodos();
const main = document.getElementById("main-container");
let selectInput = document.getElementById("filtro");
let arrayOrden; 
const reset = document.getElementsByTagName("header");

//////////eventos////////////

window.addEventListener("load" , ()=>{ //función para disparar todos los bichos
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
  }
})

//////////////////funciones////////////////

function mostrarBichosMain(arrayTodos) {

  main.innerHTML = "";
  
  for(let i = 0 ; i< 20 ;  i++){ //Iteración para sacar la imagen y el nombre
    
    main.innerHTML += `<div class="container">
                      <div class="fichasContainer">
                        <img src="${arrayTodos[i].image}" class="imagen-ficha-main">
                        <h2 class="nombreFichaMain">${arrayTodos[i].name}</h2>
                       </div>
                     </div>`;
                     openModal(arrayTodos);
                 
  } 


}

function openModal(array){
//le doy un espacio en main.html y lo tomo 
let modalPersonajes = document.getElementById("backgroundModal"); 
let clickPersonajes = document.getElementsByClassName("fichasContainer");


    for(let i=0; i<clickPersonajes.length; i++){
    let clickFicha = clickPersonajes[i];
    clickFicha.addEventListener("click",() =>{
      for (let i= 0; i=array.length; i++){
      modalPersonajes.innerHTML="";
      modalPersonajes.style.display= "block";
      modalPersonajes.innerHTML +=
        `<div class="fichaModal">
          <div id="contenedorInfo" class="info">
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
        </div>`;
        console.log("este click se supone que construye el modal");

        let closeModal = document.getElementsByClassName("closeModal")[0];
        closeModal.addEventListener("click",()=>{
          modalPersonajes.style.display= "none";
          modalPersonajes.innerHTML = "";
        });
      }

    });
}
}


function filtraNombre(){
  let catchInput = (document.getElementById("input-search").value);
  let arrayNombres = datosRyM.filterByName(catchInput);
   //este array se trae todo el objeto

  if(arrayNombres.length === 0){
    console.log("El objeto está vacío");  //Hacer mensaje de error dinámico y resetear el input
  };

  mostrarBichosMain(arrayNombres);
  openModal(arrayNombres);
    
 
}

function ordenAZ() {
  arrayOrden = datosRyM.ordenAZ(arrayOrden);
  mostrarBichosMain(arrayOrden);
  openModal(arrayOrden);
console.log('esta funcionando la funcion de opcion AZ');
}

function ordenZA() {
  arrayOrden = datosRyM.ordenZA(arrayOrden);
  mostrarBichosMain(arrayOrden);
  openModal(arrayOrden);
console.log('esta funcionando la funcion de opcion ZA');  
}


