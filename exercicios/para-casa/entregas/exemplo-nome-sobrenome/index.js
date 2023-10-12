import { SuperPoder } from './SuperPoder.js';
import { Personagem } from './Personagem.js';


const superPoder = new SuperPoder("Correr", 8);
const superPoder1 = new SuperPoder("Voar", 3);

const personagem = new Personagem("The flash", "Flash");


personagem.adicionaSuperPoder(superPoder);
personagem.adicionaSuperPoder(superPoder1);

console.log(`${personagem.nome} tem um poder total de ${personagem.poderTotal()}`);



