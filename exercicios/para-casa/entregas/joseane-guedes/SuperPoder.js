export class SuperPoder {
    #nome;
    #categoria;

    constructor(nome, categoria) {
        if (typeof nome === 'string' && typeof categoria === 'number') {
            this.#nome = nome;
            this.#categoria = categoria;
        } else {
            throw new TypeError('O nome deve ser uma string e categoria deve ser um número.');
        }
    }

    get nome() {
        return this.#nome;
    }

    get categoria() {
        return this.#categoria;
    }
}
