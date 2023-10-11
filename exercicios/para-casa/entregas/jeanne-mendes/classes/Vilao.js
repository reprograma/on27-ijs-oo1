import { Personagem } from "./Personagem.js";

export class Vilao extends Personagem{
    tempoDePrisao;

    constructor(nome, nomeVidaReal, tempoDePrisao){
        super(nome, nomeVidaReal);
        this.tempoDePrisao = tempoDePrisao;
    }

}