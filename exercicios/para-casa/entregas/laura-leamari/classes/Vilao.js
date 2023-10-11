import { Personagem } from "./Personagem.js";

export class Vilao extends Personagem {
  tempoDePrisao

  constructor(nome, nomeVidaReal, poderes, tempoDePrisao) {
    super(nome, nomeVidaReal, poderes);
    this.tempoDePrisao = tempoDePrisao;
  }

  get tempoDePrisao() {
    return this.tempoDePrisao;
  }
}