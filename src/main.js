import datosRyM from './data.js';
console.log(datosRyM);


//Variables, constantes y atrapadas de elementos

let lupa = document.getElementById("search");
const todosArray = datosRyM.mostrarTodos();
const main = document.getElementById("main-container")

//eventos
window.addEventListener('load' , mostrarTodos);
lupa.addEventListener("click", filtraNombre);

//funciones


function mostrarTodos() {


  for(let i = 0 ; i< 10 ;  i++){ //Iteracción para sacar la imagen y el nombre
   
  main.innerHTML += `<div class="container">
                      <div class="fichasContainer">
                        <img src="${todosArray[i].image}" class="imagen-ficha-main">
                        <h2 class="nombreFichaMain">${todosArray[i].name}</h2>
                       </div>
                     </div>`
    
  } 
}



function filtraNombre(){

  let catchInput = (document.getElementById("input-search").value);
  
  let arrayNombres = datosRyM.filterByName(catchInput);
   //este array se trae todo el objeto

  if(arrayNombres.length === 0){
    console.log("El objeto está vacío");  //Hacer mensaje de error dinámico y resetear el input
  };

  for(let i = 0 ; i<arrayNombres.length ;  i++){ //Iteracción para sacar la imagen y el nombre

    main.innerHTML += `<div class="container">
                      <div class="fichasContainer">
                        <img src="${arrayNombres[i].image}" class="imagen-ficha-main">
                        <h2 class="nombreFichaMain">${arrayNombres[i].name}</h2>
                       </div>
                     </div>`


  };




}



