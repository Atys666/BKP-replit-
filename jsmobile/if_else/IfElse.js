// IF / ELSE -> ESTRUTURA CONDICIONAL PARA TOMADA DE DECISÃO

const idade = 18;

if (idade >= 18) {
  console.log("Maior e idade");
}
else if (idade < 18) {
  console.log("Menor de idade");
}
else {
  console.log("Idade inválida")
}
// REFATORAÇÃO: Refazer melhorias 
//IF, IF, para IF / ELSE IF
/**
 //CASE SENSITIVE -Maiuscula diferem de minuscula
 /**
 * PROMPT(DARKDJFAKD)!!!
 *escreva um código que pergunte qual a cor preferida. SE for vermelho, imprima "vermelho". Se for azul, imprima "azul",
 * SENÃO não conheço essa cor
 */

//const cor = 'verde'
const cor = prompt("Qual a cor preferida?");
if (cor == 'Vermelho') {
  console.log('Vermelho');
} else if (cor == 'Azul') {
  console.log('Azul')
} else {
  console.log('Não conheço essa cor')
}

console.log(cor.length) //COMPRIMENTO DA STRING

