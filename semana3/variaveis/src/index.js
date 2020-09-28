/* Num 1

a = 10
b = 10

console.log(b)
IMPRESSO = 10

b = 5
console.log(a, b)
IMPRESSO = 10, 5


Num 2

a = 10
b = 20
c = a
b = c
a = b

console.log(a, b, c)
IMPRESSO = 10, 10, 10
*/

/* Escrita 


Ex. 1 */

let name;
let age;
console.log(typeof name);
console.log(typeof age);

/* R: A falta de um valor dentro de uma variável faz com que ela seja ''undefined'' */

name = prompt("Qual é o seu nome?");
age = prompt("Qual é sua idade?");
console.log(typeof (name, age));

/* R: Recebi strings pois elas possuem textos */

console.log(`Olá ${name}, você tem ${age} anos`);

// Ex. 2

let cor;
let musica;
let filme;
let livro;

cor = prompt("1. Qual sua cor favorita?");
musica = prompt("2. Qual sua música favorita?");
filme = prompt("3. Qual seu filme favorito?");
lugar = prompt("4. Qual seu lugar favorito?");
livro = prompt("5. Qual seu livro favorito?");

console.log(`Sua cor favorita é: ${cor}`);
console.log(`Sua música favorita é: ${musica}`);
console.log(`Seu filme favorito é: ${filme}`);
console.log(`Seu lugar favorito é: ${lugar}`);
console.log(`Seu livro favorito é: ${livro}`);

// Ex 3.

let arrayComidasPreferidas = [
  "Pizza",
  "Kinder Bueno",
  "Rafaello",
  "Sushi",
  "Poke",
];
console.log(arrayComidasPreferidas);
console.log(
  `Essas são minhas comidas preferidas: ${arrayComidasPreferidas[0]} \n ${arrayComidasPreferidas[1]} \n ${arrayComidasPreferidas[2]} \n ${arrayComidasPreferidas[3]} \n ${arrayComidasPreferidas[4]}`
);

arrayComidasPreferidas[1] = prompt("Qual sua comida favorita?");
console.log(arrayComidasPreferidas);

// Ex 4.

let arrayPerguntas = [
  "Você conhece os EUA?",
  "Você conhece o Japão?",
  "Você conhece a Suíça?",
];

let arrayRespostas = [true, false, true];

console.log(arrayPerguntas[0], arrayRespostas[0]);
console.log(arrayPerguntas[1], arrayRespostas[1]);
console.log(arrayPerguntas[2], arrayRespostas[2]);
