/* 
Las funciones nos sirven para escribir bloques de codigo que se puede reutilizar
*/

// let numero1 = 18;
// let numero2 = 20;
// let suma = numero1 + numero2;
// document.write("<h1>" + suma + "</h1>");

// let numero3 = 10;
// let numero4 = 30;
// let suma2 = numero3 + numero4;
// document.write("<h1>" + suma2 + "</h1>");

// para evitar poner tantas veces una oporacion o accion se puede ahorrar con una funcion , para no escribir la funcion una y otra vez REUTILIZACION DE CODIGO

function sumar(numero1, numero2) {
  let suma = numero1 + numero2;
  document.write("<h1>" + suma + "</h1>");
}

sumar(10, 10);
sumar(12, 15);
sumar(6, 3);
