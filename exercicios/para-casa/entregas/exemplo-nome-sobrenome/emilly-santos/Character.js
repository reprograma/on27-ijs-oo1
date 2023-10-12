const { SuperPower } = require("./SuperPower");

class Character{
    _name;
    _realName;
    _powers;

    constructor(name, realName){
        this._name = name;
        this._realName = realName;
        this._powers = [];
    }

    get name(){
        return this._name
    }

    get realName(){
        return this._realName
    }

    addSuperPower(superPower){
        if(!(superPower instanceof SuperPower)){
            console.log("Este super poder não é válido");
            return;
        }

        if(this._powers.length >= 4){
            console.log("O número máximo de super poderes foi atingido")
        }else{
            this._powers.push(superPower)
        }
    }

    totalPower(){
        let total = 0;
        for(let power of this._powers){
            total += power.powerCategory
        }

        return total;
    }
}

const superman = new Character("Superman", "Clark Kent");
const voo = new SuperPower("voo", 3);
const superforca = new SuperPower("força", 5);
const velocidade = new SuperPower("velocidade", 5);
const armadura = new SuperPower("armadura", 7);
const escudo = new SuperPower("escudo", 3);

const duende = new Character("duende", "norman");
const forca = new SuperPower("forca", 5);


superman.addSuperPower(voo);
superman.addSuperPower(superforca);
superman.addSuperPower(armadura);
superman.addSuperPower(velocidade); 
superman.addSuperPower(escudo); 

duende.addSuperPower(forca);

superman.totalPower()
duende.totalPower()

console.log(`Poder total do Superman: ${superman.totalPower()}`);

module.exports = {Character, superman, duende}
