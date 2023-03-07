
/*7- Haz un script que escriba una pirámide inversa de los números del 1 al número que indique el usuario (no mayor de 50)  de la siguiente forma : (suponiendo que indica 30).

303030303030303030303030303030303030303030303030303030303030
2929292929292929292929292929292929292929292929292929292929
28282828282828282828282828282828282828282828282828282828
…..
333
22
1
*/

let repeticiones = parseInt(prompt("ingrese un numero del uno al 50"))

if (repeticiones >0 && repeticiones <=50){
for (let fila = repeticiones; fila >=1; fila--){
    for (let columna = fila; columna >=1; columna --){
        document.write(fila)
    }
   
        document.write("<br>")
    
}
}else{
    alert("ingresaste una opcion invalida")
}
