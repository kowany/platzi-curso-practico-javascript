const precioOriginal = 120;
const descuento = 15;

const porcentajePrecioConDescuento = 100 - 85;

const precioConDescuento = (precioOriginal * porcentajePrecioConDescuento) / 100;

function precioAPagar(precio, descuento) {
 return precio * (1 - (descuento / 100));
}

function calculaPrecioConDescuento() {
 const price = document.getElementById('InputPrice').value;
 const discount = document.getElementById('InputDiscount').value;
 const result = document.getElementById('resultPrice');
 result.innerText = `El total a pagar con un descuento de ${discount}% es : $${precioAPagar(price, discount)}`;
 // return 
}

console.log({
 precioOriginal,
 descuento,
 porcentajePrecioConDescuento,
 precioConDescuento
})


