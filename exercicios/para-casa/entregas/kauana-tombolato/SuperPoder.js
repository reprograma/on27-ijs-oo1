export class SuperPoder {
  #nome
  #categoria

  constructor(nome, categoria) {
    this.#nome = nome
    this.#categoria = categoria
  }

  get nome() {
    return this.#nome
  }

  get categoria() {
    return this.#categoria
  }
}