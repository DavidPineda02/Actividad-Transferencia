// 3. Promedio de edad en un grupo
// • Solicita las edades de 4 personas.
// • Calcula el promedio de edad.

// Solicita las edades de 4 personas y se convierten a números
let edad1 = parseInt(prompt("Ingrese la Edad de la Persona 1:"));
let edad2 = parseInt(prompt("Ingrese la Edad de la Persona 2:"));
let edad3 = parseInt(prompt("Ingrese la Edad de la Persona 3:"));
let edad4 = parseInt(prompt("Ingrese la Edad de la Persona 4:"));

// Calcula el promedio de edad
let promedioEdad = (edad1 + edad2 + edad3 + edad4) / 4;

// Muestra el resultado en la consola y en una alerta
console.log(`El promedio de edad en el grupo es: ${promedioEdad} años`);
alert(`El promedio de edad en el grupo es: ${promedioEdad} años`);