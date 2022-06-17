const list1 = [
 100,
 200,
 300,
 500
];




function calcularMediaAritmetica(lista) {
 // let sumaLista = 0;
 
 // for (let i = 0; i < lista.length; i++) {
 //  sumaLista+= lista[i];
 // }
 
 return lista.reduce( (valorAcumulado, nuevoElemento) => valorAcumulado + nuevoElemento, 0) / lista.length;

 // return sumaLista/list1.length;
 
 // console.log(promedioList1);
}