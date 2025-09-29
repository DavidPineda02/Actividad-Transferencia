// 6. Conversión de minutos a horas y minutos
// • Solicita un número de minutos.
// • Convierte a formato: “X horas y Y minutos”.

// Solicita un número de minutos y se convierte a número
let totalMins = parseInt(prompt("Ingrese la Cantidad de Minutos:"));

// Calcula las horas y los minutos restantes
let horas = totalMins / 60;
let mins = totalMins % 60;

// Muestra el resultado en la consola y en una alerta
console.log(`${totalMins} minutos son: ${Math.floor(horas)} horas y ${mins} minutos`);
alert(`${totalMins} minutos son: ${Math.floor(horas)} horas y ${mins} minutos`);