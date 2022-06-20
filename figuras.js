var select = document.getElementById("figura");
const label = document.querySelector("#labelFigura");
const $triangulo = document.querySelector("#triangulo");
const $cuadradoCirculo = document.querySelector("#cuadradoCirculo");
select.selectedIndex = "0";;
$triangulo.style.display = "none";
document.getElementById("triangulo").style.display = "none";

select.addEventListener("change", function () {
  var selectedOption = this.options[select.selectedIndex];
  var h2 = document.getElementById("h2");
  h2.textContent = `Calcula el área y perímetro de un ${selectedOption.text}`;
  switch (selectedOption.value) {
    case "cuadrado":
      label.textContent = `Escribe cuánto mide cada lado de tu ${selectedOption.text}`;
      break;
    case "circulo":
      label.textContent = `Escribe cuánto mide el radio de tu ${selectedOption.text}`;
      $cuadradoCirculo.style.display = "block";
      $triangulo.style.display = "none";
      break;
    case "triangulo":
      $cuadradoCirculo.style.display = "none";
      $triangulo.style.display = "block";
      label.textContent = `Escribe cuánto mide cada lado de tu ${selectedOption.text}`;
      break;
    default:
      alert("No has seleccionado una figura");
      break;
  }
});

// Cuadrado

function perimetroCuadrado(lado) {
  return `El perímetro del cuadrado es: ${lado * 4} cms.`;
}

function areaCuadrado(lado) {
  return `El área del cuadrado es: ${lado * lado} cms²`;
}

// Triángulo

function perimetroTriangulo(lado1, lado2, base) {
  return `${lado1 + lado2 + base} cms.`;
}

function areaTriangulo(base, altura) {
  return `${(base * altura) / 2} cms²`;
}

// Círculo

function diametroCirculo(radio) {
  return `${radio * 2}`;
}
function perimetroCirculo(radio) {
  return Number(`${diametroCirculo(radio) * Math.PI}`).toFixed(2) + " cms.";
}

function areaCirculo(radio) {
  return Number(`${radio * radio * Math.PI}`).toFixed(2) + " cms²";
}

// Aquí interactuamos con el HTML

function calcularPerimetroCuadrado() {
  var selectedOption = select.options[select.selectedIndex];
  const value = document.getElementById("inputFigura").value;

  switch (selectedOption.value) {
    case 'cuadrado':
      alert(perimetroCuadrado(value));
      break;
    case 'circulo':
      alert(perimetroCirculo(value));
      break;
  }
}

function calcularAreaCuadrado() {
  var selectedOption = select.options[select.selectedIndex];
  const valor = document.getElementById("inputFigura").value;

  switch (selectedOption.value) {
    case 'cuadrado':
      alert(areaCuadrado(valor));
      break;
    case 'circulo':
      alert(areaCirculo(valor));
      break;
  }
}

// Reto
/*
En este ejercicio debes crear una función para calcular la altura de un triángulo isósceles.

  La función debe recibir, como parámetros, la longitud de los 3 lados del triángulo.
  La función debe validar que la longitud de los 3 lados del triángulo corresponden a un triángulo isósceles.
  La función debe retornar la altura del triángulo.
Pista: la función Math.sqrt de JavaScript puede ayudarte a calcular raíces cuadradas.
*/

function calcularAlturaTrianguloIsosceles() {
  const {ladoA, ladoB, base} = recuperaValoresInput();
  if (ladoA !== ladoB) {
    console.log("Las dimensiones del ladoA y ladoB no coinciden");
  } else {
    altura = Math.sqrt(ladoA * ladoA - base * base);
    alert(`La altura del triángulo isósceles es: ${altura} cms.`);
  }
}

function calcularPerimetroTrianguloIsosceles() {
  const {ladoA, ladoB, base} = recuperaValoresInput();
  const perimetro = Number(ladoA) + Number(ladoB) + Number(base);
  alert(`El perímetro del triángulo isósceles es: ${perimetro} cms.`);
}
function calcularAreaTrianguloIsosceles() {
  const {ladoA, ladoB, base} = recuperaValoresInput();
  const altura = Math.sqrt(ladoA * ladoB - base * base);
  alert(`Area del triángulo isósceles es : ${(base * altura) / 2} cms²`);
}

function recuperaValoresInput() {
  const ladoA = document.getElementById("inputLado1").value;
  const ladoB = document.getElementById("inputLado2").value;
  const base = document.getElementById("inputBase").value;
  return {ladoA,ladoB, base};
}