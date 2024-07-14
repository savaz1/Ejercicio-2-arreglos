var array = [10, 40, 30, 20, 15, 5];

// Ordenar el array de menor a mayor
array.sort(function(a, b) {
    return a - b; // Si a es menor que b, retorna un valor negativo, lo que coloca a antes de b
});

// Encontrar el número menor usando Math.min y recorriendo el array
var numeroMenor = Math.min.apply(null, array);

// Encontrar el número mayor usando Math.max y recorriendo el array
var numeroMayor = Math.max.apply(null, array);

// Mostrar los resultados en la consola
console.log("Array ordenado de menor a mayor:", array);
console.log("Número menor:", numeroMenor);
console.log("Número mayor:", numeroMayor);