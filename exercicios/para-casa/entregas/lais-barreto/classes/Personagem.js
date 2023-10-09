const { SuperPoder } = require("./SuperPoder.js");

class Personagem {
  #nome;
  #nomeVidaReal;
  #poderes = [];

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
    if (!(superPoder instanceof SuperPoder)) {
      console.log("Digite um super poder válido");
      return;
    }

    if (this.#poderes.length >= 4) {
      console.log(`O ${this.#nome} já possuiu 4 poderes`);
      return;
    }
    if (this.#poderes.includes(superPoder)) {
      console.log(`O ${this.#nome} já possui o super poder ${superPoder.nome}`);
      return;
    }

    this.#poderes.push(superPoder);
    console.log(
      `o super poder ${superPoder.nome} foi adicionado ao personagem ${
        this.#nome
      }`
    );
  }

  poderTotal() {
    const total = this.#poderes.reduce((acumulador, superPoder) => {
      return acumulador + superPoder.categoria;
    }, 0);
    console.log(total);
  }
}

module.exports = { Personagem };
