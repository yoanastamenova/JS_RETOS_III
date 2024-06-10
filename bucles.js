// 1
// let entero = prompt("Dime un numero entero:");

// for(i = 0; i < entero; i++) {
//     console.log(i);
// }

//2
// let n = prompt("Entra el numero inicial");
// let m = prompt("Entra el numero final");

// for(i = n;i < m; i += n) {
//     console.log(i);
// }

//3
// let num = prompt("Entra un numero");

// let listaNumerosPares = "";

// for (i = 1; i < num; i++) {
//     if (num % 2 == 0 && num > 0) {
//         listaNumerosPares += i + ", ";
//     }
// }

// console.log(listaNumerosPares);

//4
// let num = ("Indica un numero:");

// for(i = 1; num <= 10; num++) {
//     console.log(`${num} x ${i} = ${num * i}`);
// }

//5

// let ast = "*";

// for(i = 1; i <=4; i++){
//     console.log(ast.repeat(i));
// }

//6

// let lineas = prompt("Indice cuantas lineas:");
// let ast = "*";


// for(let i = 1; i <= lineas; i++){
//     console.log(ast.repeat(i));
// }

//7

// let numero = prompt("Dime tu numero");
// let suma = 0;

// for (i = 0; i <= numero; i++) {
//     suma += i;
// } 

// console.log(`La suma de los numeros es ${suma}`)

//8
// let num1 = prompt("Dime tu numero");
// let num2 = prompt("Dime tu numero");
// let num3 = prompt("Dime tu numero");
// let num4 = prompt("Dime tu numero");
// let media = (num1+num2+num3+num4) / 4;

// console.log(`La media es ${media}`);

//9
// let num1 = parseInt(prompt("Dime tu primer número"));
// let num2 = parseInt(prompt("Dime tu segundo número"));

// let max, min;

// if (num1 > num2) {
//     max = num1;
//     min = num2;
// } else {
//     max = num2;
//     min = num1;
// }

// for(let i = max; i >= min; i--) {
//     console.log(i);
// }

//10
let numeros = [];
let resultados = [];

for(let i = 0; i < 5; i++) {
    let num = parseInt(prompt("Por favor, introduce un número:"));
    numeros.push(num);
    let resultado = num * 3;
    resultados.push(resultado);
    console.log(`El resultado de ${num} multiplicado por 3 es ${resultado}`);
}

console.log(`El array de resultados es: ${resultados}`);