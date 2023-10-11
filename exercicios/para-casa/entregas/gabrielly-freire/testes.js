const {Personagem} = require('./Personagem.js');
const {SuperPoder} = require('./SuperPoder.js');
const {Confronto} = require('./Confronto.js');

// Instanciando Super Poderes
const poder1 = new SuperPoder("soltar teia", 3);
const poder2 = new SuperPoder("andar em paredes", 2);
const poder3 = new SuperPoder("sentido apurado", 1);
const poder4 = new SuperPoder("velocidade", 5);
const poder5 = new SuperPoder("mente aguçada", 5);
const poder6 = new SuperPoder("tentáculos indestrutíveis", 1);

// Instanciando Personagem Herói
const heroi1 = new Personagem("Homem-Aranha", "Peter Park");
heroi1.adicionaSuperPoder(poder1);
heroi1.adicionaSuperPoder(poder2);
heroi1.adicionaSuperPoder(poder3);
heroi1.adicionaSuperPoder(poder4);
heroi1.adicionaSuperPoder(poder5); // não pode ser adicionado

const heroi2 = new Personagem("Flash", "Barry Allen");
heroi2.adicionaSuperPoder(poder4);

// Instanciando Personagem Vilão
const vilao1 = new Personagem("Lex Luthor", "Lex Luthor");
vilao1.adicionaSuperPoder(poder5);

const vilao2 = new Personagem("Octopus", "Otto Octavius");
vilao2.adicionaSuperPoder(poder4);
vilao2.adicionaSuperPoder(poder6);


function resultadoConfronto(num){
    let mensagem = "";
    switch (num) {
        case 0:
            mensagem = "Empate";
            break;
        case 1:
            mensagem = "O super-herói ganhou a batalha";
            break;
        case 2:
            mensagem = "O vilão ganhou a batalha";
            break;
    }
    console.log(mensagem);
}

// Instanciando Confronto
const confronto1 = new Confronto();
resultadoConfronto(confronto1.lutar(heroi1, vilao2));

const confronto2 = new Confronto();
resultadoConfronto(confronto2.lutar(heroi2, vilao1));

const confronto3 = new Confronto();
resultadoConfronto(confronto3.lutar(heroi2, vilao2));