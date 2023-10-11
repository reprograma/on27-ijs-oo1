import { SuperPoder } from "./classes/SuperPoder.js";
import { Personagem } from "./classes/Personagem.js";
import { Confronto } from "./classes/Confronto.js";
import { Vilao } from "./classes/Vilao.js";

const homemAranha = new Personagem("Homem Aranha", "Peter Park");
const superHomem = new Personagem("Super-Homem", "Clark Kent");
const duendeVerde = new Vilao("Duende Verde", "Norman Osbourne", 10);

const teia = new SuperPoder("soltar teia", 3);
const voar = new SuperPoder("voar", 3);
const forca = new SuperPoder("força", 5);

homemAranha.adicionaSuperPoder(teia);
homemAranha.adicionaSuperPoder(voar);
superHomem.adicionaSuperPoder(voar);
superHomem.adicionaSuperPoder(forca);
duendeVerde.adicionaSuperPoder(forca);

const confronto = new Confronto();
const vencedor = confronto.lutar(superHomem, duendeVerde);

if (vencedor === 1) {
  console.log(`${superHomem.nome} venceu o confronto!`);
} else if (vencedor === 2) {
  console.log(`${duendeVerde.nome} venceu o confronto!`);
} else {
  console.log("Houve um empate no confronto!");
}