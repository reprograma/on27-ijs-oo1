import { SuperPoder, Personagem, Confronto } from "./resolucao.js";

// herois

const homemAranha = new Personagem("Homem-Aranha", "Peter Park");
const soltarTeia = new SuperPoder("soltar teia", 3);
const andarEmParedes = new SuperPoder("andar em paredes", 2);
const sentidoApurado = new SuperPoder("sentido apurado", 1);
homemAranha.adicionaSuperPoder(soltarTeia);
homemAranha.adicionaSuperPoder(andarEmParedes);
homemAranha.adicionaSuperPoder(sentidoApurado);

const superHomem = new Personagem("Super-Homem", "Crark Kent");
const voar = new SuperPoder("voar", 3)
const força = new SuperPoder("força", 5);
const visaoRaioX = new SuperPoder("visão de raio x", 4);
const soproCongelante = new SuperPoder("sopro congelante", 4);
superHomem.adicionaSuperPoder(voar);
superHomem.adicionaSuperPoder(força);
superHomem.adicionaSuperPoder(visaoRaioX);
superHomem.adicionaSuperPoder(soproCongelante);

const capitaoAmerica = new Personagem("Capitão América", "Steven Rogers");
const supersoldado = new SuperPoder("supersoldado", 3);
const escudo = new SuperPoder("escudo", 3);
capitaoAmerica.adicionaSuperPoder(supersoldado);
capitaoAmerica.adicionaSuperPoder(escudo);

const flash = new Personagem("Flash", "Barry Allen");
const velocidadeDaLuz = new SuperPoder("velocidade da luz", 5);
flash.adicionaSuperPoder(velocidadeDaLuz);

const homemDeFerro = new Personagem("Homem-Ferro", "Tony Stark");
const armadura = new SuperPoder("armadura", 4);
const dispositivosEletronicos = new SuperPoder("dispositivos eletrônicos", 2);
homemDeFerro.adicionaSuperPoder(armadura);
homemDeFerro.adicionaSuperPoder(dispositivosEletronicos);

const mulherMaravilha = new Personagem("Mulher-Maravilha", "Diana");
const superVelocidade = new SuperPoder("super-velocidade", 3);
const forca = new SuperPoder("forca", 3);
const braceletes = new SuperPoder("braceletes", 1);
mulherMaravilha.adicionaSuperPoder(superVelocidade);
mulherMaravilha.adicionaSuperPoder(forca);
mulherMaravilha.adicionaSuperPoder(braceletes);

// viloes

const duendeVerde = new Personagem("Duende Verde", "Norman Osborn");
duendeVerde.adicionaSuperPoder(força);

const lexLuthor = new Personagem("Lex Luthor", "Lex Luthor");
const menteAguçada = new SuperPoder("mente aguçada", 5);
lexLuthor.adicionaSuperPoder(menteAguçada);

const bizarro = new Personagem("Bizarro", "Bizarro");
bizarro.adicionaSuperPoder(voar);
bizarro.adicionaSuperPoder(força);
bizarro.adicionaSuperPoder(visaoRaioX);
bizarro.adicionaSuperPoder(soproCongelante);

const octopus = new Personagem("Octopus", "Otto Octavius");
const tentaculosIndestrutiveis = new SuperPoder("tentáculos indestrutíveis", 5);
const velocidade = new SuperPoder("velocidade sobrehumana", 1)
octopus.adicionaSuperPoder(tentaculosIndestrutiveis);
octopus.adicionaSuperPoder(velocidade);

const confronto = new Confronto();
confronto.lutar(superHomem, bizarro);