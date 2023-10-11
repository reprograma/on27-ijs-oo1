const { SuperPoder } = require("./classes/SuperPoder.js");
const { Personagem } = require("./classes/Personagem.js");

const superPoder0 = "ler mentes";
const superPoder1 = new SuperPoder("soltar teia", 3);
const superPoder2 = new SuperPoder("velocidade", 3);
const superPoder3 = new SuperPoder("ler pensamento", 2);
const superPoder4 = new SuperPoder("voar", 3);
const superPoder5 = new SuperPoder("armadura", 4);

const superHeroi1 = new Personagem("Mulher-Maravilha", "Diana");

superHeroi1.adicionaSuperPoder(superPoder0);
superHeroi1.adicionaSuperPoder(superPoder1);
superHeroi1.adicionaSuperPoder(superPoder2);
superHeroi1.adicionaSuperPoder(superPoder3);
superHeroi1.adicionaSuperPoder(superPoder3);
superHeroi1.adicionaSuperPoder(superPoder4);
superHeroi1.adicionaSuperPoder(superPoder5);

superHeroi1.poderTotal();
