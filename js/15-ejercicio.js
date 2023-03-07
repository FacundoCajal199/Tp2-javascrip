/*15- Realiza un script que cuente el número de vocales que tiene un texto.
*/// Pedimos al usuario que introduzca un texto
const texto = prompt("Introduce un texto:");

// Convertimos el texto a minúsculas para facilitar la búsqueda de vocales
const textoMinusculas = texto.toLowerCase();

// Creamos un contador para las vocales
let contadorVocales = 0;

// Recorremos cada carácter del texto
for(let i = 0; i < textoMinusculas.length; i++) {
  // Si el carácter actual es una vocal, incrementamos el contador de vocales
  if(textoMinusculas[i] === "a" || textoMinusculas[i] === "e" || textoMinusculas[i] === "i" || textoMinusculas[i] === "o" || textoMinusculas[i] === "u") {
    contadorVocales++;
  }
}

// Mostramos el número de vocales en el texto en la consola del navegador
alert(`El texto tiene ${contadorVocales} vocales.`);