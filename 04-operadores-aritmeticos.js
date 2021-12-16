/*
operadores aritmeticos nos sirven para hacer operaciones

    + sirve para sumar o concatenar
    - sirve para restar numeros
    * sirve para multiplicar 2 numeros 
    % modulo nos sirve para obtener el residuo de una division 
    / division nos sirve para dividir

*/
// (parseInt) convierte los datos a numeros es necesario ya que el signo de suma(+) solo concatena y no hace la operacion javascript hace cosas raras =)

// let numero1 = parseInt(prompt("ingresa el numero 1"));
// let numero2 = parseInt(prompt("ingresa el numero 2"));

// console.log(numero1 + numero2);

const nume1 = parseInt(prompt("ingresa un numero"));
const nume2 = parseInt(prompt("ingresa otro numero"));

const suma = nume1 + nume2;
const resta = nume1 - nume2;
const division = nume1 / nume2;
const multiplicacion = nume1 * nume2;

console.log("Numero 1:  " + nume1);
console.log("Numero 2:  " + nume2);
console.log("Suma  " + suma);
console.log("Resta  " + resta);
console.log("Division  " + division);
console.log("Multiplicacion " + multiplicacion);
