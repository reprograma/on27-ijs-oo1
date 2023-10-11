import { Personagem } from "./entregas/beatriz-locatelli/Classes/Personagem.js";
import { SuperPoder } from "./entregas/beatriz-locatelli/Classes/SuperPoder.js";
import { Confronto } from "./entregas/beatriz-locatelli/Classes/Confronto.js";

const superPoder1 = new SuperPoder("soltar teias", 3)
console.log(superPoder1.nomeDoPoder)
console.log(superPoder1.categoriaDoPoder)
const superPoder2 = new SuperPoder("andar em paredes", 2)
const superPoder3 = new SuperPoder("sentido apurado", 1)
// const superPoder4 = new SuperPoder("andar em paredes", 2)
const superPoder5 = new SuperPoder("força", 5)

const heroi1 = new Personagem("Homem-Aranha", "Peter Park")
const vilao1 = new Personagem("Duende-Verde", "Norman Osbourne")
console.log(heroi1.nome)
console.log(heroi1.nomeVidaReal)

heroi1.adicionaSuperPoder(superPoder1)
heroi1.adicionaSuperPoder(superPoder2)
heroi1.adicionaSuperPoder(superPoder3)
// heroi1.adicionaSuperPoder(superPoder4)
vilao1.adicionaSuperPoder(superPoder5)

heroi1.poderTotal()
vilao1.poderTotal()

const confronto1 = new Confronto
console.log(confronto1.lutar(heroi1, vilao1))



