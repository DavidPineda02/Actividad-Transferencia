// 2. Salario semanal
// • Solicita el número de horas trabajadas y el valor por hora.
// • Calcula el salario semanal.

// Solicita el número de horas trabajadas y se convierte a número
let horasTrabajadas = parseFloat(prompt("Ingrese el Número de Horas Trabajadas en la Semana:"));

// Solicita el valor por hora y se convierte a número
let valorPorHora = parseFloat(prompt("Ingrese el Valor por Hora:"));

// Calcula el salario semanal
let salarioSemanal = horasTrabajadas * valorPorHora;

// Muestra el resultado en la consola y en una alerta
console.log(`El salario semanal es: $${salarioSemanal.toFixed(0)}`);
alert(`El salario semanal es: $${salarioSemanal.toFixed(0)}`);