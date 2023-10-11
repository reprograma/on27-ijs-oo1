import { Confronto } from "./classes/Confronto.js";
import { SuperPoder } from "./classes/SuperPoder.js";
import { SuperHeroi } from "./classes/SuperHeroi.js";
import { Vilao } from "./classes/Vilao.js";

const superpoder1 = new SuperPoder("soltar teia", 3);
const superpoder2 = new SuperPoder("andar em parede", 2);
const superpoder3 = new SuperPoder("sentido apurado", 1);
const superpoder4 = new SuperPoder("voar",3);
const superpoder5 = new SuperPoder("força",5);


const personagem1 = new SuperHeroi("Homem Aranha", "Peter Park");
const personagem2 = new SuperHeroi("Super Man", "Clark Kent");
const personagem3 = new Vilao("Duende Verde", "Normam Osbourne", 10)

console.log(personagem1.nomeVidaReal) //Peter Park
//console.log(personagem2.nomeVidaReal) //Clark Kent
console.log(superpoder1.nome) //soltar teia

personagem1.adicionaSuperPoder(superpoder1) //O poder soltar teia de categoria 3 foi adicionado ao personagem Homem Aranha
personagem1.adicionaSuperPoder(superpoder2) //O poder andar em parede de categoria 2 foi adicionado ao personagem Homem Aranha
personagem1.adicionaSuperPoder(superpoder3) //O poder sentido apurado de categoria 1 foi adicionado ao personagem Homem Aranha
//personagem1.adicionaSuperPoder(superpoder4) //O poder voar de categoria 3 foi adicionado ao personagem Homem Aranha
//personagem1.adicionaSuperPoder(superpoder5) //O Homem Aranha já atingiu o limite máximo de 4 poderes.
console.log(personagem1.poderes) //[ { poder: 'soltar teia', categoria: 3 }, { poder: 'andar em parede', categoria: 2 }, { poder: 'sentido apurado', categoria: 1 } ]
console.log(personagem1) // {}
console.log(personagem1.poderTotal()) //6.6

personagem3.adicionaSuperPoder(superpoder5) //O poder força de categoria 5 foi adicionado ao personagem Duende Verde
console.log(personagem3.poderTotal()) //5
const confronto1 = new Confronto()
confronto1.lutar(personagem1,personagem3) //Homem Aranha derrotou Duende Verde
console.log(personagem3)

//personagem3.adicionaSuperPoder(superpoder4) 
//confronto1.lutar(personagem1,personagem3) //Duende Verde derrotou Homem Aranha

//personagem1.adicionaSuperPoder(superpoder2) 
//confronto1.lutar(personagem1,personagem3) //Empatou
