const { SuperPoder } = require('./superPoder');

class Personagem {
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

  adicionaSuperPoder(superPoder) {
    if(!(superPoder instanceof SuperPoder)) {
      console.log('Super Poder inválido.');
      return;
    }
    if(this.#poderes.length >= 4) {
      console.log(`O personagem ${this.#nome} já atingiu o limite de 4 poderes.`);
      return;
    }
    this.#poderes.push(superPoder);
    console.log(`Super Poder *${superPoder.nome}* adicionado ao personagem ${this.#nome}.`);
  }

  poderTotal() {
    let soma = this.#poderes.reduce((total, superPoder) => {
      return total + superPoder.categoria;
    }, 0);
    return soma;
    console.log(`O poder total do personagem ${this.#nome} é ${soma}`);
  }
}

module.exports = { Personagem }