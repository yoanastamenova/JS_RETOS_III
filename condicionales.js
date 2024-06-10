// RETOS CONDICIONALES
// 1

// let num1 = prompt("Introduce tu primer numero:");
// let num2 = prompt("Introduce tu segundo numero:");

// if(num1 % num2 === 0) {
//    console.log("Si, los numeros son multiplos!");
// } else {
//     console.log("Lo siento, los numeros no son multiplos!");
// }

//2 

// let num1 = prompt("Entra tu primer numero");
// let num2 = prompt("Entra tu segundo numero");

// if (num1>num2) {
//     console.log(`${num1} es mayor que ${num2}`)
// } else {
//     console.log(`${num2} es mayor que ${num1}`)
// }

//3

// let num = prompt("Escribe tu numero");

// switch (num) {
//     case (num > 0):
//         console.log("El numero es positivo!");
//         break;
//     case (num < 0):
//         console.log("El numero es negativo!");
//         break;
//     case (num == 0):
//         console.log("El numero es igual a cero!");
//         break;
//     default:
//         console.log("No se puede saber!");
//         break;
// }

//4

// let texto = prompt("Escribe tu texto aqui:");

// if(texto >= 5) {
//     console.log("El texto tiene 5 o mas caracteres");
// } else {
//     console.log("El texto tiene menos de 5 caracteres");
// }

//5

// let numeros1 = parseInt(prompt("Escribe tu primer numero de 1 a 10:"));
// let numeros2 = parseInt(prompt("Escribe tu segundo numero de 1 a 10:"));
// let numeros3 = parseInt(prompt("Escribe tu tercer numero de 1 a 10:"));

// let promedio = (numeros1 + numeros2 + numeros3) / 3;

// if(numeros1 > 10 || numeros1 < 1 || numeros2 > 10 || numeros2 < 1 || numeros3 >10 || numeros3 < 1){
//     console.log("intenta de nuevo!!");
// } else {
//     if(promedio > 5){
//         console.log("El promedio es mayor que 5!")
//     } else {
//         console.log("El promedio es menor o igual que 5!")
//     }
// }

//6

// let texto = prompt("Introduce tu texto aqui:");

// if(texto === texto.toLowerCase()) {
//     console.log("Son en lower case");
// } else {
//     console.log("No son en lower case!");
// }

//7

// let aleatorio = Math.floor(Math.random() * 20) + 1;

// if(aleatorio % 2 == 0) {
//     console.log("Es par");
// } else {
//     console.log("Es impar");
// }

//8

// let nota1 = prompt("Entra primer nota");
// let nota2 = prompt("Entra segunda nota");
// let nota3 = prompt("Entra tercera nota");

// let media = (nota1+nota2+nota3) / 3;

// switch(media){
//     case"1":
//     case"2":
//     case"3":
//     case"4":
//     console.log("Insuficiente!");
//     break;

//     case"5":
//     case"6":
//     console.log("Suficiente!");
//     break;

//     case"7":
//     case"8":
//     case"9":
//     case"10":
//     console.log("Mas que bien");
//     break;
// }

// console.log(`El resultado de nota es ${media}`);

// 9 
// let coche = prompt("Que coche quiere comprar:");
// let modelo = prompt("Cual es el modelo del coche:");

// switch(modelo) {
//   case"fiesta":
//   console.log("El discuento es de 5%");
//   break;

//   case"focus":
//   console.log("El descuento es del 10%");
//   break;

// }

//10

// let mes = prompt("Diga el mes:");

// switch(mes) {
//     case"enero":
//     console.log("El mes tiene 31 dias")
//     break;

//     case"febrero":
//     console.log("El mes tiene 28 dias")
//     break;
    
//     case"marzo":
//     console.log("El mes tiene 31 dias")
//     break;

//     case"abril":
//     console.log("El mes tiene 30 dias")
//     break;

//     case"mayo":
//     console.log("El mes tiene 31 dias")
//     break;

//     case"junio":
//     console.log("El mes tiene 30 dias")
//     break;

//     case"julio":
//     console.log("El mes tiene 31 dias")
//     break;

//     case"agosto":
//     console.log("El mes tiene 30 dias")
//     break;

//     case"septiembre":
//     console.log("El mes tiene 31 dias")
//     break;

//     case"octubre":
//     console.log("El mes tiene 31 dias")
//     break;

//     case"noviembre":
//     console.log("El mes tiene 30 dias")
//     break;

//     case"deciembre":
//     console.log("El mes tiene 31 dias")
//     break;

// }

//11 

// let diametro = prompt("Dime el diametro");
// let grosor = prompt("Dime el grosor");

// if (diametro > 1.4) {
//   console.log("La rueda es para un vehiculo grande.");
// } else if (diametro <= 1.4) {
//     console.log("La rueda es para vehiculo mediano");
// } else {
//     console.log("La rueda es para unvehículo pequeño");
// }

// if(diametro > 1.4 && grosor < 0.4 || diametro <= 1.4 && diametro > 0.8 && grosor < 0.25) {
//     console.log("El grosor para esta rueda es inferior al recomendado");
// }

// 12

let kmRecoridos = prompt("Cuantos kilometros has recorrido?");
let vehiculo = prompt("Con que has viajado?");
let precioCoche = 0.10;
let precioBus = 0.5;
let precioMoto = 0.20;

switch(vehiculo) {
    case"coche":
    let coche = kmRecoridos*precioCoche;
    console.log(`El precio que tienes que pagar es de ${coche}`);
    break;

    case"moto":
    let moto = kmRecoridos*precioMoto;
    console.log(`El precio que tienes que pagar es de ${moto}`);
    break;

    case"bus":
    let bus = kmRecoridos*precioBus;
    console.log(`El precio que tienes que pagar es de ${bus}`);
    break;
}