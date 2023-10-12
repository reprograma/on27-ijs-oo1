export class SuperPoder {
    #nomePoder;
    #categoriaPoder;

    constructor(nomePoder, categoriaPoder ) {
      this.#nomePoder = nomePoder;
      this.#categoriaPoder = categoriaPoder;
   
    }

    get nomePoder() {
      return this.#nomePoder;
    }
    
    get categoriaPoder() {
      return this.#categoriaPoder;
    }
    
}
