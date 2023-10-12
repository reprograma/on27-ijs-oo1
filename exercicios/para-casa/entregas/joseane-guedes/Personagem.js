export class Personagem {
    #nome;
    #nomeVidaReal;
    #poderes;

    constructor(nome, nomeVidaReal) {
        this.#nome = nome;
        this.#nomeVidaReal = nomeVidaReal;
        this.#poderes = [];
    }

    get nome() {
        return this.#nome;
    }

    get nomeVidaReal() {
        return this.#nomeVidaReal;
    }

    adicionaSuperPoder(superPoder, mensagemErro = 'O personagem atingiu o número máximo de poderes: 4!') {
        const maxPoderes = 4;

        if (Array.isArray(this.#poderes) && this.#poderes.length < maxPoderes) {
            this.#poderes.push(superPoder);
        } else {
            throw new Error(mensagemErro);
        }
    }

    poderTotal() {
        return this.#poderes.reduce((total, poder) => total + poder.categoria, 0);
    }
}



