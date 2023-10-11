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
      throw 'Não é um SuperPoder';
    }

    if (this.#poderes.length < 4) {
      this.#poderes.push(superpoder);
      console.log(`${superpoder.nome} foi adicionado`);
    } else {
      throw 'Não é possível adicionar mais de 4 superpoderes';
    }
  }

  poderTotal() {
    let soma = this.#poderes.reduce((total, poder) => {
      return total + poder.categoria;
    }, 0);

    return `O poder total é ${soma}`;
  }
}
