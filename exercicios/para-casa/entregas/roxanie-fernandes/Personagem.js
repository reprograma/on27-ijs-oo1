const { SuperPoder } = require("./SuperPoder.js");

class Personagem {
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

  adicionaSuperPoder(superpoder) {
    if (!(superpoder instanceof SuperPoder)) {
      console.log("superpoder não é válido");
      return;
    }

    if (this.#poderes.includes(superpoder)) {
      console.log(`O personagem ${this.nome} já possuí este poder`);
      return;
    }

    if (this.#poderes.length >= 4) {
      console.log(
        `O personagem ${this.#nome} atingiu o número máximo de poderes`
      );
      return;
    } else {
      this.#poderes.push(superpoder);
      console.log(
        `O poder "${superpoder.nome}" foi adicionado ao personagem ${
          this.#nome
        }. (Lista de poderes: ${this.#poderes.map(
          (superpoder) => superpoder.nome
        )})`
      );
    }
  }

  poderTotal() {
    let total = 0;
    for (const superpoder of this.#poderes) {
      total += superpoder.categoria;
    }
    console.log(`O poder total do personagem ${this.nome} é ${total}`);
    return total;
  }
}

module.exports = { Personagem };
