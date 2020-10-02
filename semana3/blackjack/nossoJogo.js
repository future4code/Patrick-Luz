/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

let bemVindo = confirm("Quer iniciar uma nova partida?");

let carta1Usuario1 = comprarCarta();
let carta2Usuario1 = comprarCarta();

let carta1Computador1 = comprarCarta();
let carta2Computador1 = comprarCarta();

let somaDasCartasUsuario = 0;
let somaDasCartasComputador = 0;

if (bemVindo) {
  somaDasCartasUsuario = carta1Usuario1.valor + carta2Usuario1.valor;
  somaDasCartasComputador = carta1Computador1.valor + carta2Computador1.valor;
  console.log(
    `Usuário - cartas: ${carta1Usuario1.texto} ${carta2Usuario1.texto} - pontuação: ${somaDasCartasUsuario}`
  );
  console.log(
    `Usuário - cartas: ${carta1Computador1.texto} ${carta2Computador1.texto} - pontuação: ${somaDasCartasComputador}`
  );

  if (somaDasCartasUsuario === somaDasCartasComputador) {
    console.log("Empate");
  } else if (somaDasCartasComputador > somaDasCartasUsuario) {
    console.log("O computador ganhou");
  } else console.log("O usuario ganhou");
} else {
  console.log("O jogo acabou");
}
