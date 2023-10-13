import { SuperPoder, Personagem, Confronto } from './resolucao.js';

const homemAranha = new Personagem("Homem-Aranha", "Peter Parker");
homemAranha.adicionarSuperPoder(new SuperPoder("Soltar teia", 3));
homemAranha.adicionarSuperPoder(new SuperPoder("Sentido Aranha", 2));
homemAranha.adicionarSuperPoder(new SuperPoder("Força", 2));

const homemDeFerro = new Personagem("Homem de Ferro", "Tony Stark");
homemDeFerro.adicionarSuperPoder(new SuperPoder("Força", 5));
homemDeFerro.adicionarSuperPoder(new SuperPoder("Armadura", 4));
homemDeFerro.adicionarSuperPoder(new SuperPoder("Voo", 4));

const homemFormiga = new Personagem("Homem Formiga", "Hank Pym");
homemFormiga.adicionarSuperPoder(new SuperPoder("Força", 1));
homemFormiga.adicionarSuperPoder(new SuperPoder("Comunicação", 4));
homemFormiga.adicionarSuperPoder(new SuperPoder("Resistência", 3));

const doutorEstranho = new Personagem("Doutor Estranho", "Strange");
doutorEstranho.adicionarSuperPoder(new SuperPoder("Força", 4));
doutorEstranho.adicionarSuperPoder(new SuperPoder("habilidades telecinéticas", 5));
doutorEstranho.adicionarSuperPoder(new SuperPoder("Teletransporte", 4));

const viuvaNegra = new Personagem("Viúva Negra", "Natasha Romanova");
viuvaNegra.adicionarSuperPoder(new SuperPoder("Inteligência", 5));
viuvaNegra.adicionarSuperPoder(new SuperPoder("Dominação", 4));
viuvaNegra.adicionarSuperPoder(new SuperPoder("Resistência", 5));

const panteraNegra = new Personagem("Pantera Negra", "T’Challa");
panteraNegra.adicionarSuperPoder(new SuperPoder("Caçar", 5));
panteraNegra.adicionarSuperPoder(new SuperPoder("Memória", 4));
panteraNegra.adicionarSuperPoder(new SuperPoder("Inteligência", 5));

Confronto.lutar(homemAranha, homemDeFerro);
Confronto.lutar(homemDeFerro, homemFormiga);
Confronto.lutar(homemFormiga, doutorEstranho);
Confronto.lutar(doutorEstranho, viuvaNegra);
Confronto.lutar(panteraNegra, viuvaNegra);