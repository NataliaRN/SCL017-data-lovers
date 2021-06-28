import datosRyM from './data.js';






//Variables y get emelements

let lupa = document.getElementById("search");


//eventos

lupa.addEventListener("click", filtraNombre);





//funciones

function mostrarTodos() {


  const todosArray = datosRyM.mostrarTodos();

  for(let i = 0 ; i<todosArray.length ;  i++){ //Iteracción para sacar la imagen y el nombre

    let ficha_imagen = todosArray[i].image;
    let ficha_nombre =  todosArray[i].name;
    
    console.log(ficha_imagen , ficha_nombre);

  }


  
}



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



