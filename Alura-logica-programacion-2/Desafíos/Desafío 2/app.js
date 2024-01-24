// 1. Crear una función que muestre "¡Hola, mundo!" en la consola.
function saludoEnConsola() {
    console.log("¡Hola, Mundo!");
}
saludoEnConsola();

// 2. Crear una función que reciba un nombre como parámetro y muestre "¡Hola, [nombre]!" en la consola.
function saludoConNombre(nombre) {
    console.log(`¡Hola, ${nombre}!`);
}
saludoConNombre("Antonio");

// 3. Crear una función que reciba un número como parámetro y devuelva el doble de ese número.
function doblar(num) {
    return num * 2;
}
let doble =  doblar(5);
console.log(doble);

// 4. Crear una función que reciba tres números como parámetros y devuelva su promedio.
function promediar(num, num2, num3) {
    return (num + num2 + num3) / 3;
}
let promedio = promediar(1, 2, 3);
console.log(promedio);

// 5. Crear una función que reciba dos números como parámetros y devuelva el mayor de ellos.
function numeroMayor(num, num2) {
    return num > num2 ? num : num2;
}
let mayor = numeroMayor(3, 7);
console.log(mayor);

// 6. Crear una función que reciba un número como parámetro y devuelva el resultado de multiplicar ese número por sí mismo.
function numeroMultiplicado(num) {
    return num * num;
}
let resultado = numeroMultiplicado(8);
console.log(resultado);