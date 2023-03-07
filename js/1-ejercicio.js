/*
1- Escribir un programa que solicite la edad y si es mayor de 18 años mostrar un mensaje que ya puede conducir, si la edad ingresada no es un número válido indicarlo en un mensaje.
*/
 
 edad = prompt ("Escriba su edad")

 if(!isNaN(edad) == true ){
 if(edad >=18  && edad <=50){
alert("Puedes conducir")
 }else{
alert("no puedes conducir")
 }
 }else{
    alert("el contenido ingresado no es un numero valido")
 }
//con limite de edad y letras
 