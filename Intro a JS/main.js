// Ejercicio 1 (Crear una variable llamada miNombre y guardar en ella su primer nombre)

// let miNombre = prompt("Introduzca su nombre");

// Ejercicio 2 (Crear una variable llamada miApellido y guardar en ella su apellido)

// let miApellido = prompt("Introduzca su apellido");

// Ejercicio 3 (Crear una variable llamada miEdad y guardar en ella su edad)

// let miEdad = prompt("Introduzca su Edad");

// Ejercicio 4 (Crear una variable llamada miMascota y guardar en ella el nombre de su mascota)

// let miMascota = prompt("Introduzca el nombre de su mascota");

// Ejercicio 5 (Crear una variable llamada edadMascota y guardar en ella la edad de la mascota)

// let edadMascota = prompt("Introduzca la edad de su mascota");

// Ejercicio 6 (Visualizar todas las variables dentro de la consola del navegador escribiendo el nombre de cada una de ellas)

// console.log(miNombre);
// console.log(miApellido);
// console.log(miEdad);
// console.log(miMascota);
// console.log(edadMascota);

// Ejercicio 7 (Crear una variable llamada nombreCompleto y guardar en ella la concatenación de miNombre y miApellido)

// let nombreCompleto = (miNombre + " " + miApellido);
// console.log(nombreCompleto);
// Ejercicio 8 (Crear una variable llamada textoPresentacion y guardar en ella un texto comprendido con todas las variables creadas hasta el momento)
// let textoPresentacion = ("Hola me llamo " + miNombre + " " + miApellido + " tengo " + miEdad + " años, mi mascota se llama " + miMascota + " y tiene " + edadMascota + " años");
// console.log(textoPresentacion);

// Ejercicio 9 (Crear una variable sumaEdades, restaEdades, productoEdades, divisionEdades y calcular sus respectivas operaciones con las variables miEdad y edadMascota)

// sumaEdades = (miEdad + edadMascota);
// console.log(sumaEdades);
// restaEdades = (miEdad - edadMascota);
// console.log(restaEdades);
// productoEdades = (miEdad % edadMascota);
// console.log(productoEdades);
// divisionEdades = (miEdad / edadMascota);
// console.log(divisionEdades);

// Ejercicio 10 (Realizar la carga de las variables del punto 1 al 5 utilizando prompt() y luego ejecutar el código correspondiente para realizar los puntos del 6 al 9 con los datos cargados.)

// Ejercicio 11 (Crear un objeto llamado alumno con un mínimo de 5 propiedades, mostrar dicho objeto utilizando console.table() y también mostrar cada una de las propiedades del objeto por separado)

// const alumno = {
//     nombre: "Matias",
//     apellido: "Suarez",
//     edad: 12,
//     legajo: 124588,
//     curso: "1A"
// };
// console.table(alumno);
// console.log(alumno);


// Ejercicio 12 (Crear un objeto llamado mascota con un mínimo de 5 propiedades, mostrar dicho objeto utilizando console.table() y también mostrar cada una de las propiedades del objeto por separado)

// const mascota = {
//     especie: "Gato",
//     color: "Gris",
//     peso: "10kg",
//     vacunas: "Completas"
// };
// console.table(mascota);
// console.log(mascota);

// Ejercicio 13 (Crear un array llamado frutas con un mínimo de 5 elementos y mostrar por consola el array completo y cada uno de los elementos por separado)

// const frutas = ["naranja", "banana", "manzana", "pera", "sandia"];
// console.log(frutas);

// Ejercicio 14 (Crear un array llamado números con un mínimo de 5 elementos y mostrar por consola el array completo y cada uno de los elementos por separado)

// const numeros = [1, 2, 3, 4, 56];
// console.log(numeros);

// Ejercicio 15 (Crear un array llamado familia con un mínimo de 5 objetos y mostrar por consola el array completo y cada uno de los elementos por separado)

// const familia = [
//     mama = {
//         nombre: "Susana",
//         apellido: "Sosa",
//         edad: 59,
//         profesion: "ama de casa"
//     },
//     papa = {
//         nombre: "Fernando",
//         apellido: "Ribero",
//         edad: 45,
//         profesion: "panadero"
//     },
//     hijo1 = {
//         nombre: "Javier",
//         apellido: "Olivera",
//         edad: 38,
//         profesion: "Chofer"
//     },
//     hijo2 = {
//         nombre: "Irene",
//         apellido: "Olivera",
//         edad: 31,
//         profesion: "domestica"
//     },
//     hijo3 = {
//         nombre: "Natalie",
//         apellido: "Ribero",
//         edad: 22,
//         profesion: "estudiante"
//     }
// ];
// console.log(familia);

// Ejercicio 16 (Crear una variable llamada textoAleatorio formando una frase con el segundo elemento del array del punto 13, el cuarto elemento del punto 14 y el quinto objeto del array del punto 15)

// let textoAleatorio = (frutas[1] + numeros[3] + familia[4]);
// console.log(textoAleatorio);

// Ejercicio 17 (Utilizar prompt() para leer por pantalla mi edad y la edad de un compañero y mostrar por consola los resultados de comparar los valores y guardarlos en variables llamadas por ejemplo: edadesIguales, soyMayor, soyMenor, etc. Y mostrar mensajes en consola como los siguientes:Mi edad es igual a la de mi compañero: false, Mi edad es mayor a la de mi compañero: true,Mi edad es menor a la de mi compañero: false)

// let miEdad = prompt("Introduce tu edad");
// let edadCompañero = prompt("Introduce la edad de tu compañero");
// let edadesIguales = miEdad === edadCompañero;
// let soyMayor = miEdad > edadCompañero;
// let soyMenor = miEdad < edadCompañero;
// console.log(edadesIguales, soyMayor, soyMenor);

// Ejercicio 18 (Compare su edad ingresada por pantalla con prompt() con el numero 18 y guardarlo en una variable llamada soyMayorDeEdad y mostrar por consola un mensaje que diga: Soy mayor de edad y el valor de la variable)

// let miEdad = prompt("Introduce tu edad");
// let soyMayorDeEdad = miEdad >= 18;
// console.log("Soy mayor de edad " + miEdad);

// Ejercicio 19 (Introducir por pantalla la edad y la altura de una persona y guardarlas en variables separadas y en una variable llamada puedeSubir el resultado de la operación resultante de si la persona es mayor de 6 años y además tiene una altura mínima de 120cm y mostrar por consola un mensaje como el siguiente: Puede subir a la atracción y el valor de la variable resultante)

// let miEdad = prompt("Introduce tu edad");
// let miAltura = prompt("Introduce tu altura en cm");
// let puedeSubir = miEdad > 6 && miAltura >= 120;
// console.log("Puede subir a la atraccion: " + puedeSubir);

// Ejercicio 20 (Introducir por pantalla el pase de una persona el cual puede ser “VIP”, “NORMAL” o “LIMITADO”, el saldo que dispone y guardarlos en variables separadas. En una variable llamada puedePasar guardar el resultado de la operación resultante de si la persona tiene pase “VIP” o si posee un saldo mayor a 1000. Mostrando un mensaje que diga: La persona puede pasar y el resultado de la variable)

// let pase = prompt("Introduzca su pase (“VIP”, “NORMAL” o “LIMITADO”)");
// let saldo = prompt("Introduzca su saldo");
// let puedePasar = pase === "VIP" | saldo >= 1000;
// console.log("La persona puede pasar: "+ puedePasar);