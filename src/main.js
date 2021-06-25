import datosRyM from './data.js';

console.log(datosRyM);



//Variables y get emelements

let lupa = document.getElementById("search");


//eventos

lupa.addEventListener("click", filtraNombre);



//funciones


function filtraNombre(){

  let catchInput = (document.getElementById("input-search").value);
  let textCatchInput = catchInput.charAt(0).toUpperCase() + catchInput.slice(1).toLowerCase();



  console.log(catchInput , textCatchInput , "funciona la función");


}