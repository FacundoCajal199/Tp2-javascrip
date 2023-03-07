/*11- Realiza un script que pida por teclado 3 edades y 3 nombres e indique el nombre del mayor. 

Nota: ver funcion Math() https://www.w3schools.com/js/js_math.asp*/
let nombre1 = prompt("Ingrese el primer nombre:");
let edad1 = parseInt(prompt("Ingrese la primera edad:"));

let nombre2 = prompt("Ingrese el segundo nombre:");
let edad2 = parseInt(prompt("Ingrese la segunda edad:"));

let nombre3 = prompt("Ingrese el tercer nombre:");
let edad3 = parseInt(prompt("Ingrese la tercera edad:"));

let mayor;

if (edad1 > edad2 && edad1 > edad3) {
  mayor = nombre1;
} else if (edad2 > edad1 && edad2 > edad3) {
  mayor = nombre2;
} else {
  mayor = nombre3;
}

document.write("La persona de mayor edad es: " + mayor);