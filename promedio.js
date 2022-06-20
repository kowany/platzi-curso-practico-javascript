const valoresLista = document.querySelector('#InputList');

function listado() {
 let algo = valoresLista.value.split(',');
 console.log(algo);
 const numeros = [];
 algo.forEach(element => {
  numeros.push(Number(element.trim()));
 });
 console.log(calcularMediaAritmetica(numeros));
}


// const list1 = [
//  100,
//  200,
//  300,
//  500
// ];

// Promedio o media aritmética
function calcularMediaAritmetica(lista) {
 // let sumaLista = 0;
 
 // for (let i = 0; i < lista.length; i++) {
 //  sumaLista+= lista[i];
 // }
 
 return lista.reduce( (valorAcumulado, nuevoElemento) => valorAcumulado + nuevoElemento, 0) / lista.length;

 // return sumaLista/list1.length;
 
 // console.log(promedioList1);
}