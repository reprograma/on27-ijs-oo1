import { SuperPoder } from "./SuperPoder.js";

export class Personagem {
  #nome;
  #nomeVidaReal;
  #poderes;

  constructor(nome, nomeVidaReal) {
    this.#nome = nome;
    this.#nomeVidaReal = nomeVidaReal;
    this.#poderes = [];
  }

  get nome() {
    return this.#nome;
  }

  get nomeVidaReal() {
    return this.#nomeVidaReal;
  }

  adicionaSuperPoder(superPoder) {
    if(!(superPoder instanceof SuperPoder)){
      console.log('Super poder não existe!')
    }
    if (this.#poderes.length >= 4) {
      console.log(`O personagem ${this.#nome} já possui o máximo de poderes.`);
      return
    }
    this.#poderes.push(superPoder);
    console.log(`O personagem ${this.#nome} possue ${superPoder.nome}`)
  }

  poderTotal() {
    const poderSum = this.#poderes.reduce((total, poder) => total + poder.categoria, 0);
    console.log(`O poder total do ${this.#nome} é de: ${poderSum}`);
    return poderSum;
  }
}
