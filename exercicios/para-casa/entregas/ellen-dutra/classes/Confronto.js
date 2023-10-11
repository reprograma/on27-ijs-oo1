export class Confronto {
  lutar(superheroi, vilao) {
    if (superheroi.poderTotal() > vilao.poderTotal()) {
      return 1;
    } else if (vilao.poderTotal() > superheroi.poderTotal()) {
      return 2;
    } else {
      return 0;
    }
  }
}
