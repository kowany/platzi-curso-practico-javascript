


function flujoEfectivoNeto(flujoIngreso, flujoEgreso, inversionInicial, interes) {

 if (flujoIngreso.length - flujoEgreso.length !== 0) {
  console.log(`La longitud de las listas deben de ser iguales`);
  return false;
 }
 let flujoNeto = [];
 for ( let i = 0; i < flujoIngreso.length; i++ ) {
  flujoNeto[i] = (flujoIngreso[i] - flujoEgreso[i])/(Math.pow((1.1), i + 1));
 }
 console.log('flujo neto: ', flujoNeto);
 return neto = flujoNeto.reduce( (accum, item) => accum + item, inversionInicial);
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