
/*3- Realiza un script que pida cadenas de texto hasta que se pulse “cancelar”. Al salir con “cancelar” deben mostrarse todas las cadenas concatenadas con un guión -.

Nota: usar confirm() https://www.w3schools.com/jsref/met_win_confirm.asp*/
let contador = 1;

confirm("")
while(contador <= 19){ // <=10
    document.write('Este es el parafo N' + (contador +1)+('-'));
 contador++;//contador = contador +1//contador= contador +2; o contador +=2
}

