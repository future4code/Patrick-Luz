/*1

const bool1 = true;
const bool2 = false;
const bool3 = !bool2;

let resultado = bool1 && bool2;
console.log("a. ", resultado);
//R: false

resultado = bool1 && bool2 && bool3;
console.log("b. ", resultado);
//R: false

resultado = !resultado && (bool1 || bool1);
console.log("c. ", resultado);
//R: true

console.log("e. ", typeof resultado);
//R: boolean

//2

let array;
console.log("a. ", array);
//R: undefined

array = null;
console.log("b. ", array);
//R: null

array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
console.log("c. ", array.length);
//R: 11

let i = 0;
console.log("d. ", array[i]);
//R: 3

array[i + 1] = 19;
console.log("e. ", array);
//R: [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13];

const valor = array[i + 6];
console.log("f. ", valor);
//R: 9

// Escrita N° 1)

let age = prompt("Qual é sua idade?");
let ageFriend = prompt("Qual a idade do seu melhor amigo?");
let resposta = Number(age) > Number(ageFriend);
let diferenca = Number(age) - Number(ageFriend);
console.log(`Sua idade é maior do que a do seu amigo ${resposta}`);
console.log(`${diferenca}`);



// Ex. N° 2)

let numeroPar = prompt(`Coloque um número par`);
let numero = Number(numeroPar);
console.log(numero);
console.log(numero % 2);

// C = Todo resultado é igual a 0

// D = O resultado é = 1

*/

// Ex. N° 3

let arraylistaDeTarefas = [];
let tarefa1 = prompt("O que você precisa fazer na manhã?");
let tarefa2 = prompt("O que você precisa fazer na tarde?");
let tarefa3 = prompt("O que você precisa fazer a noite?");
arraylistaDeTarefas.push(tarefa1, tarefa2, tarefa3);
console.log(arraylistaDeTarefas);

let indiceTarefas = prompt("Digite o indice de uma tarefa 0, 1 ou 2!");
indiceTarefas = Number(indiceTarefas);
arraylistaDeTarefas.splice(indiceTarefas, 1);
console.log(arraylistaDeTarefas);

// Ex. N° 3

let nome = prompt("Qual seu nome?");
let email = prompt("Digite seu email?");
const resultado = `O ${email} foi cadastrado com sucesso. Seja bem vindo ${nome}!`;
console.log(resultado);
