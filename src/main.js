import datosRyM  from './data/rickandmorty/rickandmorty.js';

console.log(datosRyM);

//get elements

let lupa = document.getElementById("search");


//eventos

lupa.addEventListener("click", buscarNombre);


//funciones

function buscarNombre(){
  console.log("haces click en lupa")

}


