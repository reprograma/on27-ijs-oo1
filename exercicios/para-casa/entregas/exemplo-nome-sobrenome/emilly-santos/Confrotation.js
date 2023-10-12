const { Character, duende, superman } = require("./Character");

class Confrontation{
    constructor(villain, superHero){
        if((villain instanceof Character)&&(superHero instanceof Character)){
            this.superHero = superHero;
            this.villain = villain;
        }
    }

    fight(superHero, villain){
        const totalPowerSuperHero = superHero.totalPower();
        const totalPowerVillain = villain.totalPower();

        if(totalPowerSuperHero > totalPowerVillain){
            console.log(1)
        }else if(totalPowerVillain > totalPowerSuperHero){
            console.log(2)
        }else{
            console.log(0)
        }
    }
}

module.exports = {Confrontation}

const confronto = new Confrontation(superman, duende)
confronto.fight(superman, duende)