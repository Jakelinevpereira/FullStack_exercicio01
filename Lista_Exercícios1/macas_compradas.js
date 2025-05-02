/* As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se
forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs
compradas, calcule e escreva o valor total da compra.*/

const prompt = require('prompt-sync')();

let quantidadeMaca = Number(prompt('Digite o número de maçãs compradas: '));
let valorMaca = 0;
let valorTotal = valorMaca * quantidadeMaca;

if(quantidadeMaca < 12){
    valorTotal = 0.30 * quantidadeMaca;
}else if(quantidadeMaca >= 12){
    valorTotal = 0.25 * quantidadeMaca;
}console.log(`Valor total da compra é de R$${valorTotal.toFixed(2)}`);