class Confronto {
  lutar(heroi, vilao) {
    const poderTotalHeroi = heroi.poderTotal();
    const poderTotalVilao = vilao.poderTotal();

    if (poderTotalHeroi > poderTotalVilao) {
      console.log(`O herói ${heroi.nome} ganhou a batalha`);
      return;
    } else if (poderTotalHeroi < poderTotalVilao) {
      console.log(`O vilão ${vilao.nome} ganhou a batalha`);
      return;
    } else {
      console.log("Empate");
    }
  }
}

module.exports = { Confronto };
