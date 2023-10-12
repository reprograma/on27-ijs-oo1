class SuperPoder {
  #nome;
  #categoria;

  constructor(nome, categoria) {
    this.#nome = nome;
    this.#categoria = categoria;
  }

  get nome() {
    return this.#nome;
  }

  get categoria() {
    return this.#categoria;
  }
}

class Personagem {
  #nome;
  #nomeVidaReal;
  #poderes = [];

  constructor(nome, nomeVidaReal, poderes) {
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

  get poderes() {
    return this.#poderes;
  }

  adicionaSuperPoder(poder) {
    if (this.#poderes.length === 4) {
      throw new Error("Esse personagem já tem 4 poderes.");
    }
    this.#poderes.push(poder);
    console.log(`Você adicionou o poder ${poder.nome} à lista de poderes.`);
  }

  poderTotal() {
    const poderTotal = this.poderes.reduce(
      (acumulador, valorAtual) => acumulador + valorAtual.categoria,
      0
    );
    console.log(`O poder total de ${this.nome} é ${poderTotal}.`);
    return poderTotal;
  }
}

class Confronto {
  lutar(heroi, vilao) {
    if (!heroi.nome || !vilao.nome) {
      throw new Error("Os dois personagens precisam ser válidos!");
    }
    const poderLutador1 = heroi.poderTotal();
    const poderLutador2 = vilao.poderTotal();
    if (poderLutador1 > poderLutador2) {
      console.log(`${heroi.nome} vence ${vilao.nome}!`);
    } else if (poderLutador1 < poderLutador2) {
      console.log(`${vilao.nome} vence ${heroi.nome}!`);
    } else console.log("Os lutadores estão empatados!");
  }
}

export { SuperPoder, Personagem, Confronto };
