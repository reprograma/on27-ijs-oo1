export class Confronto {
    lutar(superheroi, vilao) {
        const poderSuperheroi = superheroi.calcularPoderTotal();
        const poderVilao = vilao.calcularPoderTotal();

        if (poderSuperheroi > poderVilao) {
            return 1;
        } else if (poderSuperheroi < poderVilao) {
            return 2;
        } else {
            return 0;
        }
    }
}


