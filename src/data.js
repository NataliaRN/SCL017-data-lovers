import data from './data/rickandmorty/rickandmorty.js';

let personajes = data.results; //Esto es un array de objetos

const datosRyM= {
  arrayQueMuestraTodos: function () {
    let arrayPersonajes= [];

    for (let i=0 ; i < personajes.length ; i++){
      arrayPersonajes.push(personajes[i]);
    }

    return arrayPersonajes;
  },

  //función que debe filtrar por nombre de input y devolver un array con todos los match
  filterByName : function(catchInput) { 
    const nombreInput = catchInput.toLowerCase();
    const arrayNombres = [];

      //iteramos cada elemento y se comparó con el nombre ingresado, devuelve array de nombres que coinciden
    for (let i=0 ; i< personajes.length; i++){
      if (personajes[i].name.toLowerCase().includes(nombreInput)){
        arrayNombres.push(personajes[i]);
        
      }
      
    }
    return arrayNombres;
},

    //función para ordenar A - Z 

    ordenAZ : function (arrayOrden) {
      let dataEnter = (arrayOrden != undefined && arrayOrden.length > 0) ? arrayOrden : data.results;
    

      return dataEnter.sort(function(a, b) {
          if (a.name > b.name) {
              return 1;
          }
          if (a.name < b.name) {
              return -1;
          }
          return 0;

      });

    }, 
    // Función ordenar Z -A 
    ordenZA : function (arrayOrden) {
      let dataEnter = (arrayOrden != undefined && arrayOrden.length > 0) ? arrayOrden : data.results;
    
      return dataEnter.sort(function(a, b) {
          if (a.name < b.name) {
              return 1;
          }
          if (a.name > b.name) {
              return -1;
          }
          return 0;

      });
      
    },


};


export default datosRyM;
