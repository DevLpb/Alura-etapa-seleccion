// 1. Pregunta al usuario qué día de la semana es. Si la respuesta es "Sábado" o "Domingo", muestra "¡Buen fin de semana!". De lo contrario, muestra "¡Buena semana!".
let dia = prompt("¿Qué día es?");
if(dia == "Sábado" || dia == "Domingo") {
    alert("¡Buen fin de semana!");
} else {
    alert("¡Buena semana!");
}

// 2. Verifica si un número ingresado por el usuario es positivo o negativo. Muestra una alerta informativa.
let numero = prompt("Ingresa un número");
if (numero > 0) {
    alert("Ingresaste un número positivo");
} else if (numero < 0) {
    alert("Ingresaste un número negativo");
} else {
    alert("Ingresaste el número 0");
}

// 3. Crea un sistema de puntuación para un juego. Si la puntuación es mayor o igual a 100, muestra "¡Felicidades, has ganado!". En caso contrario, muestra "Intenta nuevamente para ganar.".
let puntuacion = prompt("Ingresa los puntos acumulados");
if (puntuacion >= 100) {
    alert("¡Felicidades, has ganado!");
} else {
    alert("Intenta nuevamente para ganar.");
}

// 4. Crea un mensaje que informe al usuario sobre el saldo de su cuenta, utilizando un template string para incluir el valor del saldo.
let saldo = 1234
alert(`El saldo de tu cuenta es ${saldo}`);

// 5.Pide al usuario que ingrese su nombre mediante un prompt. Luego, muestra una alerta de bienvenida usando ese nombre.
let nombre = prompt("Ingresa tu nombre");
alert(`Bienvenido/a, ${nombre}.`);