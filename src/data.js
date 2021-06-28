import data from './data/rickandmorty/rickandmorty.js';

let personajes = data.results; //Esto es un array de objetos



const datosRyM= {

  mostrarTodos: function () {
    const arrayPersonajes= [];

    for (let i=0 ; i < personajes.length ; i++){
      arrayPersonajes.push(personajes[i]);
      console.log(arrayPersonajes)

    }

    return arrayPersonajes;
    
  },

  

  //función que debe filtrar por nombre de input y devolver un array con todos los match
  filterByName : function(catchInput) { 
    const nombreInput = catchInput.toLowerCase();
    const arrayNombres = [];
    console.log(arrayNombres);

      //iteramos cada elemento y se comparó con el nombre ingresado, devuelve array de nombres que coinciden
    for (let i=0 ; i< personajes.length; i++){
      if (personajes[i].name.toLowerCase().includes(nombreInput)){
        arrayNombres.push(personajes[i]);
      }
    }
    console.log(arrayNombres);
    return arrayNombres;
    


      
    
    
},


};


export default datosRyM;
