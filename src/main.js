import {
  ordenarArrayAsc, ordenarArrayDes, ordenarArrayAz, ordenarArrayZa, filtrarOneKm, filtrarthreeKm, filtrarFiveKm,
} from './data.js';
import data from './data/pokemon/pokemon.js';

document.getElementById('getCandy').classList.add('ocultar');
const arrPokemon = data.pokemon;
const showPokemon = (arr) => {
  let pokList = '';
  for (let i = 0; i < arr.length; i += 1) {
    pokList += `
      <div class="conteinerPokemon">
        <img src="${arr[i].img}">
        <p>N°${arr[i].num}</p>
        <p>${arr[i].name}</p>
        <p>${arr[i].type}</p>
      </div>`;
  }
  document.getElementById('pokemonList').innerHTML = pokList;
};
const showPokemon2 = (arr) => {
  let pokList2 = '';
  for (let i = 0; i < arr.length; i += 1) {
    pokList2 += `
      <div class="conteinerPokemon">
        <img src="${arr[i].img}">
        <p>N°${arr[i].num}</p>
        <p>${arr[i].name}</p>
        <p>${arr[i].type}</p>
      </div>`;
  }
  document.getElementById('pokemonList2').innerHTML = pokList2;
};
// Definición de la función
const cargar = () => {
  showPokemon(arrPokemon);
};
window.addEventListener('load', cargar, false);

document.querySelector('#showPokedex').addEventListener('click', () => {
  document.getElementById('getCandy').classList.add('ocultar');
  document.getElementById('pokedex').classList.remove('ocultar');
});
document.querySelector('#showGetCandy').addEventListener('click', () => {
  document.getElementById('pokedex').classList.add('ocultar');
  document.getElementById('getCandy').classList.remove('ocultar');
});
document.querySelector('#upward').addEventListener('click', () => {
  document.getElementById('pokemonList').innerHTML = '';
  showPokemon(ordenarArrayAsc(arrPokemon));
});
document.querySelector('#falling').addEventListener('click', () => {
  document.getElementById('pokemonList').innerHTML = '';
  showPokemon(ordenarArrayDes(arrPokemon));
});
document.querySelector('#sortAz').addEventListener('click', () => {
  document.getElementById('pokemonList').innerHTML = '';
  showPokemon(ordenarArrayAz(arrPokemon));
});
document.querySelector('#sortZa').addEventListener('click', () => {
  document.getElementById('pokemonList').innerHTML = '';
  showPokemon(ordenarArrayZa(arrPokemon));
});
// Filtrar por km
document.querySelector('#oneKm').addEventListener('click', () => {
  document.getElementById('total').innerHTML = '';
  document.getElementById('pokemonList2').innerHTML = '';
  const totalKm = filtrarOneKm(arrPokemon).length;
  document.getElementById('total').innerHTML = `Total de pokemones: ${totalKm}`;
  showPokemon2(filtrarOneKm(arrPokemon));
});
document.querySelector('#threeKm').addEventListener('click', () => {
  document.getElementById('total').innerHTML = '';
  document.getElementById('pokemonList2').innerHTML = '';
  const totalKm = filtrarthreeKm(arrPokemon).length;
  document.getElementById('total').innerHTML = `Total de pokemones: ${totalKm}`;
  showPokemon2(filtrarOneKm(arrPokemon));
});
document.querySelector('#fiveKm').addEventListener('click', () => {
  document.getElementById('total').innerHTML = '';
  document.getElementById('pokemonList2').innerHTML = '';
  const totalKm = filtrarFiveKm(arrPokemon).length;
  document.getElementById('total').innerHTML = `Total de pokemones: ${totalKm}`;
  showPokemon2(filtrarOneKm(arrPokemon));
});
