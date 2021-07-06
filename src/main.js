import datosRyM from './data.js';
console.log(datosRyM); //console log que nos dice los metodos de DATA.JS

//Variables, constantes y atrapadas de elementos
const lupa = document.getElementById("search");
const arrayTodos = datosRyM.arrayQueMuestraTodos(); //naty tiene TODOSARRAY = ...
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
  
  for(let i = 0 ; i< 20 ;  i++){ //Iteración para sacar la imagen y el nombre
    
    main.innerHTML += `<div class="container">
                      <div class="fichasContainer id="fichasContainer">
                        <img class="imagen-ficha-main" src="${arrayTodos[i].image}"/>
                        <h2 class="nombreFichaMain">${arrayTodos[i].name}</h2>
                       </div>
                     </div>`;
                     
                                     
  } 

 let click = document.getElementById("fichasContainer");
 console.log(click.innerHTML);
 console.log(main);

}


function openModal(){

let clickFicha = document.getElementsByClassName("fichasContainer");
let modalPersonajes = document.getElementsByClassName("modal-container");
  
    
    clickFicha.addEventListener("click" , console.log(modalPersonajes, "este es el modalPersonajes")); 
     

}


function filtraNombre(){
  let catchInput = (document.getElementById("input-search").value);
  let arrayNombres = datosRyM.filterByName(catchInput);
   //este array se trae todo el objeto

  if(arrayNombres.length === 0){
    console.log("El objeto está vacío");  //Hacer mensaje de error dinámico y resetear el input
  };

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


