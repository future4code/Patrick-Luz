//1)

const respostaDoUsuario = prompt("Digite o número que você quer testar");
const numero = Number(respostaDoUsuario);

if (numero % 2 === 0) {
  console.log("Passou no teste.");
} else {
  console.log("Não passou no teste.");
}
// Um teste de resto se é igual a 0.
// Números pares
// Números ímpares

//2)

let fruta = prompt("Escolha uma fruta");
let preco;
switch (fruta) {
  case "Laranja":
    preco = 3.5;
    break;
  case "Maçã":
    preco = 2.25;
    break;
  case "Uva":
    preco = 0.3;
    break;
  case "Pêra":
    preco = 5.5;
    break; // BREAK PARA O ITEM c.
  default:
    preco = 5;
    break;
}
console.log("O preço da fruta ", fruta, " é ", "R$ ", preco);

// Para escolher uma fruta e dizer o preço dela
// "O preço da fruta ", maçã, " é ", "2.25", preco
// "O preço da fruta "maçã", "é" "5" preco"

//3)
const numero = Number(prompt("Digite o primeiro número."));

if (numero > 0) {
  console.log("Esse número passou no teste");
  let mensagem = "Essa mensagem é secreta!!!";
}

console.log(mensagem);

// A Tranformando uma string em número
// B No caso do usuário colocar 10, ele passa no teste. No caso de -10, não retorna nada.
// C Sim. Vai ter um erro porque o console.log(mensagem) não consegue acessar pois é um escopo de pai e filho, enquanto o console.log(mensagem) é global

// 4)

const idadeUsuario = Number(prompt("Quantos anos você tem?"));

if (idadeUsuario >= 18) {
  console.log("Você pode dirigir");
} else {
  console.log("Você não pode dirigir");
}

// 5)

let turno = prompt(
  "Você estuda em qual horário? Digite M para matutino, V para vespertino ou N noturno"
).toUpperCase();
if (turno === "M") {
  console.log("Bom dia!");
} else if (turno === "V") {
  console.log("Boa tarde!");
} else if (turno === "N") {
  console.log("Boa noite!");
}

//6)

let turno = prompt(
  "Você estuda em qual horário? Digite M para matutino, V para vespertino ou N noturno"
).toUpperCase();
switch (turno) {
  case "M":
    console.log("Matutino");
    break;
  case "V":
    console.log("Vespertino");
    break;
  default:
    console.log("Noturno");
    break;
}

//7)

let generoFilme = prompt(
  "Qual o genero do filme que você vai assistir?"
).toLowerCase();
let valorIngresso = Number(prompt("Qual o valor do ingresso?"));

if (generoFilme === "fantasia" && valorIngresso < 15) {
  console.log("Bom filme");
} else {
  console.log("Escolha outro filme :(");
}
