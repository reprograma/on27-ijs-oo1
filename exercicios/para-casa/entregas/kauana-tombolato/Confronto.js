import { Personagem } from './Personagem.js'
import { SuperPoder } from './SuperPoder.js'

class Confronto {
  
  lutar(heroi, vilao) {
    if (heroi.poderTotal() > vilao.poderTotal()) {
      console.log(`${heroi.nome} venceu!`);
    } else if (heroi.poderTotal() < vilao.poderTotal()) {
      console.log(`${vilao.nome} venceu!`);
    } else {
      console.log('Empate!');
    }
  }  
}

const superPoder1 = new SuperPoder("Super Força", 10);
const superPoder2 = new SuperPoder("Voo", 8);
const superPoder3 = new SuperPoder("Invisibilidade", 6);

const personagem1 = new Personagem("Superman", "Clark Kent", [superPoder1, superPoder2]);
const personagem2 = new Personagem("Batman", "Bruce Wayne", [superPoder3]);
const personagem3 = new Personagem("Coringa", "Nome Coringa", [superPoder3, superPoder1]);

console.log(personagem1.nome);           
console.log(personagem1.nomeVidaReal);    
console.log(personagem2.nome);            
console.log(personagem2.nomeVidaReal);    

personagem1.adicionaSuperPoder(superPoder3); 
personagem1.adicionaSuperPoder("Invalid Poder"); 
personagem1.adicionaSuperPoder(superPoder3); 

console.log(personagem1.poderTotal()); 
console.log(personagem2.poderTotal());

const confronto = new Confronto;
confronto.lutar(personagem2, personagem3);