class Animal{
    #name;
    race;
    age;
    qtdPaw;
    color;

    constructor(name, age, race, paw, color){
        this.#name = name;
        this.age = age;
        this.race = race;
        this.qtdPaw = paw;
        this.color = color;
    }

    comer(){
        console.log(`O animal da raça ${this.race}, chamado ${this.#name}, está comendo.`)
    }

    som(){
        console.log(`Emite som.`)
    }

    dormir(){
        console.log(`Dorme.`)
    }

    cagar(){
        console.log(`Caga.`)
    }

    get nome(){
        return this.#name;
    }

    set nome(newName){
        return this.#name = newName;
    }
}

const cow = new Animal('Mococa', 3, 'srd', 4, 'preta e branca')
console.log(cow)
console.log(cow.name) // undefined pq o name é um atributo privado
console.log(cow.nome) // mostra o nome pq estou chamando o método get
cow.nome = 'bilu'
console.log(cow.nome)
