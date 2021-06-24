import data from './data/rickandmorty/rickandmorty.js';

const datosRyM= {

  personajes(){
    return data.results;
  },  

  filterByName(enterName) {
    return data.pokemon.filter(pokemon => {
        return pokemon.name.toLowerCase().concat(" " + pokemon.num).includes(enterName.toLowerCase())
    });
},



};


export default datosRyM;