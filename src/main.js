import datosRyM from './data.js';
console.log(datosRyM);

//Variables, constantes y atrapadas de elementos
const lupa = document.getElementById("search");
const todosArray = datosRyM.mostrarTodos();
const main = document.getElementById("main-container");
let selectInput = document.getElementById("filtro");
let arrayOrden; 

//eventos
window.addEventListener('load' , mostrarTodos);
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

//funciones
function mostrarTodos() {
  for(let i = 0 ; i< 20 ;  i++){ //Iteración para sacar la imagen y el nombre
  main.innerHTML += `<div class="container">
                      <div class="fichasContainer">
                        <img src="${todosArray[i].image}" class="imagen-ficha-main">
                        <h2 class="nombreFichaMain">${todosArray[i].name}</h2>
                       </div>
                     </div>`;
                     openModal(todosArray);
  } 
}

function openModal(todosArray){
//le doy un espacio en main.html y lo tomo 
let modalPersonajes = document.getElementById("backgroundModal"); 
let clickPersonajes = document.getElementsByClassName("fichasContainer");

//aqui le digo que oculte el modal
modalPersonajes.style.display= "none";

for(let i=0; i<clickPersonajes.length; i++){
 let clickFicha = clickPersonajes[i];
 clickFicha.addEventListener("click",() =>{
   modalPersonajes.innerHTML="";
   modalPersonajes.style.display= "block";
   modalPersonajes.innerHTML +=
    `<div class="fichaModal">
     <div class="close"><span class="closeModal">&times;</span></div>
       <img src="${todosArray[i].image}" class="imgModal">
       <div id="contenedorInfo" class="info">
          <div class="infoPersonajeModal">
          <h1 class="name">${todosArray[i].name}</h1>
          <h2 class="species">${todosArray[i].species} - ${todosArray[i].status}</h2>
          <div class="modalOrigin">
              <p class="titleModal">Dónde vive</p>
              <div class="origin">${todosArray[i].origin}</div>
          </div>
          <div class="modalEpisode">
              <p class="titleModal">Episodios donde aparece</p>
              <div class="episode">${todosArray[i].episode}</div>
          </div>
          </div>
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
   //este array se trae todo el objeto

  if(arrayNombres.length === 0){
    console.log("El objeto está vacío");  //Hacer mensaje de error dinámico y resetear el input
  };
    
  main.innerHTML = "";
  for(let i = 0 ; i<arrayNombres.length ;  i++){ //Iteracción para sacar la imagen y el nombre
    main.innerHTML += `<div class="container">
                      <div class="fichasContainer">
                        <img src="${arrayNombres[i].image}" class="imagen-ficha-main">
                        <h2 class="nombreFichaMain">${arrayNombres[i].name}</h2>
                       </div>
                     </div>`
 };
}

function ordenAZ() {
  arrayOrden = datosRyM.ordenAZ(arrayOrden);
  main.innerHTML = "";
  for(let i = 0 ; i<20;  i++){ //Iteracción para sacar la imagen y el nombre
    main.innerHTML += `<div class="container">
                      <div class="fichasContainer">
                        <img src="${arrayOrden[i].image}" class="imagen-ficha-main">
                        <h2 class="nombreFichaMain">${arrayOrden[i].name}</h2>
                       </div>
                     </div>`
 };
console.log('esta funcionando la funcion de opcion AZ');
}

function ordenZA() {
  arrayOrden = datosRyM.ordenZA(arrayOrden);
  main.innerHTML = "";
  for(let i = 0 ; i<20;  i++){ //Iteracción para sacar la imagen y el nombre
    main.innerHTML += `<div class="container">
                      <div class="fichasContainer">
                        <img src="${arrayOrden[i].image}" class="imagen-ficha-main">
                        <h2 class="nombreFichaMain">${arrayOrden[i].name}</h2>
                       </div>
                     </div>`
 };
console.log('esta funcionando la funcion de opcion ZA');  
}



