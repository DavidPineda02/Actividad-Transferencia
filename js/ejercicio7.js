// 7. Cálculo de descuento simple
// • Solicita el precio de un producto.
// • Calcula el precio final con un 10% de descuento.

// Solicita el precio del producto y se convierte a número
let precioProduct = parseFloat(prompt("Ingrese el Precio del Producto:"));

// Calcula el precio final con un 10% de descuento
let dto = precioProduct * 0.10;
let precioFinal = precioProduct - dto;

// Muestra el resultado en la consola y en una alerta
console.log(`El precio final con un 10% de descuento es: $${precioFinal}`);
alert(`El precio final con un 10% de descuento es: $${precioFinal}`);