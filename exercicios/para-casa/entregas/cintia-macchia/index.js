const { SuperPoder } = require("./SuperPoder")
const { Personagem } = require("./Personagem")
const { Vilao } = require("./Vilao")
const { Confronto } = require("./Confronto")

// criação dos poderes
const soltarTeia = new SuperPoder("soltar teia", 3)
const andarEmParede = new SuperPoder("andar em parede", 2)
const sentidoApurado = new SuperPoder("sentido Apurado", 1)
const voar = new SuperPoder("voar", 3)
const forca = new SuperPoder("força", 5)
const visaoRaioX = new SuperPoder("visão Raio X", 4)
const soproCongelante = new SuperPoder("sopro congelante", 4)
const superSoldado = new SuperPoder("super Soldado", 3)
const escudo = new SuperPoder("escudo", 3)
const velocidade = new SuperPoder("velocidade", 5)
const armaruda = new SuperPoder("armadura", 4)
const disositivosEletronicos = new SuperPoder("disositivos eletronicos", 2)
const velocidade2 = new SuperPoder("velocidade 2", 3)
const força2 = new SuperPoder("força 2", 3)
const bracelete = new SuperPoder("bracelete", 1)
const tentaculos = new SuperPoder("tentaculos", 5)
const menteAgucada = new SuperPoder("mente aguçada", 5)

console.log(soltarTeia.nome, soltarTeia.categoria)

const homemAranha = new Personagem("Homem-Aranha", "Peter Parker")
const superHomem = new Personagem("Super-Homem", "Clark Kent")
const capitaoAmeria = new Personagem("Capitão América", "Steve Rogers")
const flash = new Personagem("Flash", "Harry Allen")
const homemDeFerro = new Personagem("Homem de Ferro", "Tony Stark")
const mulherMaravilha = new Personagem("Mulher-Maravilha", "Diana")


console.log(homemAranha.nome)
console.log(superHomem.nome, superHomem.nomeVidaReal)
console.log(capitaoAmeria.nome ,capitaoAmeria.nomeVidaReal)
console.log(flash.nome, flash.nomeVidaReal)
console.log(homemDeFerro.nome, homemDeFerro.nomeVidaReal)
console.log(mulherMaravilha.nome, mulherMaravilha.nomeVidaReal)

homemAranha.adicionaSuperPoder(soltarTeia);
superHomem.adicionaSuperPoder(voar);
superHomem.adicionaSuperPoder(forca)
capitaoAmeria.adicionaSuperPoder(superSoldado);
flash.adicionaSuperPoder(velocidade);
homemDeFerro.adicionaSuperPoder(armaruda);
mulherMaravilha.adicionaSuperPoder(bracelete);


const duendeVerde = new Vilao("Duende-verde", "Norman Osbourne")
duendeVerde.adicionaSuperPoder(forca)

const resultadoConfronto = Confronto.lutar(superHomem, duendeVerde);

if (resultadoConfronto === 1) {
    console.log(`${superHomem.nome} venceu a batalha contra ${duendeVerde.nome}!`);
} else if (resultadoConfronto === 2) {
    console.log(`${duendeVerde.nome} venceu a batalha contra ${superHomem.nome}!`);
} else {
    console.log(`A batalha entre ${superHomem.nome} e ${duendeVerde.nome} terminou em empate.`);
}
