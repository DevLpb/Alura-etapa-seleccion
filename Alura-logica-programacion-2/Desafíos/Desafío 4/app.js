// 1. Crea una lista vacía llamada "listaGenerica".
let listaGenerica = [];
console.log(listaGenerica);
// 2. Crea una lista de lenguajes de programación llamada "lenguajesDeProgramacion con los siguientes elementos: 'JavaScript', 'C', 'C++', 'Kotlin' y 'Python'.
let lenguajesDeProgramacion = ["JavaScript", "C", "C++", "Kotlin", "Python"];
// 3. Agrega a la lista "lenguagesDeProgramacion los siguientes elementos: 'Java', 'Ruby' y 'GoLang'.
lenguajesDeProgramacion.push("Java", "Ruby", "GoLang");
// 4. Crea una función que muestre en la consola todos los elementos de la lista "lenguajesDeProgramacion.
function mostrarElementos() {
  console.log(lenguajesDeProgramacion);
}
mostrarElementos();

// 5. Crea una función que muestre en la consola todos los elementos de la lista "lenguajesDeProgramacion en orden inverso.
function mostrarElementosInversos() {
  console.log(lenguajesDeProgramacion.reverse());
}
mostrarElementosInversos();

// 6. Crea una función que calcule el promedio de los elementos en una lista de números.
function calcularPromedio(lista) {
  let suma = 0;
  for (let i = 0; i < lista.length; i++) {
    suma += lista[i];
  }
  return suma / lista.length;
}

let testLista = [1, 3, 5, 8];
let promedio = calcularPromedio(testLista);
console.log(`Promedio: ${promedio}`);

// 7. Crea una función que muestre en la consola el número más grande y el número más pequeño en una lista.
function encontrarMayorMenor(lista) {
    let mayor = lista[0];
    let menor = lista[0];

    for (let i = 1; i < lista.length; i++) {
        if (lista[i] > mayor) {
            mayor = lista[i];
        }
        if (lista[i] < menor) {
            menor = lista[i];
        }
    }
    console.log(`Mayor: ${mayor}`);
    console.log(`Menor: ${menor}`);
}
let numeros = [4, 54, 2, 65, 24, 10];
encontrarMayorMenor(numeros);

// 8. Crea una función que devuelva la suma de todos los elementos en una lista.
function sumarElementos(lista) {
    let sumatoria = 0;
    for (let i = 0; i < lista.length; i++) {
        sumatoria += lista[i];
    }
    return sumatoria;
}
let resultado = sumarElementos(numeros);
console.log(`Suma: ${resultado}`);

// 9. Crea una función que devuelva la posición en la lista donde se encuentra un elemento pasado como parámetro, o -1 si no existe en la lista.
function buscarIndice(lista, elemento) {
    for (let i = 0; i < lista.length; i++) {
        if (lista[i] === elemento) {
            return i;
        } 
    }
    return -1;
}
console.log(buscarIndice(numeros, 65));

// 10. Crea una función que reciba dos listas de números del mismo tamaño y devuelva una nueva lista con la suma de los elementos uno a uno.
function sumarDosListas(lista, lista2) {
    let nuevaLista = [];
    for (let i = 0; i < lista2.length; i++) {
        nuevaLista.push(lista[i] + lista2[i]);
    } 
    return nuevaLista;
}
console.log(sumarDosListas([10, 9, 8, 7, 6, 5], [6, 5, 4, 3, 2, 1]));
// 11. Crea una función que reciba una lista de números y devuelva una nueva lista con el cuadrado de cada número.
function listaAlCuadrado(lista) {
    let listaFinal = [];
    for (let i = 0; i < lista.length; i++) {
        listaFinal.push(lista[i]*lista[i]);
    }
    return listaFinal;
}
console.log(listaAlCuadrado([1, 2, 3, 4, 5]));
