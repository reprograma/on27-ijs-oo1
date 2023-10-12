export class Personagem{
  #nomePersonagem;
  #nomeReal;
  #poderes = [];

  constructor(nomePersonagem, nomeReal) {
    this.#nomePersonagem = nomePersonagem;
    this.#nomeReal = nomeReal;
  }

  get nomePersonagem() {
    return this.#nomePersonagem;
  }
  
  get nomeReal() {
    return this.#nomeReal;
  }
  
   adicionaSuperPoder(SuperPoder) {
    if (this.#poderes.length <= 4) {
      this.#poderes.push(SuperPoder);
      console.log(`${SuperPoder.nomePoder} foi adicionado`);
    } else {
      throw 'Não é possível adicionar mais de 4 superpoderes';
    }
  }

    poderTotal() {
      let somaPoder = this.#poderes.reduce(
        (total, poder) => { return total + poder.categoriaPoder }, 0
      );

      return `O poder total do ${this.nomePersonagem} é ${somaPoder}`
    }

}
