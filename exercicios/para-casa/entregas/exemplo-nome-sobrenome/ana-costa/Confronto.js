import { Personagem } from "./Personagem";

export class Confronto {

  lutar(superheroi, vilao) {
    if(!(superheroi instanceof Personagem) || !(vilao instanceof Personagem)){
      throw new Error('super heroi e vilão devem ser instância de personagem')
    }
    const poderSuperheroi = superheroi.poderTotal();
    const poderVilao = vilao.poderTotal();
    if (poderSuperheroi > poderVilao) {
      return 1;
    } else if (poderSuperheroi < poderVilao) {
      return 2;
    } else {
      return 0;
    }
  }
}