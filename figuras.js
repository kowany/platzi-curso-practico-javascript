// Cuadrado

function perimetroCuadrado(lado) {
 return lado*4;
}

function areaCuadrado(lado) {
 return lado*lado;
}

// Triángulo

function perimetroTriangulo(lado1, lado2, base) {
 return (lado1 + lado2 + base);
}

function areaTriangulo(base, altura) {
 return (base*altura) / 2;
}

// Círculo


function diametroCirculo(radio) {
 return radio * 2;
}
function perimetroCirculo(radio) {
 return diametroCirculo(radio) * Math.PI;
}

function areaCirculo(radio) {
 return (radio * radio) * Math.PI;
}

// Aquí interactuamos con el HTML


function calcularPerimetroCuadrado() {
 const value = document.getElementById('InputCuadrado').value;
 alert(perimetroCuadrado(value));
}

function calcularAreaCuadrado() {
 const value = document.getElementById('InputCuadrado').value;
 alert(areaCuadrado(value));

}

// Reto
/*
En este ejercicio debes crear una función para calcular la altura de un triángulo isósceles.

  La función debe recibir, como parámetros, la longitud de los 3 lados del triángulo.
  La función debe validar que la longitud de los 3 lados del triángulo corresponden a un triángulo isósceles.
  La función debe retornar la altura del triángulo.
Pista: la función Math.sqrt de JavaScript puede ayudarte a calcular raíces cuadradas.
*/

function alturaTrianguloIsosceles(ladoA, ladoB, base) {
 if (ladoA !== ladoB) {
  console.log('Las dimensiones del ladoA y ladoB no coinciden');
 } else {
  altura = Math.sqrt((4*ladoA*ladoA)-(base*base))/2
  return altura;
 }
}
