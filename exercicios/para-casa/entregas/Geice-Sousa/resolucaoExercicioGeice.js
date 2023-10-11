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
    if(this.#powers.includes(power)) console.log(
      `O poder ${power} já existe na lista.`);
      
    if (this.#powers.length <= 3) {
      // verificar se o poder já está incluso usar includes
      return this.#powers.push({
        poder: power.getName,
        categoria: power.getCategory
      });
    } else {
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

const homemAranha = new Character("Homem-Aranha", "Peter Park");
const poderAranha1 = new SuperPower("soltar teia", 3);
const poderAranha2 = new SuperPower("andar em paredes", 2);
const poderAranha3 = new SuperPower("sentido apurado", 1);
homemAranha.addSuperPower(poderAranha1);
homemAranha.addSuperPower(poderAranha2);
homemAranha.addSuperPower(poderAranha3);

const octopus = new Character("Octopus", "Otto Octavius");
const octopusPoder1 = new SuperPower("tentáculos indestrutíveis ", 5);
const octopusPoder2 = new SuperPower("velocidade", 1);
octopus.addSuperPower(octopusPoder1);
octopus.addSuperPower(octopusPoder2);

console.log(`O ${homemAranha.getNameHero} se chama ${homemAranha.getNameReal}. Seus poderes são:${homemAranha.getPowers}.`);
console.log(homemAranha.getPowers);

export { SuperPower, Character, Confronto}
