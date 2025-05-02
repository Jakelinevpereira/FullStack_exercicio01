//Crie um menu interativo no console que oferece ao usuário a escolha de três opções de bebidas sem álcool.

const prompt = require('prompt-sync')();

let codigo = Number(prompt('Escolha o código da sua bebida(0-água), (1-café) ou (2-refrigerante): '));

switch(codigo){
    case 0:
    console.log(`O código escolhido foi ${codigo}: ÁGUA!`);
    break;
    case 1:
        console.log(`O código escolhido foi ${codigo}: CAFÉ!`);
    break;
    case 2:
        console.log(`O código escolhido foi ${codigo}: REFRIGERANTE!`);
    break;
    default:
        console.log('Código inválido!')
}


