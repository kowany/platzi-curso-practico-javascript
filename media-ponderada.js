// const listNotes = document.querySelector('#InputListNotes');
// const listCredit = document.querySelector('#InputListCredit');

// function listado() {
//  const listaSeparadaNotes = listNotes.value.split(',');
//  console.log(listaSeparadaNotes);
//  const numerosNotes = [];
//  listaSeparadaNotes.forEach(element => {
//   numerosNotes.push(Number(element.trim()));
//  });

//  const listaSeparadaCredit = listNotes.value.split(',');
//  console.log(listaSeparadaCredit);
//  const numerosCredit = [];
//  listaSeparadaCredit.forEach(element => {
//     numerosCredit.push(Number(element.trim()));
//  });
//  console.log(numeros);
//  console.log(calcularModa(numeros));
// }


const myNotes = [
  {
      course: "Asistencia",
      note: 10,
      credit: 2
  },
  {
      course: "Examen final",
      note: 8,
      credit: 5
  },
  {
      course: "Trabajo final",
      note: 7,
      credit: 5
  }
 ];

 /*

 TODO: Revisar las dos listas

 */
mediaPonderada(myNotes);
function mediaPonderada(list) {
 const numerador = list.reduce((accum, item) => accum + item.note * item.credit, 0 );
 console.log(numerador);
 const denominador = list.reduce((accum, item) => accum + item.credit, 0);
 console.log(denominador);
 console.log(`La media ponderada es: ${numerador / denominador}`);
}