import { SuperPower, Character, Confronto } from "./resolucaoExercicioGeice.js";

const poderAranha1 = new SuperPower('soltar teia', 3)
const poderAranha2 = new SuperPower('andar em paredes', 2)
const poderAranha3 = new SuperPower('sentido apurado', 1)

console.log(`Poder: ${poderAranha1.getName} - Categoria: ${poderAranha1.getCategory}`);
console.log(`Poder: ${poderAranha2.getName} - Categoria: ${poderAranha2.getCategory}`);
console.log(`Poder: ${poderAranha3.getName} - Categoria: ${poderAranha3.getCategory}`);
console.log();

const homemAranha = new Character('Homem-Aranha', 'Peter Park')
const vilao = new Character('Duende-Verde', 'Norman Osbourne')

homemAranha.addSuperPower(poderAranha1.getName)
homemAranha.addSuperPower(poderAranha2.getName)
homemAranha.addSuperPower(poderAranha3.getName)

console.log(`O ${homemAranha.getNameHero} se chama ${homemAranha.getNameReal}. Seus poderes são: ${homemAranha.getPowers}`);
console.log();
console.log(`O ${vilao.getNameHero} se chama ${vilao.getNameReal}. Seus poderes são: ${homemAranha.getPowers}`);


console.log(poderAranha3.getCategory);
console.log(poderAranha3.getName);



// const luta = new Confronto()
// luta.lutar()