//Veriifcar o tipo de Triângulo: Isósceles, escaleno ou eqüilátero
const prompt = require('prompt-sync')();

let ladoA = Number(prompt('Digite o valor do lado A do Tariângulo: '));
let ladoB = Number(prompt('Digite o valor do lado B do Tariângulo: '));
let ladoC = Number(prompt('Digite o valor do lado C do Tariângulo: '));

//Verificando os lados do triângulo
if(ladoA < ladoB + ladoC && ladoB < ladoA + ladoC && ladoC < ladoA + ladoB){
    if(ladoA==ladoB && ladoB == ladoC){
        console.log('O Triângulo é Equilátero.');
    }else if(ladoA == ladoB || ladoA == ladoC || ladoB == ladoC){
        console.log('O Triângulo é Isóceles.');
    }else{
        console.log('Triângulo Escaleno.');
    }
}else{
    console.log('Lados fornecidos não o triângulo.')
}

