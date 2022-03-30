
let header = "hola"+"mundo";

document.write("hello" + header);

/* //EJERCICIO INICIALES
//preguntando nombre y apellido
let name = prompt("Cual es tu nombre y apellido?");

//obteniendo primera inicial
let firstInitial = name.slice("0,1");

//Buscando posicion del segundo caracter
let secondInitialPosition = name.indexOf("") +1;

//obteniendo segunda inicial
let secondInitial = name.slice(secondInitialPosition,secondInitialPosition+1);

console.log(firstInitial+secondInitial);

//mostrando resultado en la wew
document.write("tus iniciales son " + firstInitial.toUpperCase() + secondInitial.toUpperCase()); */




/* //EJERCICIO PERDIDAS Y GANANCIAS
//ingresos

let income = prompt("Cuanto es el ingreso?");

//costo
let costs = prompt("Cual es el costo?");

//porcentaje de impuesto
let taxPercent = prompt("Cuanto es el porcentaje(%) de impuestos?");

//Ganancia bruta
let grossProfit = income-costs;

//obteniedo cantidad de impuestos
let tax = grossProfit*taxPercent/100;

//Ganancia neta
let netIncome = grossProfit-tax;

//mostrando ganancia neta en documento
document.write("Tu gancia neta es $ " + netIncome); */






/* //EJERCICIO TEMPERATURA DE °C A °F
//Preguntar la temperatura en grados celsius

let temperature = parseInt(prompt("¿Cual es la temperatura en celsius?"));

//convertir la temperatura de celsius a farhenheit

let converToFarhenheit = (temperature*1.8) + 32;

//mostrar resultado en la consola

console.log("La temperatura en farhenheit es " + converToFarhenheit);
 */





/* //EJERCICIO EDAD EN SEGUNDOS
let age = parseInt(prompt("¿Cual es tu edad?"));

// Convirtiendo edad a segundos
let ageInSeconds = age*365*24*60*60;

console.log(ageInSeconds);

//mostrando edad en la web

document.write("Tu edad es "+ age + " Y en segundos "+ ageInSeconds);
 */
