//Verificação de um número inteiro é Par ou Ímpar

const prompt = require('prompt-sync')();
let numero = Number(prompt('Digite um número: '));

if(numero % 2 == 0){
    console.log('Número Par!');
}else{
    console.log('Número Ímpar!')
}