/*
17- Realiza un script que muestre la posición de la primera vocal de un texto introducido por teclado.
*/

let texto = prompt("Introduce un texto:");

let primeraVocal = texto.search(/[aeiouAEIOU]/); // Busca la primera vocal en el texto

if (primeraVocal >= 1) { // Si se encontró una vocal
  alert("La primera vocal está en la posición " + primeraVocal);
} else { // Si no se encontró ninguna vocal
  alert("No se encontró ninguna vocal en el texto");
}