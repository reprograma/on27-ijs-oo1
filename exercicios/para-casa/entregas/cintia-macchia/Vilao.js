const { Personagem } = require("./Personagem");

class Vilao extends Personagem{
    tempoDePrisao 

    constructor(nome, nomeVidaReal, tempoDePrisao){
        super(nome, nomeVidaReal)
        this.tempoDePrisao = tempoDePrisao
    }

    get tempoDePrisao(){
      return  this.tempoDePrisao
    }
}

module.exports = { Vilao }