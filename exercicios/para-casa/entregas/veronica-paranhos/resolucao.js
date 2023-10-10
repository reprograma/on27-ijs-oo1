import { Confronto } from "./Confronto.js";
import { SuperHeroi } from "./SuperHeroi.js";
import { Vilao } from "./Vilao.js";
import { SuperPoder } from "./SuperPoder.js";

//instanciando os poderes
const poder1 = new SuperPoder("soltar teia", 3);
const poder2 = new SuperPoder("andar em paredes", 2);
const poder3 = new SuperPoder("sentido apurado", 1);
const poder4 = new SuperPoder("voar", 3);
const poder5 = new SuperPoder("força", 5);
const poder6 = new SuperPoder("visão de raio x", 4);
const poder7 = new SuperPoder("sopro congelante", 4);
const poder8 = new SuperPoder("supersoldado", 3);
const poder9 = new SuperPoder("escudo", 3);
const poder10 = new SuperPoder("mente aguçada", 5);
const poder11 = new SuperPoder("sopro congelante", 4);

//instanciando super herói e adicionando poderes
const superHeroi1 = new SuperHeroi("Homem-Aranha", "Peter Park");
superHeroi1.adicionaSuperPoder(poder1);
superHeroi1.adicionaSuperPoder(poder2);
superHeroi1.adicionaSuperPoder(poder3);

const superHeroi2 = new SuperHeroi("Super-Homem", "Crack Kent");
superHeroi2.adicionaSuperPoder(poder4);
superHeroi2.adicionaSuperPoder(poder5);
superHeroi2.adicionaSuperPoder(poder6);
superHeroi2.adicionaSuperPoder(poder7);

const superHeroi3 = new SuperHeroi("Capitão América", "Steven Rogers");
superHeroi3.adicionaSuperPoder(poder8);
superHeroi3.adicionaSuperPoder(poder9);

//instaciando vilao e adicionando poderes
const vilao1 = new Vilao("Duende Verde", "Norman Osbourne", 5);
vilao1.adicionaSuperPoder(poder5);

const vilao2 = new Vilao("Lex Luthor", "Lex Luthor", 7);
vilao2.adicionaSuperPoder(poder10);

const vilao3 = new Vilao("Bizarro", "Bizarro", 10);
vilao3.adicionaSuperPoder(poder4);
vilao3.adicionaSuperPoder(poder5);
vilao3.adicionaSuperPoder(poder6);
vilao3.adicionaSuperPoder(poder11);

//confrontando herói e vilão
const confronto1 = new Confronto();
confronto1.lutar(superHeroi1, vilao3);
confronto1.lutar(superHeroi2, vilao2);
