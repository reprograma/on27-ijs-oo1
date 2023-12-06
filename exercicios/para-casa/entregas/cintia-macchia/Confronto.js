class Confronto {
    static lutar(superheroi, vilao) {
        const poderSuperheroi = superheroi.poderTotal();
        const poderVilao = vilao.poderTotal();

        if (poderSuperheroi > poderVilao) {
            return 1; // Super-herói vence
        } else if (poderVilao > poderSuperheroi) {
            return 2; // Vilão vence
        } else {
            return 0; // Empate
        }
    }
}
module.exports = { Confronto }
