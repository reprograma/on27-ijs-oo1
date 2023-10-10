export class Confronto{
    lutar(heroi, vilao){
        const poderHeroi = heroi.poderTotal();
        const poderVilao = vilao.poderTotal();

        if(poderHeroi > poderVilao)
            console.log(`${heroi.nome} derrotou ${vilao.nome}`);
        else if(poderVilao > poderHeroi)
                console.log(`${vilao.nome} derrotou ${heroi.nome}`);
        else
                console.log('Empatou');
    
    }
}