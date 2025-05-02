//Calculando o Índice de Massa Corporal (IMC) de uma pessoa de acordo com a categoria de peso (baixo peso, peso normal, sobrepeso, obesidade)
//Calculos baseados no site: https://www.tuasaude.com/calculadora/imc/

const prompt = require('prompt-sync')();

// Menor que 18,5	Magreza
// 18,5 a 24,9	Normal
// 25 a 29,9	Sobrepeso
// 30 a 34,9	Obesidade grau I
// 35 a 39,9	Obesidade grau II
// Maior que 40	Obesidade grau III

let peso = parseFloat(prompt('Digite seu peso corporal em kg: '));
let altura= parseFloat(prompt('Digite sua altura (exemplo:1.75): '));
//Cálculo do IMC
let imc = (peso/(altura * altura));

if(imc < 18){
    console.log('Atenção! Magreza!!');
}else if(imc >= 18 && imc <= 24){
    console.log('Normal!!');
}else if( imc >= 25 && imc <= 29){
    console.log('Sobrepeso!!')
}else if( imc >= 30 && imc <= 34){
    console.log('Obesidade Grau I!!')
}else if( imc >= 35 && imc <= 39){
    console.log('Obesidade Grau II!!')
}else{
    console.log('Obesidade Grau III!!')
}

console.log(`Seu imc é: ${imc.toFixed(2)}`);