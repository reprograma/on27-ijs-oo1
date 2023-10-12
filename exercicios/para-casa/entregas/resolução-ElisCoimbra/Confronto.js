import{Personagem, homemAranha, duendeVerde } from "./Personagem.js";

class Confronto{
    constructor(vilao, heroi){
        if((vilao instanceof Personagem)&&(heroi instanceof Personagem)){
            this.vilao = vilao;
            this.heroi = heroi;
        } 
    }

    lutar(heroi, vilao){
        if((heroi.poderTotal() > vilao.poderTotal())){
            console.log(1);
        }else if((vilao.poderTotal() > heroi.poderTotal())){
            console.log(2);
        }else{
            console.log(0);
        }
    }
}
//TESTANDO A CLASSE E MÉTODOS DE CONFRONTO
const confronto1 = new Confronto(homemAranha, duendeVerde)
confronto1.lutar(homemAranha, duendeVerde)
