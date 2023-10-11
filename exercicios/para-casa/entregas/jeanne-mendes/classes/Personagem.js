import { SuperPoder } from "./SuperPoder.js";

export class Personagem{
    #nome;
    #nomevidaReal;
    #poderes;

    constructor(nome, nomeVidaReal){
        this.#nome = nome;
        this.#nomevidaReal = nomeVidaReal;
        this.#poderes = [];
    }

    get nome(){
        return this.#nome;
    }

    get nomeVidaReal(){
        return this.#nomevidaReal;
    }

    get poderes(){
        return this.#poderes;
    }

    adicionaSuperPoder(poder){
        if(!(poder instanceof SuperPoder))
            console.log("Poder inexistente")
        else if(this.#poderes.length >= 4)
                console.log(`O ${this.#nome} já atingiu o limite máximo de 4 poderes.`);
        else{
                this.poderes.push({poder: poder.nome, categoria: poder.categoria});
                console.log(`O poder ${poder.nome} de categoria ${poder.categoria} foi adicionado ao personagem ${this.#nome}`)
        }
    }

    poderTotal(){
        let soma = 0;
        this.#poderes.forEach(SuperPoder => { soma += SuperPoder.categoria;});
        return soma;
    }
}
