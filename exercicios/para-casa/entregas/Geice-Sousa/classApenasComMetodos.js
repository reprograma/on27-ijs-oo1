class Confronto {
  lutar(personagem1, personagem2) {
    if (personagem1.powerTotal() === personagem2.powerTotal()) {
      console.log("Disputa empatada.");
      return 0;
    }
    if (personagem1.powerTotal() >= personagem2.powerTotal()) {
      console.log(`${personagem1}, o herói, venceu`);
      return 1;
    }
    if (personagem1.powerTotal() <= personagem2.powerTotal()) {
      console.log(`${personagem2}, o vilão, venceu.`);
      return 2;
    }
    return;
  }
}

// sem constructor, a gente cria a const com new confronto normalmente e chama o método com os parâmetros
const homemAranhaXoctopos = new Confronto();
homemAranhaXoctopos.lutar(homemAranha, octopus); 
