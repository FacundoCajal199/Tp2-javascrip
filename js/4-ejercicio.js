/*4- Realiza un script que pida números hasta que se pulse “cancelar”. Si no es un número deberá indicarse con un «alert» y seguir pidiendo números. Al salir con “cancelar” deberá indicarse la suma total de los números introducidos.
*/
// Creamos una variable para almacenar la suma total de los números
let suma = 0;

// Pedimos al usuario que introduzca un número o pulse "cancelar"
while(true) {
  const numero = prompt("Introduce un número:");

  // Si el usuario pulsa "cancelar", salimos del bucle
  if(numero === null) {
    break;
  }

  // Convertimos el número a un valor numérico
  const valorNumerico = Number(numero);

  // Si el valor numérico es NaN, mostramos un mensaje de error y continuamos el bucle
  if(isNaN(valorNumerico)) {
    alert("No has introducido un número válido.");
    continue;
  }

  // Sumamos el valor numérico a la suma total
  suma += valorNumerico;
}

// Mostramos la suma total de los números introducidos
alert(`La suma total de los números introducidos es ${suma}.`);