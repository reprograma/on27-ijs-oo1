export class SuperPoder {
    #nome; #categoria;

    constructor(nome, categoria) {
        if(categoria !== Number) throw new Error("A categoria deve ser um número");
        
        this.#nome = nome;
        this.#categoria = categoria;
    }

    get nome() { return this.#nome }
    get categoria() { return this.#categoria }
}

export class Personagem {
    #nome; #nomeVidaReal; #poderes = [];

    constructor(nome, nomeVidaReal) {
        this.#nome = nome;
        this.#nomeVidaReal = nomeVidaReal;
    }

    get nome() { return this.#nome }
    get nomeVidaReal() { return this.#nomeVidaReal }

    adicionaSuperPoder(superPoder) {
        if(!(superPoder instanceof SuperPoder)) throw new Error("O super poder deve ser uma instância de SuperPoder");
        if(this.#poderes.find(poder => poder.nome === superPoder.nome)) throw new Error("O personagem já possui esse super poder");
        if(this.#poderes.length >= 4) throw new Error("O personagem já possui o máximo de 4 super poderes");
        
        this.#poderes.push(superPoder);
    }

    poderTotal() { return this.#poderes.reduce((soma, poder) => soma + poder.categoria, 0) }
}

export class Confronto {

    lutar(heroi, vilao) {
        if(!(heroi instanceof Personagem)) throw new Error("O herói deve ser uma instância de Personagem");
        if(!(vilao instanceof Personagem)) throw new Error("O vilão deve ser uma instância de Personagem");
        if(heroi === vilao) throw new Error("O herói e o vilão não podem ser a mesma pessoa");
        
        if(heroi.poderTotal() > vilao.poderTotal()) return console.log(`O herói ${heroi.nome} venceu a batalha contra o vilão ${vilao.nome}!`);
        if(heroi.poderTotal() < vilao.poderTotal()) return console.log(`O vilão ${vilao.nome} venceu a batalha contra o herói ${heroi.nome}!`);
        if(heroi.poderTotal() === vilao.poderTotal()) return console.log(`O confronto entre ${heroi.nome} e ${vilao.nome} terminou empatado!`);
    }

}