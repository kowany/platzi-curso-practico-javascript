const lista1 = [
 100,
 200,
 400,
 // 500,
 700,
 // 600,
 300,
 40000000000
];

lista1.sort(function(a,b) {
 return a - b;
});
console.log(lista1);

const mitadLista = parseInt(lista1.length / 2);

if (esPar(lista1.length)) {
 calcularMediana([lista1[mitadLista-1], lista1[mitadLista]]);
} else {
 calcularMediana([lista1[mitadLista]]);
}


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