//Ejercicio 1 (Realizar un programa que dado 2 números imprima por consola si el primer numero es mayor que el segundo.)

// let respuesta1 = parseInt(prompt("Introduzca un numero"));
// let respuesta2 = parseInt(prompt("Introduzca otro numero"));

// if (respuesta1 > respuesta2) {
//     console.log("El primer numero es mayor al segundo");
// } else {
//     console.log("El segundo numero es mayor al primero");
// }

//Ejercicio 2 (Realizar un programa que dado 2 números imprima por consola si los numeros son iguales o si son diferentes.)

// let respuesta1 = prompt("Introduzca un numero");
// let respuesta2 = prompt("Introduzca otro numero");

// let numero1 = parseInt(respuesta1);
// let numero2 = parseInt(respuesta2);

// if (numero1 === numero2) {
//     console.log("Ambos numeros son iguales");
// } else {
//     console.log("Los numeros son diferentes");
// }

//Ejercicio 3 (Realizar un programa que dado 2 números imprima por consola cual de los 2 numeros es el mas grande o si son iguales.)

// let respuesta1 = prompt("Introduzca un numero");
// let respuesta2 = prompt("Introduzca otro numero");

// let numero1 = parseInt(respuesta1);
// let numero2 = parseInt(respuesta2);

// if (numero1 > numero2) {
//     console.log("El primer numero es mayor al segundo");
// } else if (numero1 < numero2){
//     console.log("El segundo numero es mayor al primero");
// }else{
//     console.log("Ambos numeros son iguales");
// }


//Ejercicio 4 (Realizar un programa que dado 3 números imprima por pantalla cual de los 3 es el mas chico.)

// let respuesta1 = prompt("Introduzca un numero");
// let respuesta2 = prompt("Introduzca otro numero");

// let numero1 = parseInt(respuesta1);
// let numero2 = parseInt(respuesta2);

// if (numero1 > numero2) {
//     console.log("El primer numero es mayor al segundo");
// } else if (numero1 < numero2){
//     console.log("El segundo numero es mayor al primero");
// }else{
//     console.log("Ambos numeros son iguales");
// }

//Ejercicio 5 (Realizar un programa que dado 2 objetos representando personas con las propiedades nombre, edad y altura imprima por pantalla cual de las 2 personas es la mas alta y cual es la de mayor edad.)

// const persona1 = {
//     nombre: "Guillermo",
//     edad: 23,
//     altura: 187
// }

// const persona2 = {
//     nombre: "Natalie",
//     edad: 22,
//     altura: 157
// }

// switch (persona1.altura > persona2.altura) {
//     case true:
//         console.log(persona1.nombre + " Es mas alto/a que " + persona2.nombre);
//         break;
//     case false:
//         console.log(persona2.nombre + " Es mas alto/a que " + persona1.nombre);
//         break;
// }

// switch (persona1.edad > persona2.edad) {
//     case true:
//         console.log(persona1.nombre + " Es mayor que " + persona2.nombre);
//         break;
//     case false:
//         console.log(persona2.nombre + " Es mayor que " + persona1.nombre);
//         break;
// }

//Ejercicio 6 (Realizar un programa que permita ingresar por pantalla tu nombre, edad, altura, visión y permita determinar si estas capacitado para conducir. La persona deberá cumplir con una edad mínima de 18 años, medir mas de 150cm y tener una visión de 8 de 10 como mínimo.)

// let nombre = prompt("Ingresa tu nombre");
// let edad = prompt("Ingresa tu edad");
// let altura = prompt("Ingresa tu altura en cm");
// let vision = prompt("Ingrese su vision en un rango de 1 al 10")

// if (edad >= 18 && altura > 150 && vision > 7){
//     console.log(nombre + " esta capacitado para conducir")
// } else {
//     console.log(nombre + " no esta capacitado para conducir")
// }

//Ejercicio 7 (Realizar un programa que permita el ingreso de los siguientes datos: Nombre, pase (vip o normal), si posee entrada (si o no, s o n, true o false). Las personas que posean tu mismo nombre tienen ingreso libre así como también los que posean un pase vip, mostrar un mensaje de bienvenida. Si posee entrada preguntar si desea utilizarla, en caso afirmativo mostrar mismo mensaje de bienvenida. Y por ultimo de no tener el mismo nombre o poseer un pase vip o entrada, preguntar si desea comprar, caso afirmativo solicitar dinero disponible, si posee $1000 o mas, mostrar mensaje de venta de entrada y bienvenida, caso contrario mostrar mensaje de rechazo de venta, y en caso contrario a no querer comprar, mostrar mensaje de despedida.)

// const persona = prompt ("¿Cual es tu nombre?");
// const pase= prompt ("¿Que tipo de pase tenes? vip/normal");
// const entrada = prompt ("¿Tenes entrada?");

// if("natalie" === persona || pase === "vip" || entrada === "si"){
//     alert("Bienvenido al evento");
//  } else {
//     const compra = prompt("¿Desea comprar una entrada? si/no");
//     if(compra === "si"){
//         const saldo = parseInt(prompt("Ingrese su dinero disponible"));
//         if(saldo >= 1000){
//             alert("La compra se realizo con exito, Bienvenido al evento");
//         }else{
//             alert("Saldo insuficiente");
//         }
//     } else {
//         alert("Hasta luego");
//     }
// }


//Ejercicio 8 (Realizar un juego de adivinanza estableciendo un valor entre 1 y 10 en una variable llamada numeroIncognita y que permita en 3 intentos adivinar el numero. El usuario deberá ingresar un numero del 1 al 10 por pantalla en 3 intentos el cual se deberá guardar en una variable llamada numeroIngresado, y en cada intento deberás mostrarle un mensaje al usuario diciendo: “el numero ingresado es mayor, vuelve a intentarlo” o “el numero ingresado es menor, vuelve a intentarlo” o en caso de adivinar, un mensaje que diga: “Ganaste, haz adivinado el numero.” No te preocupes si usas mucho código repetido, mas adelante veraz como realizar este juego de manera mas eficiente.)

// let numeroIncognita = 3;
// alert("Adivina el numero, tienes 3 intentos")

// for (contador = 3; contador > 0; contador -= 1) {
//     let numeroIngresado = parseInt(prompt("Ingrese un numero del 1 al 10"));
//     if (numeroIngresado > numeroIncognita) {
//         alert("el numero " + numeroIngresado + " es mayor al numero a adivinar");

//     } else if (numeroIngresado < numeroIncognita) {
//         alert("el numero " + numeroIngresado + " es menor al numero a adivinar");

//     } else {
//         alert("Ganaste, haz adivinado el numero");
//         break;
//     }
// }

//Ejercicio 9 (Crear un programa que permita ingresar tu edad y decir si eres un infante (0 a 12 años), adolescente(13 a 18 años), un mayor joven (19 a 45 años) o un anciano (mas de 45 años), y en caso de ingresar una edad mayor a 100 mostrar un mensaje preguntando si en realidad tiene esa edad.)

// let edadIngresada = parseInt(prompt("Ingresa tu edad"));

// if (edadIngresada > 0 && edadIngresada <= 12) {
//     alert("infante");
// } else if (edadIngresada >= 13 && edadIngresada <= 18) {
//     alert("adolescente");
// } else if (edadIngresada >= 19 && edadIngresada <= 45) {
//     alert("mayor joven");
// } else if (edadIngresada >= 46 && edadIngresada < 100) {
//     alert("anciana");
// }else {
//     alert("¿Realmente tienes esa edad?");
// }


//Ejercicio 10 (Crear un programa que permita el ingreso de “PIEDRA”, “PAPEL” o “TIJERAS” a 2 jugadores y muestre en pantalla cual de los 2 ha ganado o si han empatado. En caso de algún ingreso incorrecto mostrar por pantalla que uno de los jugadores ha hecho trampa.)

// let jugador1 = prompt("jugador 1 elije, piedra/papel/tijera");
// let jugador2 = prompt("jugador 2 elije, piedra/papel/tijera");

// if ((jugador1 === "piedra" && jugador2 === "tijera") || (jugador1 === "papel" && jugador2 === "piedra") || (jugador1 === "tijera" && jugador2 === "papel")) {
//     alert("Jugador 1 ha ganado");
// } else if ((jugador2 === "piedra" && jugador1 === "tijera") || (jugador2 === "papel" && jugador1 === "piedra") || (jugador2 === "tijera" && jugador1 === "papel")) {
//     alert("Jugador 2 ha ganado");
// } else {
//     alert("Hicieron trampa");
// }




//Ejercicio 11 (Realizar un programa que permita el ingreso de un color y utilizando “switch” mostrar por pantalla los siguientes mensajes según las opciones: Blanco o Negro: Falta de color, Verde: El color de la naturaleza, Azul: El color del agua, Amarillo: El color del sol, Rojo: El color del fuego, Marrón: el color de la tierra, y para cualquier otro valor: Excelente elección, no lo teníamos pensado.)

// let color = prompt("Ingresa un color");
// switch (color) {
//     case ("blanco" || "negro"):
//         alert("Falta de color");
//         break;
//     case ("verde"):
//         alert("El color de la naturaleza");
//         break;
//     case ("azul"):
//         alert("El color del agua");
//         break;
//     case ("amarillo"):
//         alert("El color del sol");
//         break;
//     case ("rojo"):
//         alert("El color del fuego");
//         break;
//     case ("marron"):
//         alert("el color de la tierra");
//         break;
//     default:
//         alert("Excelente elección, no lo teníamos pensado");
//         break;
// }

//Ejercicio 12 (Realizar un programa que permita el ingreso de 2 valores numéricos y una operación. Según sea la operación ingresada (suma, resta, multiplicación, división) el programa deberá mostrar en pantalla un mensaje junto con el resultado. En caso de haber elegido división realizar la operación siempre que sea posible o mostrar un mensaje de ERROR si el divisor ingresado fue 0.)

// alert("Calculadora de dos numeros");
// let num1 = parseInt(prompt("Ingresa el primer numero"));
// let num2 = parseInt(prompt("Ingresa el segundo numero"));
// let operacion = prompt("Eligue que operacion quiere realizar (+,-,*,/)");

// switch (operacion) {
//     case "+":
//         alert("Resultado: " + (num1 + num2));
//         break;
//     case "-":
//         alert("Resultado: " + (num1 - num2));
//         break;
//     case "*":
//         alert("Resultado: " + (num1 * num2));
//         break;
//     case "/":
//         if (num2 === 0) {
//             alert("ERROR el numero no se puede dividir por 0")
//         } else {
//             alert("Resultado: " + (num1 / num2));
//         }
//         break;
// }



//Ejercicio 13 (Crear un programa que permita ingresar todos los datos de tu documento nacional de identidad, mostrar por pantalla un mensaje que imprima todos los datos ingresados y pregunte si están correctos los mismos. En caso afirmativo, crear un objeto llamado dni con todos los datos ingresados y mostrarlos por consola con console.table() mas un mensaje de registro exitoso, en caso de que la persona rechace confirmar los datos, mostrar un mensaje que diga: vuelva a intentarlo en 1 mes.)

// let nombreDni = prompt("Ingrese su nombre como figura en su DNI");
// let datosDni = prompt("Ingrese su numero de DNI");
// let esCorrecto = prompt("El nombre ingresado es: " + nombreDni + " El DNI ingresado es: " + datosDni + " ¿Es correcto? si/no");

// if (esCorrecto === "si") {
//     const dni = {
//         nombre: nombreDni,
//         numero: datosDni
//     }
//     console.table(dni);
//     console.log("Registro exitoso");
// } else {
//     alert("vuelva a intentarlo en 1 mes");
// }