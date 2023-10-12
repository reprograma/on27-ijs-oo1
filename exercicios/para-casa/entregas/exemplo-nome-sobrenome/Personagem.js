


import { SuperPoder } from './SuperPoder.js';

export class Personagem {
  #nome;
  #nomeVidaReal;
  #poderes = [];

  constructor(nome, nomeVidaReal) {
    this.#nome = nome;
    this.#nomeVidaReal = nomeVidaReal;
  }

  get nome() {
    return this.#nome;
  }

  get nomeVidaReal() {
    return this.#nomeVidaReal;
  }

  adicionaSuperPoder(superpoder) {
    if (!(superpoder instanceof SuperPoder)) {
      console.log("Sem autorização");
      return;
    }

    if (this.#poderes.length <= 4) {
      this.#poderes.push(superpoder);
      console.log(`Foi adicionado ao ${this.#nome} o super poder: ${superpoder.nome} e adicinado a categoria: ${superpoder.categoria}`);
    } else {
      console.log("Personagem só pode ter no máximo 4 poderes");
    }
  }


poderTotal() {
    return this.#poderes.reduce((total, superpoder) => total + superpoder.categoria, 0);
  }
  
}

