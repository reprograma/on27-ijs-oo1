class SuperPoder {
    #nome;
    #categoria;

    constructor(nome, categoria) {
        this.#nome = nome;
        this.#categoria = categoria
    }

    get nome() {
        return this.#nome;
    }

    set nome(novoNome) {
        this.#nome = novoNome
    }

    get categoria() {
        return this.#categoria;
    }

    set categoria(novaCategoria) {
        this.#categoria = novaCategoria
    }
}
module.exports = {SuperPoder}

