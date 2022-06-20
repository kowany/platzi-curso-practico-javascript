const valoresLista = document.querySelector('#InputList');

function listado() {
 let algo = valoresLista.value.split(',');
 const numeros = [];
 algo.forEach(element => {
  numeros.push(Number(element.trim()));
 });
 arrayFromListado(numeros);
}

function arrayFromListado(lista1) {
 lista1.sort(function(a,b) {
  return a - b;
 });
 
 const mitadLista = parseInt(lista1.length / 2);
 
 if (esPar(lista1.length)) {
  calcularMediana([lista1[mitadLista-1], lista1[mitadLista]]);
 } else {
  calcularMediana([lista1[mitadLista]]);
 }
}

// const lista1 = [
//  100,
//  200,
//  400,
//  // 500,
//  700,
//  // 600,
//  300,
//  40000000000
// ];

function calcularMediana(lista) {
 console.log(`Mediana es: ${lista.reduce( (accum, value) => accum + value, 0)/lista.length}`);
}

function esPar(numero) {
 if ((numero % 2) === 0) {
  return true;
 } else {
  return false;
 }
}