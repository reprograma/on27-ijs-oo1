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
  get poderes() {
    return this.#poderes;
  }

  adicionaSuperPoder(SuperPoder) {
    if(!(SuperPoder instanceof SuperPoder)){
      console.log("Super Poder inválido");
      return;
  }
    if (this.#poderes.length < 4) {
      this.#poderes.push(SuperPoder);
      console.log(`O poder: "${SuperPoder.nome}" foi adicionado aos poderes de ${this.#nome}`);
    } else {
      console.log(`${this.#nome} já possui o máximo de poderes permitidos.`);
    }
  }
  poderTotal() {
    let total = 0;
    this.#poderes.forEach(SuperPoder => {
      total += SuperPoder.categoria;
    });
    console.log(`O poder total de ${this.#nome} é ${total}`);
  } 
}

