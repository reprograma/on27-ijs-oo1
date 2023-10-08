class SuperPower{
    #name;
    #category;

    constructor(name, category){
        this.#name = name;
        this.#category = category;
    }

    get getName(){
        return this.#name;
    }

    set setName(newName){
        return this.#name = newName;
    }

    get getCategory(){
        return this.#category;
    }
    
    set setCategory(newCategory){
        return this.#category = newCategory;
    }
}

class Character{
    #name;
    #nameRealLife;
    #powers;

    constructor(nameHero, nameReal){
        this.#name = nameHero;
        this.#nameRealLife = nameReal;
        this.#powers = []
    }

    get getNameHero(){
        return this.#name;
    }

    get getNameReal(){
        return this.#nameRealLife;
    }

    get getPowers(){
        return this.#powers;
    }

    addSuperPower(power){
        if (this.#powers.length <= 3){
            return this.#powers.push(` ${power}`)
        } 
        else{
            console.log('Não é possível inserir mais nenhum poder para este personagem, ele já possui 4.')
        }
    }

    powerTotal(){
        const total = this.#powers.reduce((accumulator, currentValue)=>{
            return accumulator + currentValue
        }, 0)
        return total
    }
}

class Confronto{
    constructor(personagem1, personagem2){
        if (personagem1 instanceof Character && personagem2 instanceof Character){
            this.personagem1 = personagem1;
            this.personagem2 = personagem2;
        } 
        else {
            console.log('Os personagem que irão lutar devem estar cadastrados na class Character.');
            return
        }
    }

    lutar(personagem1, personagem2){
        this.personagem1 = personagem1;
        this.personagem2 = personagem2;

        if (personagem1.powerTotal() === personagem2.powerTotal()) {
            console.log('Disputa empatada.');
            return 0
        }
        
        if (personagem1.powerTotal() >= personagem2.powerTotal()){
            console.log(`${personagem1}, o herói, venceu`);
            return 1
        }

        if (personagem1.powerTotal() <= personagem2.powerTotal()){
            console.log(`${personagem2}, o vilão, venceu.`);
            return 2
        }
    }
}



// export { SuperPower, Character, Confronto}