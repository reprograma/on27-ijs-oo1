import { Personagem } from './Personagem.js';
import { SuperPoder } from './SuperPoder.js';

const soltarTeia = new SuperPoder('soltar teia', 3);
const andarEmParedes = new SuperPoder('andar em paredes', 2);
const sentidoApurado = new SuperPoder('sentidoApurado', 1);


const homemAranha = new Personagem('Homem Aranha', 'Peter Parker');


homemAranha.adicionaSuperPoder(soltarTeia);
homemAranha.adicionaSuperPoder(andarEmParedes);
homemAranha.adicionaSuperPoder(sentidoApurado);
homemAranha.poderTotal();

