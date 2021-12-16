/* 
Condicionales se utilizan para tomar decisiones dentro de nuestro programa
ejemplo si tal dato del usuario es correcto entonces se lleva acabo la accion, si la condicion no se cumple entonces no se ejecuta la accion  
*/

// (document.write) permite escribir en html o en la pagina web

let edad = parseInt(prompt("Ingresa tu edad"));

if (edad >= 18 && edad < 29) {
  document.write("Eres un joven");
} else if (edad >= 30 && edad < 60) {
  document.write("Eres un adulto");
} else if (edad >= 60 edad < 100) {
  document.write("Eres un adulto mayor");
} else{
  document.write("Eres un niño");
}
 