//Crear un array vacío, luego generar 10 números al azar y guardarlos en un array.
// Mostrar en consola el resultado del array.

let array = [];

//Generando numeros
for (let i = 0; i < 10; i++) {
    let randomNumber = Math.floor(Math.random()*50);
    array.push(randomNumber);
}
console.log(array);