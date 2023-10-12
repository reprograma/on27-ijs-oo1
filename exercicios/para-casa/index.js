import { SuperPoder, Personagem, Confronto } from './entregas/stella-luna-sousa/resolucao.js';

var homemAranha = new Personagem("Homem-Aranha", "Peter Parker");
homemAranha.adicionaSuperPoder(new SuperPoder("Soltar teia", 3));
homemAranha.adicionaSuperPoder(new SuperPoder("Sentido Aranha", 1));
homemAranha.adicionaSuperPoder(new SuperPoder("Super Força", 3));

var thor = new Personagem("Thor", "Thor Odinson");
thor.adicionaSuperPoder(new SuperPoder("Super Força", 5));
thor.adicionaSuperPoder(new SuperPoder("Controle do tempo", 3));
thor.adicionaSuperPoder(new SuperPoder("Voo", 2));

var hulk = new Personagem("Hulk", "Bruce Banner");
hulk.adicionaSuperPoder(new SuperPoder("Super Força", 5));
hulk.adicionaSuperPoder(new SuperPoder("Regeneração", 3));
hulk.adicionaSuperPoder(new SuperPoder("Resistência", 3));

var thanos = new Personagem("Thanos", "Thanos");
thanos.adicionaSuperPoder(new SuperPoder("Super Força", 5));
thanos.adicionaSuperPoder(new SuperPoder("Controle da Realidade", 5));
thanos.adicionaSuperPoder(new SuperPoder("Resistência", 3));

var coringa = new Personagem("Coringa", "Desconhecido");
coringa.adicionaSuperPoder(new SuperPoder("Inteligência", 3));
coringa.adicionaSuperPoder(new SuperPoder("Manipulação", 4));
coringa.adicionaSuperPoder(new SuperPoder("Habilidade em armas", 3));

var magneto = new Personagem("Magneto", "Max Eisenhardt");
magneto.adicionaSuperPoder(new SuperPoder("Controle do magnetismo", 5));
magneto.adicionaSuperPoder(new SuperPoder("Voo", 2));
magneto.adicionaSuperPoder(new SuperPoder("Geração de campos de força", 4));

var confrontos = new Confronto();

// Lutas
confrontos.lutar(homemAranha, thor);
confrontos.lutar(hulk, thanos);
confrontos.lutar(coringa, magneto);
confrontos.lutar(homemAranha, coringa);
confrontos.lutar(thanos, magneto);


