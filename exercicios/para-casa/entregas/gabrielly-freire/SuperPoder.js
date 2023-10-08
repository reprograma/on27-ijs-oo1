class SuperPoder{

    #nome;
    #categoria;

    constructor (nome, categoria){
        this.#nome = nome;
        this.#categoria = categoria;
    }

    get nome(){
        return this.#nome;
    }

    set nome(nome){
        this.#nome = nome;
    }

    get categoria(){
        return this.#categoria;
    }

    set categoria(categoria){
        this.#categoria = categoria;
    }
    
}

module.exports = {SuperPoder}