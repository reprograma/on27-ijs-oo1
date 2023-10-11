// objeto pode ser criado sem parametros, por consequencia tambem sem constructor
class Confronto {
  lutar(superHeroi, vilao) {
    const poderTotalHeroi = superHeroi.poderTotal();
    const poderTotalVilao = vilao.poderTotal();
    if(poderTotalHeroi > poderTotalVilao) {
      return 1;
    } else if(poderTotalHeroi < poderTotalVilao) {
      return 2;
    } else {
      return 0;
    }
  }
}

module.exports = { Confronto }