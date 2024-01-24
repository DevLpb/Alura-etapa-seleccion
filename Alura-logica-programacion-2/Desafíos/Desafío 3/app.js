// 1. Crea una función que calcule el índice de masa corporal (IMC) de una persona a partir de su altura en metros y peso en kilogramos, que se recibirán como parámetros.
function calcularIMC(altura, peso) {
  let calculoImc = peso / (altura * altura);
  return calculoImc;
}
let imc = calcularIMC(1.76, 70);
console.log(imc);

// 2. Crea una función que calcule el valor del factorial de un número pasado como parámetro.
function calcularFactorial(numero) {
  if (numero === 0 || numero === 1) {
    return 1;
  } else {
    return numero * calcularFactorial(numero - 1);
  }
}
let numero = 5;
let resultado = calcularFactorial(numero);
console.log(`El factorial de ${numero} es ${resultado}`);

// 3. Crea una función que convierta un valor en dólares, pasado como parámetro, y devuelva el valor equivalente en pesos.
function convertirDolares(dolar) {
  let cotizacionDolar = 1000;
  let pesos = dolar * cotizacionDolar;
  return pesos;
}
let valorDolar = 50;
let valorPesos = convertirDolares(valorDolar);
console.log(`${valorDolar} dólares son ${valorPesos}`);

// 4. Crea una función que muestre en pantalla el área y el perímetro de una sala rectangular, utilizando la altura y la anchura que se proporcionarán como parámetros.
function calcularAreaYPerimetroRectangular(altura, anchura) {
  let area = altura * anchura;
  let perimetro = 2 * (altura + anchura);
  console.log("Área: " + area);
  console.log("Perímetro: " + perimetro);
}
let altura = 50;
let anchura = 20;
calcularAreaYPerimetroRectangular(altura, anchura);

// 5. Crea una función que muestre en pantalla el área y el perímetro de una sala circular, utilizando su radio que se proporcionará como parámetro. Considera Pi = 3,14.
function calcularAreaYPerimetroCircular(radio) {
  const pi = 3.14;
  let area = pi * radio * radio;
  let perimetro = 2 * pi * radio;
  console.log("Área: " + area);
  console.log("Perímetro: " + perimetro);
}
let radio = 50;
calcularAreaYPerimetroCircular(radio);

// 6. Crea una función que muestre en pantalla la tabla de multiplicar de un número dado como parámetro.
function tablaDeMultiplicar(numero) {
    for (let i = 1; i <= 10; i++) {
        let resultado = numero * i;
        console.log(numero + " x " + i + " = " + resultado);
    }
}
let num = 2;
tablaDeMultiplicar(num);
