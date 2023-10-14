import { SuperPoder } from './SuperPoder.js';
import { Personagem } from './Personagem.js';
import { Confronto } from './Confronto.js';

const superPoder1 = new SuperPoder('Coragem', 3);


const superheroi = new Personagem('Mulher do Brasil', 'Maria');
superheroi.adicionaSuperPoder(superPoder1);
superheroi.poderTotal();

const vilao = new Personagem('Mulher do Brasil', 'Maria');
superheroi.adicionaSuperPoder(superPoder1);
superheroi.poderTotal();

const poderTotal = superheroi.poderTotal();

console.log(`O poder total é ${poderTotal}`);


console.log(`O nome do personagem é ${superheroi.nome} e na vida real se chama ${superheroi.nomeVidaReal} e tem o poder total ${superheroi.poderTotal()} `)

console.log(`O poder é ${superPoder1.nome} e a categoria do poder é ${superPoder1.categoria}`);

console.log(`O super poder é ${superPoder1.nome} para ${superheroi.nome}`)

const confrontos = new Confronto();
console.log(`${confrontos.lutar}`)


