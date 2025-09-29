// 5. Tiempo de viaje
// • Solicita la distancia de un recorrido (km) y la velocidad promedio (km/h).
// • Calcula el tiempo estimado del viaje en horas.

// Solicita la distancia del recorrido y se convierte a número
let distancia = parseFloat(prompt("Ingrese la Distancia del Recorrido (km):"));

// Solicita la velocidad promedio y se convierte a número
let velocidad = parseFloat(prompt("Ingrese la Velocidad Promedio (km/h):"));

// Calcula el tiempo estimado del viaje en horas
let tiempoViaje = distancia / velocidad;

// Muestra el resultado en la consola y en una alerta
console.log(`El tiempo estimado del viaje es: ${tiempoViaje} horas`);
alert(`El tiempo estimado del viaje es: ${tiempoViaje} horas`);