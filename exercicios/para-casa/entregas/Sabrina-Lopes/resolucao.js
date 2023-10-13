export class SuperPoder {
  #nome;
  #categoria;

  constructor(nome, categoria) {
    if (typeof categoria !== 'number') {
      throw new Error("A categoria deve ser um número");
    }

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

  adicionarSuperPoder(superPoder) {
    if (this.#poderes.length < 4) {
      this.#poderes.push(superPoder);
    } else {
      console.log(`O ${this.#nome} já tem o número máximo de poderes (4).`);
    }
  }

  poderTotal() {
    let total = 0;
    for (const superPoder of this.#poderes) {
      total += superPoder.categoria;
    }
    return total;
  }
}

export class Confronto {
  static lutar(heroi, vilao) {
    const poderHeroi = heroi.poderTotal();
    const poderVilao = vilao.poderTotal();

    if (poderHeroi > poderVilao) {
      return console.log(`O herói ${heroi.nome} venceu a batalha contra o vilão ${vilao.nome}!`);
    } else if (poderVilao > poderHeroi) {
      return console.log(`O vilão ${vilao.nome} venceu a batalha contra o herói ${heroi.nome}!`);
    } else {
      return console.log(`O confronto entre ${heroi.nome} e ${vilao.nome} terminou empatado!`);
    }
  }
}
