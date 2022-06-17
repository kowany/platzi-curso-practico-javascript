// Helpers

function esPar(numero) {
 return (numero % 2 === 0);
}

function calcularMediaAritmetica(lista) {
 return lista.reduce( (valorAcumulado, nuevoElemento) => valorAcumulado + nuevoElemento, 0) / lista.length;
}

// Calculadora de mediana

function medianaSalarios(lista) {
 const mitad = parseInt(lista.length / 2);

 if (esPar(lista.length)) {
  return calcularMediaAritmetica([lista[mitad-1], lista[mitad]])
 } else {
  return lista[mitad];
 }
}

// Mediana general
const salariosNic = nicaragua.map( person => person.salary );

const salariosNicSorted = salariosNic.sort( (salaryA, salaryB) => salaryA-salaryB );

console.log('salarios ordenados', salariosNicSorted)
const medianaGeneralNicaragua = medianaSalarios(salariosNicSorted);

// Mediana del top 10%

const spliceStart = Math.round(salariosNicSorted.length * 90 / 100);
const spliceCount  = Math.round(salariosNicSorted.length - spliceStart);
const salariosNicaraguaTop10 = salariosNicSorted.splice(spliceStart, spliceCount);
const medianaTop10Nicaragua = medianaSalarios(salariosNicaraguaTop10);

console.log({
 salariosNicaraguaTop10,
 medianaGeneralNicaragua,
 medianaTop10Nicaragua
});

