//Crie um programa que exibe a tabuada de um número fornecido pelo usuário (de 1 a 10)utilizando um loop for.
const prompt = require('prompt-sync')();

let numeroTabuada = Number(prompt('Qual o número que você quer saber a tabuada? '));
let numero = 0;
    for(let numero=0; numero < 11; numero++){
        console.log(`${numeroTabuada} x ${numero} = ${numeroTabuada * numero}`);
    }