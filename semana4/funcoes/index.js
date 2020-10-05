// //1)

// // function minhaFuncao(variavel) {
// //   return variavel * 5;
// // }

// // minhaFuncao(2);
// // minhaFuncao(10);

// // // A) Vai ser impresso 2*5 e 10*5 sendo 10 e 50 respectivamente.

// // // B) Não acontece nada pois não há impressão pela falta do console.log.

// // 2

// let arrayDeNomes = ["Darvas", "Caio", "João", "Paulinha", "Soter"];

// const outraFuncao = function (array) {
//   for (let i = 0; i < 2; i++) {
//     console.log(array[i]);
//   }
// };

// outraFuncao(["Amanda", "Caio"]);

// //A) Será impresso o 1° e 2° nome pois serão menos de 2 repetições.

// // B) Será impresso Amanda e Caio

// 3)

// A array recebe no final sempre o valor x * ele mesmo quando seu resto for = a 0 (número par)

// 4

// A)
// function meApresentar() {
//   console.log("Eu sou Patrick, tenho 28 anos, moro em Floripa e sou estudante");
// }

// B)
// function apresentarGenerico(nome, idade, cidade, estudante) {
//   if (estudante) {
//     estudante = "sou estudante";
//   } else {
//     estudante = "não sou estudante";
//   }
//   console.log(
//     `Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e ${estudante}`
//   );
// }

// apresentarGenerico("Patrick", 28, "Floripa", false);

// 5
// A)
// const somaDoisNumeros = (num1, num2) => {
//   const soma = num1 + num2;
//   return soma;
// };

// const resultado1 = somaDoisNumeros(10, 50);

// console.log(resultado1);

// B)

// let compararNum = (num1, num2) => {
//   if (num1 >= num2) {
//     console.log(`${num1} é maior ou igual a ${num2}`);
//   } else {
//     console.log(`Os números são diferentes`);
//   }
// };
// compararNum(12, 12);

// C)

// let imprime = (mensagem) => {
//   for (let i = 0; i < 10; i++) {
//     console.log(`${mensagem}`);
//   }
// };
// imprime("Hello");

// 6
// A)

// const array = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22];
// verificaTamanhoDoArray = () => {
//   return array.length;
// };
// console.log(verificaTamanhoDoArray());

// B)
