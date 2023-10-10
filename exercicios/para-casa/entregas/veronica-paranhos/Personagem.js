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

  adicionaSuperPoder({ nome, categoria }) {
    if (this.#poderes.some((poder) => poder.nome === nome))
      return console.log("Poder já foi adicionado!");

    if (this.#poderes.length < 4) {
      this.#poderes.push({ nome, categoria });
    } else {
      console.log("A lista de poderes já possui o limite máximo de 4 poderes.");
    }
  }

  poderTotal() {
    const somaPoderes = this.#poderes.reduce(
      (total, poder) => total + poder.categoria,
      0
    );
    return somaPoderes;
  }
}
