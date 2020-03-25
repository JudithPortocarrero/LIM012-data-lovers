export const ordenarArrayAsc = (arr) => {
  let arrPokemonesNumAsc = [];
  arrPokemonesNumAsc = arr.sort((a, b) => a.num - b.num);
  return arrPokemonesNumAsc;
};
export const ordenarArrayDes = (arr) => {
  let arrPokemonesNumDesc = [];
  arrPokemonesNumDesc = arr.sort((a, b) => b.num - a.num);
  return arrPokemonesNumDesc;
};
export const ordenarArrayAz = (arr) => {
  let arrPokemonesAz = [];
  arrPokemonesAz = arr.sort((a, b) => {
    if (a.name > b.name) {
      return 1;
    } return -1;
  });
  return arrPokemonesAz;
};
export const ordenarArrayZa = (arr) => {
  let arrPokemonesZa = [];
  arrPokemonesZa = arr.sort((a, b) => {
    if (b.name > a.name) {
      return 1;
    } return -1;
  });
  return arrPokemonesZa;
};
// filtrar por km
export const filtrarOneKm = (arr) => {
  const arrFiltradoKM = arr.filter(object => object['buddy-distance-km'] === '1');
  return arrFiltradoKM;
};
export const filtrarthreeKm = (arr) => {
  const arrFiltradoKM = arr.filter(object => object['buddy-distance-km'] === '3');
  return arrFiltradoKM;
};
export const filtrarFiveKm = (arr) => {
  const arrFiltradoKM = arr.filter(object => object['buddy-distance-km'] === '5');
  return arrFiltradoKM;
};
export const filtrarTwentyKm = (arr) => {
  const arrFiltradoKM = arr.filter(object => object['buddy-distance-km'] === '20');
  return arrFiltradoKM;
};
export const ordenarAtaque = (arr) => {
  let arrPokemonesNumAsc = [];
  arrPokemonesNumAsc = arr.sort((a, b) => b.stats['base-attack'] - a.stats['base-attack']);
  return arrPokemonesNumAsc;
};
export const ordenarDefensa = (arr) => {
  let arrPokemonesNumAsc = [];
  arrPokemonesNumAsc = arr.sort((a, b) => b.stats['base-defense'] - a.stats['base-defense']);
  return arrPokemonesNumAsc;
};
export const ordenarAguante = (arr) => {
  let arrPokemonesNumAsc = [];
  arrPokemonesNumAsc = arr.sort((a, b) => b.stats['base-stamina'] - a.stats['base-stamina']);
  return arrPokemonesNumAsc;
};
export const ordenarMaxCp = (arr) => {
  let arrPokemonesNumAsc = [];
  arrPokemonesNumAsc = arr.sort((a, b) => b.stats['max-cp'] - a.stats['max-cp']);
  return arrPokemonesNumAsc;
};
export const ordenarMaxHp = (arr) => {
  let arrPokemonesNumAsc = [];
  arrPokemonesNumAsc = arr.sort((a, b) => b.stats['max-hp'] - a.stats['max-hp']);
  return arrPokemonesNumAsc;
};
