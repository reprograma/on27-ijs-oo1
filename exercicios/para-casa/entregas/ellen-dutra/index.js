import { SuperPoder } from './classes/SuperPoder.js';
import { Personagem } from './classes/Personagem.js';
import { Confronto } from './classes/Confronto.js';

const superpoder1 = new SuperPoder('soltar teia', 3);
const superpoder2 = new SuperPoder('andar em paredes', 2);
const superpoder3 = new SuperPoder('sentido apurado', 1);

const personagem1 = new Personagem('Homem-Aranha', 'Peter Park');
personagem1.adicionaSuperPoder(superpoder1);
personagem1.adicionaSuperPoder(superpoder2);
personagem1.adicionaSuperPoder(superpoder3);
console.log(personagem1.poderTotal());

const superpoder4 = new SuperPoder('força', 5);
const personagem2 = new Personagem('Duende Verde', 'Norman Osbourne');
personagem2.adicionaSuperPoder(superpoder4);
console.log(personagem2.poderTotal());

const confronto1 = new Confronto();
console.log(confronto1.lutar(personagem1, personagem2));
