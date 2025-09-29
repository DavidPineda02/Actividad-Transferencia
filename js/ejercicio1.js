// 1. Factura de compra simple
// • Solicita el nombre de un producto, su precio y la cantidad comprada.
// • Calcula el total a pagar.
// • Muestra: "El total a pagar por [cantidad] [producto] es: [total]".

// Se solicita el nombre del producto
let producto = prompt("Ingrese el Nombre del Producto:");

// Se solicita el precio del producto y se convierte a número
let precio = parseFloat(prompt("Ingrese el Precio del Producto:"));

// Se solicita la cantidad comprada y se convierte a número
let cantidad = parseInt(prompt("Ingrese la Cantidad Comprada:"));

// Se calcula el total a pagar
let total = precio * cantidad;

// Se muestra el resultado en la consola y en una alerta
console.log(`El total a pagar por ${cantidad} ${producto}(s) es: $${total.toFixed(0)}`);
alert(`El total a pagar por ${cantidad} ${producto}(s) es: $${total.toFixed(0)}`);