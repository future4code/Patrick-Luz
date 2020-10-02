// // 1)

// // let valor = 0;
// // for (let i = 0; i < 5; i++) {
// //   valor += i;
// // }
// // console.log(valor);

// // // Aqui o valor de i enquanto for menor que 5, será acrescentado +1 com a soma de +1 pelo valor +=1

// // 2)

// // const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30];
// // for (let numero of lista) {
// //   if (numero > 18) {
// //     console.log(numero);
// //   }
// // }

// // // Aqui a contagem do console.log começa somente a partir do número 18, por isso só aparece printado [18, 19, 21, 23, 25, 27, 30]

// // let i = 0;
// // const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30];
// // for (let numero of lista) {
// //   console.log("Índice: ", i);
// //   if (numero > 18) {
// //     console.log(numero);
// //   }
// //   i++;
// // }

// // 3)
// // // A)
// // let arrayOriginal = [10, 20, 30, 50, 70];

// // for (let numeros of arrayOriginal) {
// //   console.log(numeros);
// // }

// // // B)
// // let arrayOriginal = [10, 20, 30, 50, 70];

// // for (let numeros of arrayOriginal) {
// //   numeros = numeros / 10;
// //   console.log(numeros);
// // }

// // // C)

// // let arrayOriginal = [10, 25, 11, 50, 70];

// // let arrayPares = [];

// // for (let numeros of arrayOriginal) {
// //   if (numeros % 2 === 0) {
// //     arrayPares.push(numeros);
// //   }
// // }
// // console.log(arrayPares);

// // // D)

// // let arrayOriginal = [10, 25, 11, 50, 70];
// // let arrayPalavras = [];

// // for (let i = 0; i < arrayOriginal.length; i++) {
// //   arrayPalavras.push(`O elemento do index ${i} é ${arrayOriginal[i]}`);
// // }
// // console.log(arrayPalavras);

// // E

// let arrayOriginal = [10, 25, 11, 50, 70];
// let arrayMaior = arrayOriginal[0];
// let arrayMenor = arrayOriginal[0];

// for (let i = 0; i < arrayOriginal.length; i++) {
//   let elementoMaior = arrayOriginal[i];

//   if (elementoMaior > arrayMaior) {
//     arrayMaior = elementoMaior;
//   }
// }

// for (let i = 0; i < arrayOriginal.length; i++) {
//   let elementoMenor = arrayOriginal[i];

//   if (elementoMenor < arrayMenor) {
//     arrayMenor = elementoMenor;
//   }
// }
// console.log(`${arrayMaior}, ${arrayMenor}`);
