import { Personagem } from "./Personagem.js";

export class Confronto {
  lutar(superHeroi, vilao) {
    if (!(superHeroi instanceof Personagem))
      return console.log("O super-herói é inválido!");

    if (!(vilao instanceof Personagem))
      return console.log("O vilão é inválido!");

    const poderTotalDoHeroi = superHeroi.poderTotal();
    const poderTotalDoVilao = vilao.poderTotal();

    if (poderTotalDoHeroi > poderTotalDoVilao)
      return console.log("1: O super-herói ganha a batalha");
    if (poderTotalDoHeroi < poderTotalDoVilao)
      return console.log("2: O vilão ganha a batalha");
    if (poderTotalDoHeroi === poderTotalDoVilao)
      return console.log("0: Empate!");
  }
}
