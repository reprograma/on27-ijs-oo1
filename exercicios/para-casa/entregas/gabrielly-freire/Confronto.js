const {Personagem} = require('./Personagem.js');

class Confronto{

    lutar(superHeroi, vilao){

        if(!(superHeroi instanceof Personagem)){
            console.log("Super Herói inválido!");
            return;
        }

        if(!(vilao instanceof Personagem)){
            console.log("Vilão inválido!");
            return;
        }

        let pontosSuperHeroi = superHeroi.poderTotal();
        let pontosVilao = vilao.poderTotal();

        if (pontosSuperHeroi > pontosVilao) {
            return 1; 
        } else if (pontosSuperHeroi < pontosVilao) {
            return 2; 
        } else {
            return 0;
        }
    }
}

module.exports = {Confronto}