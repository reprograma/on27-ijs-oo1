export class SuperPoder{
        #nome;
        #categoria;
        constructor(nome, categoria){
            this.#nome = nome;
            this.#categoria = categoria;
        }
        get nome (){
            return this.#nome;
        }       
        get categoria (){
            return this.#categoria;
        }
    }
    // TESTANDO A CLASSE 
    const forca = new SuperPoder('força', 5)
    console.log("O Super Poder 1 é:",forca.nome)
    console.log("A categoria do Super Poder 1 é:", forca.categoria)
    
