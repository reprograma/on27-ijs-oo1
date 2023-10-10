import { Personagem } from "./Personagem.js";

export class SuperHeroi extends Personagem {
    poderTotal(){
        let poder = super.poderTotal()
        
        return poder + poder * 0.1;
    }
}


