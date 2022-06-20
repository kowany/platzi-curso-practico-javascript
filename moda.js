const valoresLista = document.querySelector('#InputList');

function listado() {
 let listaSeparada = valoresLista.value.split(',');
 console.log(listaSeparada);
 const numeros = [];
 listaSeparada.forEach(element => {
  numeros.push(Number(element.trim()));
 });
 console.log(numeros);
 console.log(calcularModa(numeros));
}


// const lista1 = [1, 2, 2, 4, 3, 2, 3, 9, 2, 1, 1, 5, 1, 2, 9, 1, 1];

// const lista1Count = {};

// lista1.map(function(item) {
//  if (lista1Count[item]) {
//   lista1Count[item] += 1;
//  } else {
//   lista1Count[item] = 1;
//  }
// });

// lista1.map((item) =>
//   lista1Count[item] ? (lista1Count[item] += 1) : (lista1Count[item] = 1)
// );

// const listArray = Object.entries(lista1Count).sort(function (a, b) {
//   return a[1] - b[1];
// });
// console.log(listArray);
// const moda = listArray[listArray.length - 1];

function calcularModa(lista) {
  const listCount = {};
  lista.map((item) =>
    listCount[item] ? (listCount[item] += 1) : (listCount[item] = 1)
  );
  const listArray = Object.entries(listCount).sort(function (a, b) {
    return a[1] - b[1];
  });

  const moda = listArray[listArray.length - 1];
  return moda;
}
