/*
8- Crea script para generar pirámide siguiente con los números del 1 al número que indique el usuario (no mayor de 50) 

1
12
123
1234
12345
123456
……
*/

let num = parseInt(prompt("Ingrese un número del 1 al 50"));

if (num > 0 && num <= 50){
  for (let i = 1; i <= num; i++) {
    let cadena = "";
    for (let j = 1; j <= i; j++) {
      cadena += j;
    }
    document.write(cadena + "<br>");
  }
} else {
  alert("Ingresaste un número inválido");
}