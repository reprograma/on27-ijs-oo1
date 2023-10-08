const {SuperPoder} = require('./SuperPoder.js')

class Personagem{

    #nome;
    #nomeVidaReal;
    #poderes = [];

    constructor (nome, nomeVidaReal){
        this.#nome = nome;
        this.#nomeVidaReal = nomeVidaReal;
    }

    get nome(){
        return this.#nome;
    }

    set nome(nome){
        this.#nome = nome;
    }

    get nomeVidaReal(){
        return this.#nomeVidaReal;
    }

    set nomeVidaReal(nomeVidaReal){
        this.#nomeVidaReal = nomeVidaReal;
    }

    adicionaSuperPoder(superPoder){
        if(!(superPoder instanceof SuperPoder)){
            console.log("Super Poder inválido");
            return;
        }

        const qtdSuperPoder = this.#poderes.length;

        if(qtdSuperPoder<4){
            this.#poderes.push(superPoder);
            console.log(`O poder "${superPoder.nome}" foi adicionado ao ${this.nome} com sucesso!`);
        }else{
            console.log("Um personagem pode ter, no máximo, 4 poderes");
        }   
    }

    poderTotal(){
        let soma = 0;
        this.#poderes.forEach(poder => {
            soma += poder.categoria;
        });
        return soma;
    }

}

module.exports = {Personagem};