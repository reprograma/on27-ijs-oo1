class SuperPower {
  #name;
  #category;

  constructor(name, category) {
    this.#name = name;
    this.#category = category;
  }

  get getName() {
    return this.#name;
  }

  set setName(newName) {
    return (this.#name = newName);
  }

  get getCategory() {
    return this.#category;
  }

  set setCategory(newCategory) {
    return (this.#category = newCategory);
  }
}

class Character {
  #name;
  #nameRealLife;
  #powers;

  constructor(nameHero, nameReal) {
    this.#name = nameHero;
    this.#nameRealLife = nameReal;
    this.#powers = [];
  }

  get getNameHero() {
    return this.#name;
  }

  get getNameReal() {
    return this.#nameRealLife;
  }

  get getPowers() {
    return this.#powers;
  }

  addSuperPower(power) {
    if((this.#powers.find(powerIncludes => powerIncludes.poder === power.getName))) {
      console.log(
      `O poder "${power.getName}" já existe na lista.`);
      return
    }
      
    if (this.#powers.length < 4) {
      // verificar se o poder já está incluso usar includes
      return this.#powers.push({
        poder: power.getName,
        categoria: power.getCategory
      });
    } 
    
    else {
      console.log(
        `Não é possível inserir mais nenhum poder para ${this.#name}, pois já possui 4.`
      );
    }
  }

  powerTotal() {
    const sumPower = this.#powers
      .map((power) => power.categoria)
      .reduce((accumulator, currentValue) => {
        return accumulator + currentValue;
      }, 0);

    return sumPower;
  }
}

class Confronto {
  constructor(personagem1, personagem2) {
    if (personagem1 instanceof Character && personagem2 instanceof Character) {
      this.personagem1 = personagem1;
      this.personagem2 = personagem2;
    } else {
      console.log(
        "Os personagem que irão lutar devem estar cadastrados na class Character."
      );
      return;
    }
  }

  lutar() {
    if (this.personagem1.powerTotal() === this.personagem2.powerTotal()) {
      console.log("Disputa empatada.");
      return 0;
    }
    if (this.personagem1.powerTotal() >= this.personagem2.powerTotal()) {
      console.log(`${this.personagem1.getNameHero} venceu.`);
      return 1;
    }
    if (this.personagem1.powerTotal() <= this.personagem2.powerTotal()) {
      console.log(`${this.personagem2.getNameHero} venceu.`);
      return 2;
    }
    return;
  }
}

export { SuperPower, Character, Confronto}
