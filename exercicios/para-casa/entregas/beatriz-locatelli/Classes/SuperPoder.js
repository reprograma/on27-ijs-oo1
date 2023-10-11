export class SuperPoder{
    #nomeDoPoder;
    #categoriaDoPoder;

    constructor(nomeDoPoder, categoriaDoPoder){
        this.#nomeDoPoder = nomeDoPoder;
        this.#categoriaDoPoder = categoriaDoPoder;
    }

    get nomeDoPoder(){
        return this.#nomeDoPoder
    }
    
    get categoriaDoPoder(){
        return this.#categoriaDoPoder
    }

}