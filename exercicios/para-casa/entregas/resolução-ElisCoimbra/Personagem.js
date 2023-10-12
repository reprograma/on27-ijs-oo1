import { SuperPoder } from "./SuperPoder.js";

class Personagem{
    #nome;
    #nomeDaVidaReal;
    #poderes;
    constructor(nome,nomeDaVidaReal){
        this.#nome = nome;
        this.#nomeDaVidaReal = nomeDaVidaReal;
        this.#poderes = []
    }
    get nome(){
        return this.#nome;
    }
    get nomeDaVidaReal(){
        return this.#nomeDaVidaReal;
    }
   
    adicionarSuperPoder(superPoder){
        if(superPoder instanceof SuperPoder){
            if((this.#poderes.length >= 4)){
                return;
            }else{
               if((this.#poderes.includes(superPoder))){
                    return;
               }else{
                    this.#poderes.push(superPoder)
                }
            }        
        }else{
            return;
        }
     }
     poderTotal(){
        const somaPoderes = this.#poderes.reduce((acumulador, superPoder)=>  acumulador + superPoder.categoria, 0);
        return somaPoderes;
        }
     }
        
// PODERES
const soltarTeia = new SuperPoder('soltar teia', 3)
const andaEmParedes = new SuperPoder('andar em Parede', 2)
const sentidoApurado = new SuperPoder('sentido apurado',1)
const visaoRaioX = new SuperPoder('visão de raio X', 4)
const soproCongelante = new SuperPoder('sopro congelante', 4)
const forca = new SuperPoder('forca', 5)
// TESTANDO A CLASSE PERSONAGEM E OS  MÉTODOS (HERÓI)
const homemAranha = new Personagem('Homem Aranha', 'Peter Parker');
homemAranha.adicionarSuperPoder(andaEmParedes);
homemAranha.adicionarSuperPoder(sentidoApurado);
homemAranha.adicionarSuperPoder(soltarTeia);
homemAranha.adicionarSuperPoder(andaEmParedes);
homemAranha.adicionarSuperPoder(visaoRaioX);
homemAranha.adicionarSuperPoder(soproCongelante);
homemAranha.poderTotal();
console.log('O poder Total do homem aranha é:', homemAranha.poderTotal());

// TESTANDO A CLASSE PERSONAGEM E OS MÉTODOS (VILÃO)
const duendeVerde = new Personagem("Duende Verde", 'Normam Osbourne');
duendeVerde.adicionarSuperPoder(forca);
duendeVerde.poderTotal();
console.log('O poder Total do duende verde é :', duendeVerde.poderTotal());
export{ Personagem, homemAranha, duendeVerde}