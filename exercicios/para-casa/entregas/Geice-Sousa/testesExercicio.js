import { SuperPower, Character, Confronto } from "./resolucaoExercicioGeice.js";

const homemAranha = new Character('Homem-Aranha', 'Peter Park')
const poderAranha1 = new SuperPower('soltar teia', 3);
const poderAranha2 = new SuperPower('andar em paredes', 2);
const poderAranha3 = new SuperPower('sentido apurado', 1);
homemAranha.addSuperPower(poderAranha1);
homemAranha.addSuperPower(poderAranha2);
homemAranha.addSuperPower(poderAranha3);

console.log(`${homemAranha.getNameHero} se chama ${homemAranha.getNameReal}. Seus poderes são:${homemAranha.getPowers}.`);
console.group()
console.log(`Poder: ${poderAranha1.getName} - Categoria: ${poderAranha1.getCategory}
Poder: ${poderAranha2.getName} - Categoria: ${poderAranha2.getCategory}
Poder: ${poderAranha3.getName} - Categoria: ${poderAranha3.getCategory}
`);
console.groupEnd();

const superHomem = new Character('Super-Homem', 'Clark Kent');
const superHomemPoder1 = new SuperPower('voar', 3);
const superHomemPoder2 = new SuperPower('força', 5);
const superHomemPoder3= new SuperPower('visão de raio-x', 4);
const superHomemPoder4 = new SuperPower('sopro congelante', 4);
superHomem.addSuperPower(superHomemPoder1);
superHomem.addSuperPower(superHomemPoder2);
superHomem.addSuperPower(superHomemPoder3);
superHomem.addSuperPower(superHomemPoder4);

console.log(`${superHomem.getNameHero} se chama ${superHomem.getNameReal}. Seus poderes são:${superHomem.getPowers}.`);
console.group()
console.log(`Poder: ${superHomemPoder1.getName} - Categoria: ${superHomemPoder1.getCategory}`);
console.log(`Poder: ${superHomemPoder2.getName} - Categoria: ${superHomemPoder2.getCategory}`);
console.log(`Poder: ${superHomemPoder3.getName} - Categoria: ${superHomemPoder3.getCategory}`);
console.log(`Poder: ${superHomemPoder4.getName} - Categoria: ${superHomemPoder3.getCategory}`);
console.groupEnd();
console.log();

const capitaoAmerica = new Character('Capitão América', 'Steven Rogers');
const capitaoAmericaPoder1 = new SuperPower('supersoldado', 3);
const capitaoAmericaPoder2 = new SuperPower('escudo', 3);
capitaoAmerica.addSuperPower(capitaoAmericaPoder1);
capitaoAmerica.addSuperPower(capitaoAmericaPoder2);

console.log(`${capitaoAmerica.getNameHero} se chama ${capitaoAmerica.getNameReal}. Seus poderes são:${capitaoAmerica.getPowers}.`);
console.group()
console.log(`Poder: ${capitaoAmericaPoder1.getName} - Categoria: ${capitaoAmericaPoder1.getCategory}`);
console.log(`Poder: ${capitaoAmericaPoder2.getName} - Categoria: ${capitaoAmericaPoder2.getCategory}`);
console.groupEnd();
console.log();

const flash = new Character('Flash', 'Barry Allen');
const flashPoder = new SuperPower('velocidade', 5);
flash.addSuperPower(flashPoder);

console.log(`${flash.getNameHero} se chama ${flash.getNameReal}. Seus poderes são:${flash.getPowers}.`);
console.group()
console.log(`Poder: ${flashPoder.getName} - Categoria: ${flashPoder.getCategory}`);
console.groupEnd();
console.log();

const homemDeFerro= new Character('Homem de Ferro', 'Tony Stark');
const homemDeFerroPoder1 = new SuperPower('armadura', 4);
const homemDeFerroPoder2 = new SuperPower('dispositivos eletrônicos', 2);
homemDeFerro.addSuperPower(homemDeFerroPoder1);
homemDeFerro.addSuperPower(homemDeFerroPoder2);

console.log(`${homemDeFerro.getNameHero} se chama ${homemDeFerro.getNameReal}. Seus poderes são:${homemDeFerro.getPowers}.`);
console.group()
console.log(`Poder: ${homemDeFerroPoder1.getName} - Categoria: ${homemDeFerroPoder1.getCategory}`);
console.log(`Poder: ${homemDeFerroPoder2.getName} - Categoria: ${homemDeFerroPoder2.getCategory}`);
console.groupEnd();
console.log();

const mulherMaravilha = new Character('Mulher-Maravilha', 'Diana');
const mulherMaravilhaPoder1 = new SuperPower('velocidade', 3);
const mulherMaravilhaPoder2 = new SuperPower('força', 3);
const mulherMaravilhaPoder3 = new SuperPower('braceletes', 1);
mulherMaravilha.addSuperPower(mulherMaravilhaPoder1);
mulherMaravilha.addSuperPower(mulherMaravilhaPoder2);
mulherMaravilha.addSuperPower(mulherMaravilhaPoder3);

console.log(`${mulherMaravilha.getNameHero} se chama ${mulherMaravilha.getNameReal}. Seus poderes são:${mulherMaravilha.getPowers}.`);
console.group()
console.log(`Poder: ${mulherMaravilhaPoder1.getName} - Categoria: ${mulherMaravilhaPoder1.getCategory}
Poder: ${mulherMaravilhaPoder2.getName} - Categoria: ${mulherMaravilhaPoder2.getCategory}
Poder: ${mulherMaravilhaPoder3.getName} - Categoria: ${mulherMaravilhaPoder3.getCategory}`);
console.groupEnd();
console.log();

const duendeVerde = new Character('Duende-Verde', 'Norman Osbourne')
const duendeVerdePoder = new SuperPower('força', 5);
duendeVerde.addSuperPower(duendeVerdePoder);

console.log(`${duendeVerde.getNameHero} se chama ${duendeVerde.getNameReal}. Seus poderes são: ${homemAranha.getPowers}`);
console.group()
console.log(`Poder: ${duendeVerdePoder.getName} - Categoria: ${duendeVerdePoder.getCategory}`);
console.groupEnd();
console.log();

const lexLutor = new Character('Lex Luthor', 'Lex Luthor');
const lexLutorPoder = new SuperPower('mente aguçada', 5);
lexLutor.addSuperPower(lexLutorPoder);

console.log(`${lexLutor.getNameHero} se chama ${lexLutor.getNameReal}. Seus poderes são:${lexLutor.getPowers}.`);
console.group()
console.log(`Poder: ${lexLutorPoder.getName} - Categoria: ${lexLutorPoder.getCategory}`);
console.groupEnd();
console.log();

const bizarro = new Character('Bizarro', 'Bizarro');
const bizarroPoder1 = new SuperPower('voar', 3);
const bizarroPoder2 = new SuperPower('força', 5 );
const bizarroPoder3 = new SuperPower('visão de raio-x', 4);
const bizarroPoder4 = new SuperPower('sopro congelante', 4);
bizarro.addSuperPower(bizarroPoder1);
bizarro.addSuperPower(bizarroPoder2);
bizarro.addSuperPower(bizarroPoder3);
bizarro.addSuperPower(bizarroPoder4);

console.log(`${bizarro.getNameHero} se chama ${bizarro.getNameReal}. Seus poderes são:${bizarro.getPowers}.`);
console.group()
console.log(`Poder: ${bizarroPoder1.getName} - Categoria: ${bizarroPoder1.getCategory}
Poder: ${bizarroPoder2.getName} - Categoria: ${bizarroPoder2.getCategory}
Poder: ${bizarroPoder3.getName} - Categoria: ${bizarroPoder3.getCategory}
Poder: ${bizarroPoder4.getName} - Categoria: ${bizarroPoder3.getCategory}`);
console.groupEnd();
console.log();

const octopus = new Character('Octopus', 'Otto Octavius');
const octopusPoder1 = new SuperPower('tentáculos indestrutíveis ', 5);
const octopusPoder2 = new SuperPower('velocidade', 1);
octopus.addSuperPower(octopusPoder1);
octopus.addSuperPower(octopusPoder2);

console.log(`${octopus.getNameHero} se chama ${octopus.getNameReal}. Seus poderes são:${octopus.getPowers}.`);
console.group()
console.log(`Poder: ${octopusPoder1.getName} - Categoria: ${octopusPoder1.getCategory}
Poder: ${octopusPoder2.getName} - Categoria: ${octopusPoder2.getCategory}`);
console.groupEnd();
console.log();

const feiticeiraEscarlate  = new Character('Feiticeira Escarlate', 'Wanda Django Maximoff');
const feiticeiraEscarlatePoder1 = new SuperPower('manipular a realidade', 5);
const feiticeiraEscarlatePoder2 = new SuperPower('telepatia', 5);
const feiticeiraEscarlatePoder3 = new SuperPower('telecinese', 4);
feiticeiraEscarlate.addSuperPower(feiticeiraEscarlatePoder1);
feiticeiraEscarlate.addSuperPower(feiticeiraEscarlatePoder2);
feiticeiraEscarlate.addSuperPower(feiticeiraEscarlatePoder3);

console.log(`${feiticeiraEscarlate.getNameHero} se chama ${feiticeiraEscarlate.getNameReal}. Seus poderes são:${feiticeiraEscarlate.getPowers}.`);
console.group()
console.log(`Poder: ${feiticeiraEscarlatePoder1.getName} - Categoria: ${feiticeiraEscarlatePoder1.getCategory}
Poder: ${feiticeiraEscarlatePoder2.getName} - Categoria: ${feiticeiraEscarlatePoder2.getCategory}
Poder: ${feiticeiraEscarlatePoder3.getName} - Categoria: ${feiticeiraEscarlatePoder3.getCategory}`);
console.groupEnd();
console.log();

const mulherHulk = new Character('She-Hulk', 'Jennifer Walters');
const mulherHulkPoder1 = new SuperPower('força extraordinária', 5);
const mulherHulkPoder2 = new SuperPower('aumentar de tamanho', 4);
const mulherHulkPoder3 = new SuperPower('saltar longas distâncias', 3);
mulherHulk.addSuperPower(mulherHulkPoder1);
mulherHulk.addSuperPower(mulherHulkPoder2);
mulherHulk.addSuperPower(mulherHulkPoder3);

console.log(`${mulherHulk.getNameHero} se chama ${mulherHulk.getNameReal}. Seus poderes são:${mulherHulk.getPowers}.`);
console.group()
console.log(`Poder: ${mulherHulkPoder1.getName} - Categoria: ${mulherHulkPoder1.getCategory}
Poder: ${mulherHulkPoder2.getName} - Categoria: ${mulherHulkPoder2.getCategory}`);
console.groupEnd();
console.log();

const capitaMarvel = new Character('Capitã Marvel', 'Carol Danvers');
const capitaMarvelPoder1 = new SuperPower('super força', 5);
const capitaMarvelPoder2 = new SuperPower('super resistência', 5);
const capitaMarvelPoder3 = new SuperPower('fator de cura', 5);
const capitaMarvelPoder4 = new SuperPower('voar', 3);
const capitaMarvelPoder5 = new SuperPower('super velocidade', 5);
const capitaMarvelPoder6 = new SuperPower('projeção e absorção de energia', 4);
capitaMarvel.addSuperPower(capitaMarvelPoder1);
capitaMarvel.addSuperPower(capitaMarvelPoder2);
capitaMarvel.addSuperPower(capitaMarvelPoder3);
capitaMarvel.addSuperPower(capitaMarvelPoder4);
capitaMarvel.addSuperPower(capitaMarvelPoder5);
capitaMarvel.addSuperPower(capitaMarvelPoder6);

console.log(`${capitaMarvel.getNameHero} se chama ${capitaMarvel.getNameReal}. Seus poderes são:${capitaMarvel.getPowers}.`);
console.group()
console.log(`Poder: ${capitaMarvelPoder1.getName} - Categoria: ${capitaMarvelPoder1.getCategory}
Poder: ${capitaMarvelPoder2.getName} - Categoria: ${capitaMarvelPoder2.getCategory}
Poder: ${capitaMarvelPoder3.getName} - Categoria: ${capitaMarvelPoder3.getCategory}
Poder: ${capitaMarvelPoder4.getName} - Categoria: ${capitaMarvelPoder4.getCategory}
Poder: ${capitaMarvelPoder5.getName} - Categoria: ${capitaMarvelPoder5.getCategory}
Poder: ${capitaMarvelPoder6.getName} - Categoria: ${capitaMarvelPoder6.getCategory}`);
console.groupEnd();
console.log();

const viuvaNegra = new Character('Viúva Negra', 'Natasha Romanoff');
const viuvaNegraPoder1 = new SuperPower('resistência', 5);
const viuvaNegraPoder2 = new SuperPower('força', 5);
const viuvaNegraPoder3 = new SuperPower('habilidades de combate', 4);
const viuvaNegraPoder4 = new SuperPower('sentido apurado', 1);
viuvaNegra.addSuperPower(viuvaNegraPoder1);
viuvaNegra.addSuperPower(viuvaNegraPoder2);
viuvaNegra.addSuperPower(viuvaNegraPoder3);
viuvaNegra.addSuperPower(viuvaNegraPoder4);

console.log(`${viuvaNegra.getNameHero} se chama ${viuvaNegra.getNameReal}. Seus poderes são:${viuvaNegra.getPowers}.`);
console.group()
console.log(`Poder: ${viuvaNegraPoder1.getName} - Categoria: ${viuvaNegraPoder1.getCategory}
Poder: ${viuvaNegraPoder2.getName} - Categoria: ${viuvaNegraPoder2.getCategory}
Poder: ${viuvaNegraPoder3.getName} - Categoria: ${viuvaNegraPoder3.getCategory}
Poder: ${viuvaNegraPoder4.getName} - Categoria: ${viuvaNegraPoder4.getCategory}`);
console.groupEnd();
console.log();

const fenixNegra = new Character('Fênix Negra', 'Jean Grey');
const fenixNegraPoder1 = new SuperPower('telepatia', 5);
const fenixNegraPoder2 = new SuperPower('telecinese', 4);
fenixNegra.addSuperPower(fenixNegraPoder1);
fenixNegra.addSuperPower(fenixNegraPoder2);

console.log(`${fenixNegra.getNameHero} se chama ${fenixNegra.getNameReal}. Seus poderes são:${fenixNegra.getPowers}.`);
console.group()
console.log(`Poder: ${fenixNegraPoder1.getName} - Categoria: ${fenixNegraPoder1.getCategory}
Poder: ${fenixNegraPoder2.getName} - Categoria: ${fenixNegraPoder2.getCategory}`);
console.groupEnd();
console.log();

const gamora = new Character('Gamora','Gamora');
const gamoraPoder1 = new SuperPower('super força', 5);
const gamoraPoder2 = new SuperPower('super velocidade', 5);
const gamoraPoder3 = new SuperPower('super reflexos', 3);
const gamoraPoder4 = new SuperPower('resistência', 3);
gamora.addSuperPower(gamoraPoder1);
gamora.addSuperPower(gamoraPoder2);
gamora.addSuperPower(gamoraPoder3);
gamora.addSuperPower(gamoraPoder4);

console.log(`${gamora.getNameHero} se chama ${gamora.getNameReal}. Seus poderes são:${gamora.getPowers}.`);
console.group()
console.log(`Poder: ${gamoraPoder1.getName} - Categoria: ${gamoraPoder1.getCategory}
Poder: ${gamoraPoder2.getName} - Categoria: ${gamoraPoder2.getCategory}
Poder: ${gamoraPoder3.getName} - Categoria: ${gamoraPoder3.getCategory}
Poder: ${gamoraPoder4.getName} - Categoria: ${gamoraPoder4.getCategory}`);
console.groupEnd();
console.log();

const shuri = new Character('Shuri', 'Shuri');
const shuriPoder1 = new SuperPower('armadura', 4);
const shuriPoder2 = new SuperPower('dispositivos eletrônicos', 2);
shuri.addSuperPower(shuriPoder1);
shuri.addSuperPower(shuriPoder2);

console.log(`${shuri.getNameHero} se chama ${shuri.getNameReal}. Seus poderes são:${shuri.getPowers}.`);
console.group()
console.log(`Poder: ${shuriPoder1.getName} - Categoria: ${shuriPoder1.getCategory}
Poder: ${shuriPoder2.getName} - Categoria: ${shuriPoder2.getCategory}`);
console.groupEnd();
console.log();

const monicaRambeau = new Character('Mônica Rambeau', 'Espectro');
const monicaRambeauPoder1 = new SuperPower('transformar o corpo em energia, ondas e raios', 5);
const monicaRambeauPoder2 = new SuperPower('voar', 3);
const monicaRambeauPoder3 = new SuperPower('disparar raios', 3);
monicaRambeau.addSuperPower(monicaRambeauPoder1);
monicaRambeau.addSuperPower(monicaRambeauPoder2);
monicaRambeau.addSuperPower(monicaRambeauPoder3);

console.log(`${monicaRambeau.getNameHero} se chama ${monicaRambeau.getNameReal}. Seus poderes são:${monicaRambeau.getPowers}.`);
console.group()
console.log(`Poder: ${monicaRambeauPoder1.getName} - Categoria: ${monicaRambeauPoder1.getCategory}
Poder: ${monicaRambeauPoder2.getName} - Categoria: ${monicaRambeauPoder2.getCategory}
Poder: ${monicaRambeauPoder3.getName} - Categoria: ${monicaRambeauPoder3.getCategory}`);
console.groupEnd();
console.log();

const valquiria = new Character('Valquíria', 'Brunnhilde');
const valquiriaPoder1 = new SuperPower('força', 5);
const valquiriaPoder2 = new SuperPower('alta habilidade de luta com espadas', 3);
valquiria.addSuperPower(valquiriaPoder1);
valquiria.addSuperPower(valquiriaPoder2);

console.log(`${valquiria.getNameHero} se chama ${valquiria.getNameReal}. Seus poderes são:${valquiria.getPowers}.`);
console.group()
console.log(`Poder: ${valquiriaPoder1.getName} - Categoria: ${valquiriaPoder1.getCategory}
Poder: ${valquiriaPoder2.getName} - Categoria: ${valquiriaPoder2.getCategory}`);
console.groupEnd();
console.log();

const tempestade = new Character('Tempestade', 'Ororo Munroe');
const tempestadePoder = new SuperPower('manipula o clima', 4);
tempestade.addSuperPower(tempestadePoder);

console.log(`${tempestade.getNameHero} se chama ${tempestade.getNameReal}. Seus poderes são:${tempestade.getPowers}.`);
console.group()
console.log(`Poder: ${tempestadePoder.getName} - Categoria: ${tempestadePoder.getCategory}`);
console.groupEnd();
console.log();

const homemAranhaXviuvaNegra = new Confronto(homemAranha, viuvaNegra);
homemAranhaXviuvaNegra.lutar();

const mulherHulkXoctopus = new Confronto(mulherHulk, octopus);
mulherHulkXoctopus.lutar();

const homemAranhaXgamora = new Confronto(homemAranha, gamora);
homemAranhaXgamora.lutar();

const homemDeFerroXbizarro = new Confronto(homemDeFerro, bizarro);
homemDeFerroXbizarro.lutar();

const octopusXmonicaRambeau = new Confronto(octopus, monicaRambeau);
octopusXmonicaRambeau.lutar();

const mulherMaravilhaXsuperHomem = new Confronto(mulherMaravilha, superHomem);
mulherMaravilhaXsuperHomem.lutar();

const fenixNegraXfeiticeiraEscarlate = new Confronto(fenixNegra, feiticeiraEscarlate);
fenixNegraXfeiticeiraEscarlate.lutar();

const superHomemXbizarro = new Confronto(superHomem, bizarro)
const capitaoAmericaXlexLutor = new Confronto(capitaoAmerica, lexLutor)
const flashXoctopus = new Confronto(flash, octopus)
const homemAranhaXduendeVerde = new Confronto(homemAranha, duendeVerde)
const homemAranhaXoctopus = new Confronto(homemAranha, octopus)
const mulherMaravilhaXhomemDeFerro = new Confronto(mulherMaravilha, homemDeFerro)

superHomemXbizarro.lutar()
capitaoAmericaXlexLutor.lutar()
flashXoctopus.lutar()
homemAranhaXduendeVerde.lutar()
homemAranhaXoctopus.lutar()
mulherMaravilhaXhomemDeFerro.lutar()
