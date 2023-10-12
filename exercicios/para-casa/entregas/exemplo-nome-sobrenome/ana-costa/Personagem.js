import {SuperPoder} from './SuperPoder.js';

export class Personagem {
  #nome;
  #nomeVidaReal;
  #poderes = [];

  constructor(nome, nomeVidaReal){
    this.#nome = nome;
    this.#nomeVidaReal = nomeVidaReal
  }

  get nome() {
    return this.#nome;
  }

  get nomeVidaReal() {
    return this.#nomeVidaReal;
  }

  adicionaSuperPoder(superPoder) {
    if(!(superPoder instanceof SuperPoder)) {
      throw new Error(`Super poder inválido`)
    }

    if(this.#poderes.length === 4) {
      throw new Error('Limite máximo de poderes excedido')
    }

    this.#poderes.push(superPoder);

    return `Poder ${superPoder.nome} com categoria ${superPoder.categoria} adicionado com sucesso`
  }

  poderTotal() {
    let poderTotal = 0;
    this.#poderes.forEach(poder => poderTotal += poder.categoria);
    return poderTotal;
  }
}