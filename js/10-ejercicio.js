/*10- Realiza un script que pida número de filas y columnas y escriba una tabla. Dentro de cada una de las celdas deberá escribirse un número consecutivo en orden descendente. Si, por ejemplo, la tabla es de 7×5 los números irán del 35 al 1.*/

let numFilas = parseInt(prompt("Ingrese el número de filas"));
let numColumnas = parseInt(prompt("Ingrese el número de columnas"));

let numCeldas = numFilas * numColumnas;

document.write("<table>");

for (let i = 1; i <= numFilas; i++) {
  document.write("<tr>");

  for (let j = 1; j <= numColumnas; j++) {
    document.write("<td>" + numCeldas + "</td>");
    numCeldas--;
  }

  document.write("</tr>"); 
}

document.write("</table>");