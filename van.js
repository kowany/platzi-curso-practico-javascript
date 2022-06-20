async function calculaVan() {
 const valoresIngresos = document.querySelector('#InputIncomes').value;
 const valoresEgresos = document.querySelector('#InputExpenses').value;
 const result = document.querySelector('#result');
 
 const listaIngresos = await listado(valoresIngresos);
 const listaEgresos = await listado(valoresEgresos);
 
 const tasaInteres = Number(document.querySelector('#InputInterest').value)/100;
 const inversionInicial = Number(document.querySelector('#InputInvestment').value)*(-1);

 result.textContent = `El valor del Valor Actual Neto (VAN) es: ${flujoEfectivoNeto(listaIngresos, listaEgresos, inversionInicial, tasaInteres)}`;
}


function listado(lista) {
 let listaString = lista.split(',');

 const numerosLista = [];

 listaString.forEach(element => {
  numerosLista.push(Number(element.trim()));
 });

 return numerosLista;
}

function flujoEfectivoNeto(flujoIngreso, flujoEgreso, inversionInicial, interes) {

 if (flujoIngreso.length - flujoEgreso.length !== 0) {
  console.log(`La longitud de las listas deben de ser iguales`);
  return false;
 }
 let flujoNeto = [];
 for ( let i = 0; i < flujoIngreso.length; i++ ) {
  flujoNeto[i] = (flujoIngreso[i] - flujoEgreso[i])/(Math.pow((1 + interes), i + 1));
 }
 console.log('flujo neto: ', flujoNeto);
 return neto = flujoNeto.reduce( (accum, item) => accum + item, inversionInicial).toFixed(2);
}

console.log(flujoEfectivoNeto(
 [60352.50, 63906.25, 68257.50, 72608.75, 76956.25],
 [43085.00, 43808.26, 46278.59, 48778.11, 51306.50],
 -20848.00, 0.1)
);

// 0.18049105 para conseguir una van de -0.13369177363938434
// 1  17697.72
// 2  16609.91
// 3  16513.08
// 4  16276.65
// 5  15926.48
// T  83023.84
// N  