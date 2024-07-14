
//Crear un arreglo
let nombres = []; // Arreglo vacio console.log(nombres)
// Posiciones empezando a contar de e
let frutas = ['Lulo', 'Maracuya', 'Mandarina', 'Pera'] 
console.log(frutas);
//Podemos acceder indivualmente mendiante el indice
console.log(frutas[1]);
console.log(frutas[3]);
//Modificar un valor de un arreglo frutas[2] = "Uvas"; // Cambiamos el valor
console.log(frutas)
//Nos devuelve el numero total de elementos console.log(frutas.length)
//PUSH Agregamos items al final de una lista nombres.push("Sebastian")
nombres.push("Diego")
nombres.push("Fernanda")
nombres.push("America")
console.log(nombres)
//POP Eliminar el ultimo item
nombres.pop();
console.log(nombres)
// UNSHIFT Agrega un item al inicio
frutas.unshift("Aguacate")
frutas.unshift("Cereza")
frutas.unshift("Naranja")
console.log(frutas)
//SHIFT Elimina el item al principio de La Lista
frutas.shift();
console.log(frutas);