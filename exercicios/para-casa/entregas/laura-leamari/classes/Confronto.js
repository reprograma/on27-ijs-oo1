export class Confronto {
  lutar(superheroi, vilao) {
    const poderTotalHeroi = superheroi.poderTotal();
    const poderTotalVilao = vilao.poderTotal();

    if (poderTotalHeroi > poderTotalVilao) {
      return 1; // Super-herói vence
    } else if (poderTotalVilao > poderTotalHeroi) {
      return 2; // Vilão vence
    } else {
      return 0; // Empate
    }
  }
}