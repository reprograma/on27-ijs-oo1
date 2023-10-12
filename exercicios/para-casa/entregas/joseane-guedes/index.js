import { SuperPoder } from './SuperPoder.js';
import { Personagem } from './Personagem.js';

const superPoder1 = new SuperPoder('Coragem', 3);

const personagem1 = new Personagem('Mulher do Brasil', 'Maria');
personagem1.adicionaSuperPoder(superPoder1);
personagem1.poderTotal();

const poderTotal = personagem1.poderTotal();


console.log(`O poder total é ${poderTotal}`);

console.log(`O nome do personagem é ${personagem1.nome} e na vida real ela se chama ${personagem1.nomeVidaReal} e tem o poder total ${personagem1.poderTotal()} `)

console.log(`O poder é ${superPoder1.nome} e a categoria do poder é ${superPoder1.categoria}`);

console.log(`O super poder é ${superPoder1.nome} para ${personagem1.nome}`)


