class SuperPoder {
    #nome;
    #categoria;

    constructor(nome, categoria) {
        this.#nome = nome;
        this.#categoria = categoria;
    }

    get nome() {
        return this.#nome;
    }

    set nome(newNome) {
        return this.#nome = newNome;
    }

    get categoria() {
        return this.#categoria;
    }
}

class Personagem {
    #nome;
    #nomeVidaReal;
    #poderes = [];

    constructor(nome, nomeVidaReal, poderes) {
        this.#nome = nome;
        this.#nomeVidaReal = nomeVidaReal;
        this.#poderes = poderes;
    }

    get nome(){
        return this.#nome;
    }

    get nomeVidaReal(){
        return this.#nomeVidaReal
    }

    get poderes(){
        return this.#poderes
    }

    set poderes(newPoderes){
        return this.#poderes = newPoderes
    }

    adicionaSuperPoder(poder) {
        this.poderes.push(poder);
    }

    usarSuperPoder(superPoder) {
        console.log(`${this.nome} está usando o super poder: ${superPoder.nome}`);
    }

    poderTotal(listaPoderes){
        let total = 0;

        for (const poder of listaPoderes) {
            total += poder.categoria;
        }

        return total;
    }
}

const listaPoderes = [
    { categoria: 5 },
    { categoria: 5 },
    { categoria: 3 },
];


const heroi = new SuperPoder('Homem-Aranha', 'Peter Park');

const personagem = new Personagem('Duende-verde', 'Norman Ousbourne',  []);

const superPoder1 = new SuperPoder('Força', 'Mental');

personagem.adicionaSuperPoder(superPoder1);
personagem.usarSuperPoder(superPoder1);

console.log(heroi.nome);
console.log(heroi.poderes);
console.log(heroi.categoria);
console.log(personagem.poderes);

const super2 = new Personagem('Sopro congelante', 5);

const totalPoderes = super2.poderTotal(listaPoderes);
console.log(`O poder total so super-herói é: ${totalPoderes}`); //soma dos poderes
