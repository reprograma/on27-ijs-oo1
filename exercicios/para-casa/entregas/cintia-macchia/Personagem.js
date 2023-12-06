const { SuperPoder }= require("./SuperPoder")


class Personagem{
    #nome 
    #nomeVidaReal 
    #poderes

    constructor(nome, nomeVidaReal){
        this.#nome = nome;
        this.#nomeVidaReal = nomeVidaReal;
        this.#poderes = []
    }

    get nome(){
        return this.#nome
    }

    get nomeVidaReal(){
        return this.#nomeVidaReal
    }
  
    get poderes(){
      return this.#poderes
    }
    adicionaSuperPoder(superPoder) {
        if((this.#poderes.find(superPoderIncludes => superPoderIncludes.superPoder === superPoder.nome))) {
              console.log(
              `O poder ${superPoder.nome} já existe.`);
              return
            };
      
            if (this.#poderes.length === 4) {
              return console.log(
                "Você só poder ter 4 poderes na lista."
              );
            }
      
            this.#poderes.push(superPoder);
            return console.log(
              `O poder "${superPoder.nome}" foi adicionado a lista de poderes.`
            );
          }
      
 

    poderTotal() { 
      const somaDosPoderes = 
        this.#poderes.reduce((soma, poder) => soma + poder.categoria,  0) ;

        return somaDosPoderes;
    }
    }

    module.exports = { Personagem }



