 const myNotes = [
  {
      course: "Asistencia",
      note: 5,
      weighing: 10
  },
  {
      course: "Examen final",
      note: 8.5,
      weighing: 70
  },
  {
      course: "Trabajo final",
      note: 9.5,
      weighing: 20
  }
 ];


function mediaPonderada(list) {
 return list.reduce((accum, item) => accum + item.note * item.weighing/100, 0 );
}