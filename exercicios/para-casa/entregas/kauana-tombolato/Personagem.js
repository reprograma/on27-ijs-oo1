import { SuperPoder } from './SuperPoder.js'

export class Personagem {
  #nome
  #nomeVidaReal
  #poderes

  constructor(nome, nomeVidaReal, poderes) {
    this.#nome = nome
    this.#nomeVidaReal = nomeVidaReal
    this.#poderes = poderes || []
  }

  get nome() {
    return this.#nome
  }

  get nomeVidaReal() {
    return this.#nomeVidaReal
  }

  adicionaSuperPoder(superPoder) {
    if (!(superPoder instanceof SuperPoder)) {
      console.log('Não é possível adicionar esse poder')
      return
    }

    if (this.#poderes >= 4) {
      console.log('Não é possível adicionar mais poderes')
    } else {
      this.#poderes.push(superPoder)
      console.log('Poder adicionado com sucesso')
    }
  }

  poderTotal() {
    return this.#poderes.reduce((total, poder) => total + poder.categoria, 0);
  }
}