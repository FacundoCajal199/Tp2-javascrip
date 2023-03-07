/*16- Realiza un script que pida una cadena de texto y la devuelva al revés. Es decir, si tecleo “hola que tal” deberá mostrar “lat euq aloh”.
*/

// Pedimos al usuario que introduzca una cadena de texto
const cadena = prompt("Introduce una cadena de texto:");

// Creamos una variable para almacenar la cadena al revés
let cadenaAlReves = "";

// Recorremos cada carácter de la cadena de forma inversa
for(let i = cadena.length - 1; i >= 0; i--) {
  // Agregamos el carácter actual a la cadena al revés
  cadenaAlReves += cadena[i];
}

// Mostramos la cadena al revés en la consola del navegador
alert(cadenaAlReves);