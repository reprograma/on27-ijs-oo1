import { Personagem } from "./Personagem.js";

export class Confronto {

    lutar(personagem1, personagem2) {
        const personagem1PoderTotal = personagem1.poderTotal()
        const personagem2PoderTotal = personagem2.poderTotal()

        if (!(personagem1 && personagem1 instanceof Personagem)) {
            console.log("Personagens não econtrados.")
        }
        if (personagem1PoderTotal > personagem2PoderTotal) {
            console.log(`Resultado do confronto: O personagem ${personagem1.nome} venceu!`)
            return 1

        } else if (personagem1PoderTotal < personagem2PoderTotal) {
            console.log(`Resultado do confronto: O personagem ${personagem2.nome} venceu!`)
            return 2
            
        } else {
            personagem1PoderTotal === personagem2PoderTotal
            console.log(`Resultado do confronto: empate!`)
            return 0
        }
    }
}
