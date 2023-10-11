class Personagem {
    #nome;
    #nomeVidaReal;
    #poderes;

    constructor (nome, nomeVidaReal) {
        this.#nome = nome
        this.#nomeVidaReal = nomeVidaReal
        this.#poderes = []
    }

    get nome() {
        return this.#nome;
    }

    set nome(novoNome) {
        this.#nome = novoNome
    }

    get nomeVidaReal() {
        return this.#nomeVidaReal;
    }

    set nomeVidaReal(novoNomeVidaReal) {
        this.#nomeVidaReal = novoNomeVidaReal
    }

    adicionaSuperPoder(superpoder){
    if (this.#poderes.length >= 4) {
        console.log(`O personagem ${this.#nome} atingiu o número máximo de poderes`);
        return
    }
        this.#poderes.push(superpoder) 
        console.log(`O poder ${superpoder} foi adicionado ao personagem ${this.#nome}. Lista de poderes: ${this.#poderes}`);
    }

    poderTotal() {

    }
}

module.exports = {Personagem}


const personagem1  = new Personagem ("Homem-Aranha", "Peter Park")
// console.log(personagem1.nome , personagem1.nomeVidaReal);
// personagem1.adicionaSuperPoder("soltar teia")
// personagem1.adicionaSuperPoder("andar em paredes")
// personagem1.adicionaSuperPoder("sentido apurado")
// personagem1.adicionaSuperPoder("teste")
// personagem1.adicionaSuperPoder("teste de limite")
