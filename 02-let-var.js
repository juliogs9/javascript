/*
variable (var) se utilizaba anteriormente ,son variables globales  , en este ejemplo es la misma variable solo que al mencionarlo nuevamente cambia su valor

variable (let) es una variable de contexto solo vive en un bloque de codigo

let y var no son lo mismo
*/
var numero = 40;
console.log(numero);

if (true) {
  var numero = 50;
  console.log(numero);
}

console.log(numero);

var texto = "Bootcamp java";
console.log(texto);

if (true) {
  let texto = "Cohorte 8";
  console.log(texto);
  let numfav = 9;
  console.log(numfav);
}

console.log(texto);

/* let es una variable limitada o solo en un bloque de codigo , no se les puede cambiar el valor asignado , en cambio (var) si lo permite solo vive dentro de la condicional o solo dentro de la parte que se esta usando
 */
