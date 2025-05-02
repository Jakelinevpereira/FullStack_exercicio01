//Recebe uma nota de 0 a 10 e classifica como: "Aprovado", "Recuperação", ou "Reprovado"
const prompt = require('prompt-sync')();

let nota = Number(prompt('Digite sua nota de 0 a 10:'));

if(nota >= 7 && nota <= 10){
    console.log('Parabéns, você está Aprovado!');
}else if(nota == 6){
    console.log('Tente novamente, você está em Recuperação!');
}else{
    console.log('Que pena! Você está Reprovado!');
}