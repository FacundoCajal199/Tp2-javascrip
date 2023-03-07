
/*6- Realiza un script que escriba una pirámide del 1 al 30 de la siguiente forma :

1
22
333
4444
55555
666666
…….
*/
let repeticiones = parseInt(prompt("Ingrese un número del 1 al 30"));

if (repeticiones > 0 && repeticiones <= 30) {
  for (let fila = 1; fila <= repeticiones; fila++) {
    for (let columna = 1; columna <= fila; columna++) {
      document.write(fila);
    }
    document.write("<br>");
  }
} else {
  alert("Ingresaste una opción inválida.");
}