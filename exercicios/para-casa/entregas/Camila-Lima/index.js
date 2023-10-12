import { SuperPoder } from './SuperPoder.js';
import { Personagem } from './Personagem.js';
import { Confronto } from './Confronto.js';

const superPoder1 = new SuperPoder('velocidade', 3);
const superPoder2 = new SuperPoder('força', 3);
const superPoder3 = new SuperPoder('braceletes', 1);

const superHeroi = new Personagem('Mulher-Maravilha', 'Diana');
superHeroi.adicionaSuperPoder(superPoder1);
superHeroi.adicionaSuperPoder(superPoder2);
superHeroi.adicionaSuperPoder(superPoder3);
console.log(superHeroi.poderTotal());

const superPoder4 = new SuperPoder('voar', 3);
const superPoder5 = new SuperPoder('força', 5);
const superPoder6 = new SuperPoder('visão de raio x', 4);
const superPoder7 = new SuperPoder('sopro congelante', 4);

const vilao = new Personagem('Bizarro', 'Bizarro');
vilao.adicionaSuperPoder(superPoder4);
vilao.adicionaSuperPoder(superPoder5);
vilao.adicionaSuperPoder(superPoder6);
vilao.adicionaSuperPoder(superPoder7);
vilao.poderTotal();

const confronto1 = new Confronto();
console.log(confronto1.lutar(superHeroi, vilao))