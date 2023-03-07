/*14- Realiza un script que pida una cadena de texto y lo muestre poniendo el signo – entre cada carácter sin usar el método replace. Por ejemplo, si tecleo “hola qué tal”, deberá salir “h-o-l-a- -q-u-e- -t-a-l”.
*/
const cadena = prompt("Introduce una cadena de texto:");

// Creamos una variable para almacenar la cadena con los guiones
let cadenaConGuiones = "";

// Recorremos cada carácter de la cadena
for(let i = 0; i < cadena.length; i++) {
  // Agregamos el carácter actual a la cadena con guiones
  cadenaConGuiones += cadena[i];
  
  // Si el carácter actual no es el último de la cadena, agregamos un guión
  if(i !== cadena.length - 1) {
    cadenaConGuiones += "-";
  }
}

// Mostramos la cadena con guiones en la consola del navegador
document.write(cadenaConGuiones);