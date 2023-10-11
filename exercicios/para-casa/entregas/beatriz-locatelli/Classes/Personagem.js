import { SuperPoder } from "./SuperPoder.js";

export class Personagem {
    #nome;
    #nomeVidaReal;
    #poderes = [];

    constructor(nome, nomeVidaReal) {
        this.#nome = nome;
        this.#nomeVidaReal = nomeVidaReal;
    }

    get nome() {
        return this.#nome
    }

    get nomeVidaReal() {
        return this.#nomeVidaReal
    }

    adicionaSuperPoder(superPoder) {
        if (!(superPoder instanceof SuperPoder)) {
            throw ('superPoder não é uma instância de SuperPoder');
        }
        if (this.#poderes.length > 3) {
            throw ('Não é possível adicionar mais poderes á esse personagem.');
        }
        if (this.#poderes.some((poder) => poder.nomeDoPoder === superPoder.nomeDoPoder)){
            throw (`O poder "${superPoder.nomeDoPoder}" já foi adicionado ao personagem ${this.#nome}`)
        }
        this.#poderes.push(superPoder)
        console.log(`Poder "${superPoder.nomeDoPoder}", de categoria ${superPoder.categoriaDoPoder}, adicionado ao personagem ${this.#nome}!`)
    }

    poderTotal() {
        const totalPoder = this.#poderes.reduce((total, superPoder) => total + superPoder.categoriaDoPoder, 0);
        console.log(`O poder total do personagem ${this.#nome} é ${totalPoder}!`)
        return totalPoder
    }
    
}