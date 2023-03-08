/*
17- Realiza un script que muestre la posición de la primera vocal de un texto introducido por teclado.
*/



let texto = prompt("Ingrese un texto:");
let vocales = "aeiouAEIOU";

// Buscar la primera vocal en el texto
for (let i = 0; i < texto.length; i++) {
  if (vocales.indexOf(texto[i]) !== -1) {
    alert(`La primera vocal en el texto '${texto}' se encuentra en la posición ${i+1}`);
    break;
  }
}

// Si no se encuentra ninguna vocal en el texto
if (i === texto.length) {
  alert(`No se encontraron vocales en el texto '${texto}'`);
}
