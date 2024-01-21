// 1. Crea un contador que comience en 1 y vaya hasta 10 usando un bucle 'while'. Muestra cada número.
let contadorUno = 1;
while (contadorUno <= 10) {
    console.log(contadorUno);
    contadorUno++;
}

// 2. Crea un contador que comience en 10 y vaya hasta 0 usando un bucle 'while'. Muestra cada número.
let contadorDos = 10;
while (contadorDos >= 0) {
    console.log(contadorDos);
    contadorDos--;
}
// 3. Crea un programa de cuenta regresiva. Pide un número y cuenta desde ese número hasta 0 utilizando un bucle 'while' en la consola del navegador.
let cuentaRegresiva = prompt("Ingresa un número para iniciar la cuenta regresiva");
while (cuentaRegresiva >= 0) {
    console.log(`Cuenta regresiva: ${cuentaRegresiva}`);
    cuentaRegresiva--;
}

// 4. Crea un programa de cuenta progresiva. Pide un número y cuenta desde 0 hasta ese número utilizando un bucle 'while' en la consola del navegador.
let numeroMaximo = prompt("Ingresa un número para iniciar la cuenta progresiva");
let cuentaProgresiva = 0;
while (cuentaProgresiva <= numeroMaximo) {
    console.log(`Cuenta progresiva: ${cuentaProgresiva}`);
    cuentaProgresiva++;
}