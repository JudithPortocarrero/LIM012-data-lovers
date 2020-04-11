import {
<<<<<<< HEAD
  ordenarArrayAsc, ordenarArrayDes, ordenarArrayAz, ordenarArrayZa,
} from '../src/data.js';

describe('ordenarArrayAsc', () => {
=======
  sortArray, filterKm, sortPower, comparePokemon, searchPokemon,
} from '../src/data.js';

const inputOrder = [{ num: '002', name: 'ivysaur' }, { num: '003', name: 'venusaur' }, { num: '001', name: 'bulbasaur' }];
const outputOrderAsc = [{ num: '001', name: 'bulbasaur' }, { num: '002', name: 'ivysaur' }, { num: '003', name: 'venusaur' }];
const outputOrderDes = [{ num: '003', name: 'venusaur' }, { num: '002', name: 'ivysaur' }, { num: '001', name: 'bulbasaur' }];
const outputOrderAz = [{ num: '001', name: 'bulbasaur' }, { num: '002', name: 'ivysaur' }, { num: '003', name: 'venusaur' }];
const outputOrderZa = [{ num: '003', name: 'venusaur' }, { num: '002', name: 'ivysaur' }, { num: '001', name: 'bulbasaur' }];

describe('ordenado Numericamente y alfabeticamente', () => {
>>>>>>> 45df131... proyecto terminado
  it('is a function', () => {
    expect(typeof ordenarArrayAsc).toBe('function');
  });
});
describe('ordenarArrayDes', () => {
  it('is a function', () => {
    expect(typeof ordenarArrayDes).toBe('function');
  });
});
describe('ordenarArrayAz', () => {
  it('is a function', () => {
    expect(typeof ordenarArrayAz).toBe('function');
  });
});
describe('ordenarArrayZa', () => {
  it('is a function', () => {
    expect(typeof ordenarArrayZa).toBe('function');
  });
});
<<<<<<< HEAD
// import { example, anotherExample } from '../src/data.js';
// describe('example', () => {
//   it('is a function', () => {
//     expect(typeof example).toBe('function');
//   });
//   it('returns `example`', () => {
//     expect(example()).toBe('example');
//   });
// });
// describe('anotherExample', () => {
//   it('is a function', () => {
//     expect(typeof anotherExample).toBe('function');
//   });
//   it('returns `anotherExample`', () => {
//     expect(anotherExample()).toBe('OMG');
//   });
// });
=======
const inputSearchName = [{ name: 'bulbasaur' }, { name: 'ivysaur' }, { name: 'bayleef' }, { name: 'caterpie' }, { name: 'beedrill' }];
const outputcomparePokemon = [{ name: 'bulbasaur' }];
const outputsearchPokemon = [{ name: 'bulbasaur' }, { name: 'bayleef' }, { name: 'beedrill' }];
describe('Buscador por nombre', () => {
  it('is a function', () => {
    expect(typeof comparePokemon).toBe('function');
  });
  it('Buscador nombre', () => {
    expect(comparePokemon(inputSearchName, 'bulbasaur')).toEqual(outputcomparePokemon);
  });
});
describe('Buscador por nombre por coincidencia', () => {
  it('is a function', () => {
    expect(typeof searchPokemon).toBe('function');
  });
  it('buscador coincidencia nombre', () => {
    expect(searchPokemon(outputsearchPokemon, 'b')).toEqual(outputsearchPokemon);
  });
});
>>>>>>> 45df131... proyecto terminado
