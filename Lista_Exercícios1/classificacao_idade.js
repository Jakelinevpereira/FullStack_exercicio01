//Classificação da idade de uma pessoa em categorias (criança,adolescente, adulto, idoso), com base no valor fornecido

const prompt = require('prompt-sync')();

let idade = Number(prompt('Digite uma idade: '));
if(idade <= 0){
    console.log('Idade indefinida!');
}else if(idade > 0 && idade <= 10){
    console.log('Essa pessoa é uma criança!');
}else if(idade >= 11 && idade <= 17){
    console.log('Essa pessoa é uma adolescente!');
}else if(idade >= 18 && idade <= 59){
    console.log('Essa pessoa é um adulto!');
}else if(idade >= 60 && idade <= 74){
    console.log('Essa pessoa é um idoso!')
}else{
    console.log('Essa pessoa é um ancião!')
}