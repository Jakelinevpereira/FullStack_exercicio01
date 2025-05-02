//Escreva um programa que solicita ao usuário 5 números e calcula a soma total utilizando um loop for.

const prompt = require('prompt-sync')();

let numero1 = Number(prompt('Digite um número: '));
let numero2 = Number(prompt('Digite um número: '));
let numero3 = Number(prompt('Digite um número: '));
let numero4 = Number(prompt('Digite um número: '));
let numero5 = Number(prompt('Digite um número: '));

let somaTotal = numero1 + numero2 + numero3 + numero4 + numero5;

for(let i=0; i < 1; i++){
    console.log(`A soma total é: ${somaTotal}`);
}

