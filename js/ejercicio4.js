// 4. Consumo de gasolina
// • Solicita la cantidad de kilómetros recorridos y el consumo por kilómetro
// (litros/km).
// • Calcula los litros totales consumidos.

// Solicita la cantidad de kilómetros recorridos y se convierte a número
let kmRecorridos = parseFloat(prompt("Ingrese la Cantidad de Kilómetros Recorridos:"));

// Solicita el consumo por kilómetro y se convierte a número
let consumoPorKm = parseFloat(prompt("Ingrese el Consumo por Kilómetro (litros/km):"));

// Calcula los litros totales consumidos
let ltsConsumidos = kmRecorridos * consumoPorKm;

// Muestra el resultado en la consola y en una alerta
console.log(`Los litros totales consumidos son: ${ltsConsumidos} litros`);
alert(`Los litros totales consumidos son: ${ltsConsumidos} litros`);