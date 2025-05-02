//Escreva um algoritmo para ler um número inteiro e escrevê-lo na tela 10 vezes.

const prompt = require('prompt-sync')();

let numero = Number(prompt('Digite um número: '));
let vezes = 10;

for(i =0; i < vezes; i++){
    console.log(numero);
}
