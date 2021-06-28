import datosRyM from './data.js';

//Variables y get emelements
const boton = document.getElementById("boton");
let lupa = document.getElementById("search");
const todosArray = datosRyM.mostrarTodos();

//eventos
boton.addEventListener("click", mostrarTodos);
lupa.addEventListener("click", filtraNombre);

//funciones


function mostrarTodos() {

  const main = document.getElementById("main-container");

  for(let i = 0 ; i< 10 ;  i++){ //Iteracción para sacar la imagen y el nombre

    // let ficha_imagen = todosArray[i].image;
    // let ficha_nombre =  todosArray[i].name;
   
  main.innerHTML += `<div class="container">
                      <div class="fichasContainer">
                        <img src="${todosArray[i].image}" class="imagen-ficha-main">
                        <h2 class="nombreFichaMain">${todosArray[i].name}</h2>
                       </div>
                     </div>`
    console.log(main.innerHTML);
  } 
}
/*DATA INICIAL
const container = document.getElementById("box");
const pokeData = data.pokemon;

function showPokedex(pokeData){
for(let i=0; i<pokeData.length;i++){
  container.innerHTML +=`<div class="card"><h3 class="pokeNumber">${pokeData[i].num}</h3>
                        <img src="${pokeData[i].img}" class="clickImg">
                        <p class="pokeName">${pokeData[i].name}</p></div>`;
                        pokeModal(pokeData);
  }
}

*/



function filtraNombre(){

  let catchInput = (document.getElementById("input-search").value);
  
  let todosArray = datosRyM.filterByName(catchInput);
  console.log(todosArray); //este array se trae todo el objeto

  if(arrayNombres.length === 0){
    console.log("El objeto está vacío");  //Hacer mensaje de error dinámico y resetear el input
  };

  for(let i = 0 ; i<arrayNombres.length ;  i++){ //Iteracción para sacar la imagen y el nombre

    let ficha_imagen = arrayNombres[i].image;
    let ficha_nombre =  arrayNombres[i].name;


    console.log(ficha_imagen , ficha_nombre);


  }




}



