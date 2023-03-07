
/*5- Realizar una página con un script que calcule el valor de la letra de un número de DNI (Documento nacional de identidad).

El algoritmo para calcular la letra del dni es el siguiente :

El número debe ser entre 0 y 99999999
Debemos calcular el resto de la división entera entre el número y el número 23.
Según el resultado, de 0 a 22, le corresponderá una letra de las siguientes:  (T, R, W, A, G, M, Y, F, P, D, X, B, N, J, Z, S, Q, V, H, L, C, K, E) 
Si lo introducido no es un número deberá indicarse con un alert y volver a preguntar.
Deberá de repetirse el proceso hasta que el usuario pulse «cancelar».*/

function calcularLetraDNI(){
    const dniInput = document.getElementById("dni");
    const dni = dniInput.value;

    // Comprobamos que se ha introducido un número válido
    if(isNaN(dni)) {
      alert("Por favor, introduce un número válido.");
      dniInput.value = "";
      return;
    }

    // Convertimos el número a un valor numérico entero
    const numero = parseInt(dni);

    // Comprobamos que el número está dentro del rango permitido
    if(numero < 0 || numero > 99999999) {
      alert("Por favor, introduce un número entre 0 y 99999999.");
      dniInput.value = "";
      return;
    }

    // Calculamos el resto de la división entre el número y 23
    const resto = numero % 23;

    // Array con las letras correspondientes a cada resto
    const letras = [
      "T", "R", "W", "A", "G", "M", "Y", "F", "P", "D", "X", "B", "N",
      "J", "Z", "S", "Q", "V", "H", "L", "C", "K", "E"
    ];

    // Obtenemos la letra correspondiente al resto
    const letra = letras[resto];

    // Mostramos el resultado al usuario
    const resultado = document.getElementById("resultado");
    resultado.textContent = `La letra correspondiente al número ${numero} es: ${letra}.`;}