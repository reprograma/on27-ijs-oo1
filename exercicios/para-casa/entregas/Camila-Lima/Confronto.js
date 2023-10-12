export class Confronto {
    lutar(superheroi, vilao ){
        const heroiPoderTotal = superheroi.poderTotal();
        const vilaoPoderTotal = vilao.poderTotal();

    if(heroiPoderTotal > vilaoPoderTotal){
        return 1;
    }else if (vilaoPoderTotal > heroiPoderTotal){
        return 2;
    }else {
        return 0;
    }
    } ;
}
