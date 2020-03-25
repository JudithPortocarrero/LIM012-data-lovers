import {
  // eslint-disable-next-line max-len
  ordenarArrayAsc, ordenarArrayDes, ordenarArrayAz, ordenarArrayZa, filtrarOneKm, filtrarthreeKm, filtrarFiveKm, filtrarTwentyKm, ordenarAtaque, ordenarDefensa, ordenarAguante, ordenarMaxCp, ordenarMaxHp,
} from './data.js';
import data from './data/pokemon/pokemon.js';

document.getElementById('getCandy').classList.add('ocultar');
document.getElementById('powerData').classList.add('ocultar');
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
  document.getElementById('powerData').classList.add('ocultar');
  document.getElementById('pokedex').classList.remove('ocultar');
});
document.querySelector('#showGetCandy').addEventListener('click', () => {
  document.getElementById('pokedex').classList.add('ocultar');
  document.getElementById('powerData').classList.add('ocultar');
  document.getElementById('getCandy').classList.remove('ocultar');
  document.getElementById('pokemonList2').innerHTML = '';
  const totalKm = filtrarOneKm(arrPokemon).length;
  document.getElementById('total').innerHTML = `Total de pokemones de 1KM: ${totalKm}`;
  showPokemon2(filtrarOneKm(arrPokemon));
});
document.querySelector('#showPowerData').addEventListener('click', () => {
  document.getElementById('getCandy').classList.add('ocultar');
  document.getElementById('pokedex').classList.add('ocultar');
  document.getElementById('powerData').classList.remove('ocultar');
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
  document.getElementById('total').innerHTML = `Total de pokemones de 1KM: ${totalKm}`;
  showPokemon2(filtrarOneKm(arrPokemon));
});
document.querySelector('#threeKm').addEventListener('click', () => {
  document.getElementById('total').innerHTML = '';
  document.getElementById('pokemonList2').innerHTML = '';
  const totalKm = filtrarthreeKm(arrPokemon).length;
  document.getElementById('total').innerHTML = `Total de pokemones de 3KM: ${totalKm}`;
  showPokemon2(filtrarthreeKm(arrPokemon));
});
document.querySelector('#fiveKm').addEventListener('click', () => {
  document.getElementById('total').innerHTML = '';
  document.getElementById('pokemonList2').innerHTML = '';
  const totalKm = filtrarFiveKm(arrPokemon).length;
  document.getElementById('total').innerHTML = `Total de pokemones de 5KM: ${totalKm}`;
  showPokemon2(filtrarFiveKm(arrPokemon));
});
document.querySelector('#twentyKm').addEventListener('click', () => {
  document.getElementById('total').innerHTML = '';
  document.getElementById('pokemonList2').innerHTML = '';
  const totalKm = filtrarTwentyKm(arrPokemon).length;
  document.getElementById('total').innerHTML = `Total de pokemones de 20KM: ${totalKm}`;
  showPokemon2(filtrarTwentyKm(arrPokemon));
});
// Datos de poder
// ---------------------
const datos = (arr) => {
  let pokList = '';
  pokList += `
    <tr>
      <td>Numero</td>
      <td>Nombre</td>
      <td>Ataque</td>
    </tr>`;
  for (let i = 0; i < arr.length; i += 1) {
    pokList += `
    <tr>
      <td>${arr[i].num}</td>
      <td>${arr[i].name}</td>
      <td>${arr[i].stats['base-attack']}</td>
    </tr>`;
  }
  document.getElementById('mostrar').innerHTML = pokList;
};
const datos1 = (arr) => {
  let pokList = '';
  pokList += `
    <tr>
      <td>Numero</td>
      <td>Nombre</td>
      <td>Defensa</td>
    </tr>`;
  for (let i = 0; i < arr.length; i += 1) {
    pokList += `
      <tr>
        <td>${arr[i].num}</td>
        <td>${arr[i].name}</td>
        <td>${arr[i].stats['base-defense']}</td>
      </tr>`;
  }
  document.getElementById('mostrar').innerHTML = pokList;
};
const datos2 = (arr) => {
  let pokList = '';
  pokList += `
    <tr>
      <td>Numero</td>
      <td>Nombre</td>
      <td>Aguante</td>
    </tr>`;
  for (let i = 0; i < arr.length; i += 1) {
    pokList += `
      <tr>
        <td>${arr[i].num}</td>
        <td>${arr[i].name}</td>
        <td>${arr[i].stats['base-stamina']}</td>
      </tr>`;
  }
  document.getElementById('mostrar').innerHTML = pokList;
};
const datos3 = (arr) => {
  let pokList = '';
  pokList += `
    <tr>
      <td>Numero</td>
      <td>Nombre</td>
      <td>Max CP</td>
    </tr>`;
  for (let i = 0; i < arr.length; i += 1) {
    pokList += `
      <tr>
        <td>${arr[i].num}</td>
        <td>${arr[i].name}</td>
        <td>${arr[i].stats['max-cp']}</td>
      </tr>`;
  }
  document.getElementById('mostrar').innerHTML = pokList;
};
const datos4 = (arr) => {
  let pokList = '';
  pokList += `
    <tr>
      <td>Numero</td>
      <td>Nombre</td>
      <td>Max HP</td>
    </tr>`;
  for (let i = 0; i < arr.length; i += 1) {
    pokList += `
      <tr>
        <td>${arr[i].num}</td>
        <td>${arr[i].name}</td>
        <td>${arr[i].stats['max-hp']}</td>
      </tr>`;
  }
  document.getElementById('mostrar').innerHTML = pokList;
};
document.querySelector('#showPowerData').addEventListener('click', () => {
  document.getElementById('pokedex').classList.add('ocultar');
  document.getElementById('getCandy').classList.add('ocultar');
  document.getElementById('powerData').classList.remove('ocultar');
  document.getElementById('mostrar').innerHTML = '';
  datos(ordenarAtaque);
});
// Botones
document.querySelector('#ataque').addEventListener('click', () => {
  document.getElementById('mostrar').innerHTML = '';
  datos(ordenarAtaque);
});
document.querySelector('#defensa').addEventListener('click', () => {
  document.getElementById('mostrar').innerHTML = '';
  datos1(ordenarDefensa);
});
document.querySelector('#aguante').addEventListener('click', () => {
  document.getElementById('mostrar').innerHTML = '';
  datos2(ordenarAguante);
});
document.querySelector('#maxCp').addEventListener('click', () => {
  document.getElementById('mostrar').innerHTML = '';
  datos3(ordenarMaxCp);
});
document.querySelector('#maxHp').addEventListener('click', () => {
  document.getElementById('mostrar').innerHTML = '';
  datos4(ordenarMaxHp);
});
