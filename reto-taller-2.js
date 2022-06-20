const coupons = [
 "JuanDC_es_Batman",
 "pero_no_le_digas_a_nadie",
 "es_un_secreto",
];

var select = document.getElementById("coupon");
coupons.forEach( (coupon, index) => {
  option = document.createElement("option");
  option.value = coupon;
  option.text = coupon;
  select.append(option);
})

function calculaPrecioConDescuentoPorCupon() {
 const price = document.getElementById('InputPrice').value;
 var selectedOption = select.options[select.selectedIndex];
 const coupon = selectedOption.value;
//  const coupon = document.getElementById('InputCoupon').value;
//  const coupon = document.getElementById('InputCoupon').value;
 const result = document.getElementById('resultPrice');
 // const discount = obtenerDescuentoPorCupon(coupon); // Solución # 1
 // const discount = descuentoPorCuponRevisandoQueExisteEnElArray(coupon); //Solución # 2
 // const  discount = descuentoPorCuponUtilizandoArrayDeObjetos(coupon); // Solución # 3
 const  discount = descuentoPorCuponUtilizandoObjetoYDefaultValue(coupon); // Solución # 4
 result.innerText = `El total a pagar con un cupón de ${discount}% de descuento 
                     es : $${precioAPagar(price, discount)}`;
}

function precioAPagar(precio, descuento) {
 return precio * (1 - (descuento / 100));
}
// Solución #1: arrays y switch
function obtenerDescuentoPorCupon(coupon) {
 let descuento;
 switch (coupon) {
  case coupons[0]:
   descuento = 15;
   break;
  
  case coupons[1]:
   descuento = 30
   break;
  case coupons[2]:
   descuento = 25
   break;
 }
 return descuento;
}

// Solución #2: legibilidad, error first y muerte al switch
function descuentoPorCuponRevisandoQueExisteEnElArray(coupon) {
 if (!coupons.includes(coupon)) {
  alert(`El cupón ${coupon} no es válido, intentar con otro, por favor`);
 } else if (coupon === 'JuanDC_es_Batman') {
  descuento = 15;
 } else if (coupon === 'pero_no_le_digas_a_nadie') {
  descuento = 30;
 } else if (coupon === 'es_un_secreto') {
  descuento = 25;
 }

 return descuento;
}

// Solución #3: arrays y condicionales mucho más inteligentes

function descuentoPorCuponUtilizandoArrayDeObjetos(couponValue) {
 console.log(`El valor de couponValue es: ${couponValue}`);
 const cupones = [
  {
      name: "JuanDC_es_Batman",
      discount: 15,
  },
  {
      name: "pero_no_le_digas_a_nadie",
      discount: 30,
  },
  {
      name: "es_un_secreto",
      discount: 25,
  },
 ];
 // const couponValue = 'es_un_secreto';
 const isCouponValueValid = function (coupon) {
  return coupon.name === couponValue;
 };
 
 const userCoupon = cupones.find(isCouponValueValid);
 
 if (!userCoupon) {
  alert(`El cupón ${couponValue} no es válido`);
  return;
 }

 return userCoupon.discount;
}

// Solución #4: utilizando objeto y un valor por defecto

function descuentoPorCuponUtilizandoObjetoYDefaultValue(couponValue) {
 const DISCOUNT_COUPONS = {
   'JuanDC_es_Batman': 15,
   'pero_no_le_digas_a_nadie': 30,
   'es_un_secreto': 25
 }
 
 const DEFAULT_DISCOUNT = 0;
 
 return DISCOUNT_COUPONS[couponValue] || DEFAULT_DISCOUNT;

} 
