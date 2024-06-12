//RETO 1

// let celsius = prompt("Indica la temperatura en celsius")

// const convertToFarenheit = (celsius) => { 
//     return (celsius * 9/5) + 32; 
// }

// console.log(convertToFarenheit(celsius));

// RETO 2

// const esPar = (num) => {
//     if (num % 2 == 0) {
//         console.log(`El numero ${numero} es par`);
//     }
//     return console.log(`El numero ${num} no es par!`)
// }

// RETO 3

// let num = prompt("Indica un numero");

// const esPrimo = (num) => {
//     for (let i = 2, max = Math.sqrt(num); i <= max; i++) {
//         if (num % i === 0) {
//             return console.log(`El número ${num} no es primo!`);
//         }
//     }
//     return console.log(`El número ${num} es primo`);
// }

// esPrimo(num);

// RETO 4

// let letras = ["T","R","W","A","G","M","Y","F","P","D","X",
// "B","N","J","Z","S","Q","V","H","L","C","K","E"];

// let numeros = prompt("Indica los numeros de tu DNI");

// const comprobarDni = (numeros) => {
//     if (num > 0 && num <= letters.length) {
//         console.log(`La letra en la posición ${num} es: ${letters[num-1]}`);
//     } else {
//         console.log("Número fuera de rango.");
//     }
// }

// RETO 5 

// let precio = prompt("Indica el precio del producto:");
// let iva = prompt("indica la iva:");

// if(iva == 0){
//    iva = 0.21;
// } 

// const anadirIva = (precio, iva) => {
//     let precioFinal = 0;
//     if((precio > 0 && precio < 100) && (iva > 0 && iva < 100)){
//         precioFinal = precio * (1 + iva);
//     }
//     return precioFinal;
// }

// let precioFinal = anadirIva(precio, iva);
// console.log(precioFinal);

//RETO 6

// let vocal = ["a","e","i","o","u"];
// let consonante = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "x", "z", "w", "y"];

// let letra = prompt("Indica tu letra");

// if(vocal.includes(letra)){
//     console.log("Tu letra es vocal");
// } else {
//     console.log("no se esa letra!")
// }

// RETO 7

//Crea una función que, dada una frase, convierta las A en 4, las E en 3, las I en 1 y las O en 0.

// let frase = prompt("Indica la frase:");

// frase = frase.replace(/A/gi, '4');
// frase = frase.replace(/E/gi, '3');
// frase = frase.replace(/I/gi, '1');
// frase = frase.replace(/O/gi, '0');

// console.log(frase);

// RETO 8  Crea una función que, dada una frase, cuente la cantidad de una letra en la misma. Por
//ejemplo, dada la palabra “javascript” y la letra “a”, debería devolver un 2.
// let frase = prompt("Indica la frase:");
// let letter = prompt("Indica la letra:");

// function countLetter(frase, letter) {
//     let count = 0;
//     for (let i = 0; i < frase.length; i++) {
//         if (frase[i] === letter) {
//             count++;
//         }
//     }
//     return count;
// }

// let count = countLetter(frase, letter);

// console.log(`The letter "${letter}" appears ${count} times in "${frase}"`);

//RETO 9

// let userInput = prompt("Enter a list of numbers separated by commas:");

// // Convert the input string into an array of numbers
// let numbers = userInput.split(',').map(Number);

// let maxNumber = Math.max(...numbers);

// console.log(`The largest number is ${maxNumber}`);

//RETO 10

// let userInput = prompt("Enter a list of numbers separated by commas:");

// // Convert the input string into an array of numbers
// let numbers = userInput.split(',').map(Number);

// const initialValue = 0;
// const sumWithInitial = array1.reduce(
//   (accumulator, currentValue) => accumulator + currentValue,
//   initialValue,
// );

// console.log(sumWithInitial);
//RETO 11
let numA = prompt("indica el numero a:");
let numB = prompt("indica el numero b:");

function calculatePercentage(A, B) {
    let percentage = (B/A) * 100;
    return percentage;
}