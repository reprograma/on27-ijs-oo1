import { Personagem } from "./Personagem.js";

export class SuperHeroi extends Personagem {
  constructor(nome, nomeVidaReal) {
    super(nome, nomeVidaReal);
  }

  poderTotal() {
    const novoPoderTotal = super.poderTotal() * 1.1;
    return novoPoderTotal;
  }
}
