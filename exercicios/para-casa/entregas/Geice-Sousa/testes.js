import { SuperPower, Character, Confronto } from "./resolucaoExercicioGeice.js";

const homemAranha = new Character('Homem-Aranha', 'Peter Park')
const poderAranha1 = new SuperPower('soltar teia', 3);
const poderAranha2 = new SuperPower('andar em paredes', 2);
const poderAranha3 = new SuperPower('sentido apurado', 1);
homemAranha.addSuperPower(poderAranha1.getName);
homemAranha.addSuperPower(poderAranha2.getName);
homemAranha.addSuperPower(poderAranha3.getName);

console.log(`O ${homemAranha.getNameHero} se chama ${homemAranha.getNameReal}. Seus poderes são:${homemAranha.getPowers}.`);
console.group()
console.log(`Poder: ${poderAranha1.getName} - Categoria: ${poderAranha1.getCategory}
Poder: ${poderAranha2.getName} - Categoria: ${poderAranha2.getCategory}
Poder: ${poderAranha3.getName} - Categoria: ${poderAranha3.getCategory}
`);
console.groupEnd();
console.log();

const superHomem = new Character('Super-Homem', 'Clark Kent');
const superHomemPoder1 = new SuperPower('voar', 3);
const superHomemPoder2 = new SuperPower('força', 5);
const superHomemPoder3= new SuperPower('visão de raio-x', 4);
const superHomemPoder4 = new SuperPower('sopro congelante', 4);
superHomem.addSuperPower(superHomemPoder1.getName);
superHomem.addSuperPower(superHomemPoder2.getName);
superHomem.addSuperPower(superHomemPoder3.getName);
superHomem.addSuperPower(superHomemPoder4.getName);

console.log(`O ${superHomem.getNameHero} se chama ${superHomem.getNameReal}. Seus poderes são:${superHomem.getPowers}.`);
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
capitaoAmerica.addSuperPower(capitaoAmericaPoder1.getName);
capitaoAmerica.addSuperPower(capitaoAmericaPoder2.getName);

console.log(`O ${capitaoAmerica.getNameHero} se chama ${capitaoAmerica.getNameReal}. Seus poderes são:${capitaoAmerica.getPowers}.`);
console.group()
console.log(`Poder: ${capitaoAmericaPoder1.getName} - Categoria: ${capitaoAmericaPoder1.getCategory}`);
console.log(`Poder: ${capitaoAmericaPoder2.getName} - Categoria: ${capitaoAmericaPoder2.getCategory}`);
console.groupEnd();
console.log();

const flash = new Character('Flash', 'Barry Allen');
const flashPoder = new SuperPower('velocidade', 5);
flash.addSuperPower(flashPoder.getName);

console.log(`O ${flash.getNameHero} se chama ${flash.getNameReal}. Seus poderes são:${flash.getPowers}.`);
console.group()
console.log(`Poder: ${flashPoder.getName} - Categoria: ${flashPoder.getCategory}`);
console.groupEnd();
console.log();

const homemDeFerro= new Character('Homem de Ferro', 'Tony Stark');
const homemDeFerroPoder1 = new SuperPower('armadura', 4);
const homemDeFerroPoder2 = new SuperPower('dispositivos eletrônicos', 2);
homemDeFerro.addSuperPower(homemDeFerroPoder1.getName);
homemDeFerro.addSuperPower(homemDeFerroPoder2.getName);

console.log(`O ${homemDeFerro.getNameHero} se chama ${homemDeFerro.getNameReal}. Seus poderes são:${homemDeFerro.getPowers}.`);
console.group()
console.log(`Poder: ${homemDeFerroPoder1.getName} - Categoria: ${homemDeFerroPoder1.getCategory}`);
console.log(`Poder: ${homemDeFerroPoder2.getName} - Categoria: ${homemDeFerroPoder2.getCategory}`);
console.groupEnd();
console.log();

const mulherMaravilha = new Character('Mulher-Maravilha', 'Diana');
const mulherMaravilhaPoder1 = new SuperPower('velocidade', 3);
const mulherMaravilhaPoder2 = new SuperPower('força', 3);
const mulherMaravilhaPoder3 = new SuperPower('braceletes', 1);
mulherMaravilha.addSuperPower(mulherMaravilhaPoder1.getName);
mulherMaravilha.addSuperPower(mulherMaravilhaPoder2.getName);
mulherMaravilha.addSuperPower(mulherMaravilhaPoder3.getName);

console.log(`O ${mulherMaravilha.getNameHero} se chama ${mulherMaravilha.getNameReal}. Seus poderes são:${mulherMaravilha.getPowers}.`);
console.group()
console.log(`Poder: ${mulherMaravilhaPoder1.getName} - Categoria: ${mulherMaravilhaPoder1.getCategory}
Poder: ${mulherMaravilhaPoder2.getName} - Categoria: ${mulherMaravilhaPoder2.getCategory}
Poder: ${mulherMaravilhaPoder3.getName} - Categoria: ${mulherMaravilhaPoder3.getCategory}`);
console.groupEnd();
console.log();

const duendeVerde = new Character('Duende-Verde', 'Norman Osbourne')
const duendeVerdePoder = new SuperPower('força', 5);
duendeVerde.addSuperPower(duendeVerdePoder.getName);

console.log(`O ${duendeVerde.getNameHero} se chama ${duendeVerde.getNameReal}. Seus poderes são: ${homemAranha.getPowers}`);
console.group()
console.log(`Poder: ${duendeVerdePoder.getName} - Categoria: ${duendeVerdePoder.getCategory}`);
console.groupEnd();
console.log();

const lexLutor = new Character('Lex Luthor', 'Lex Luthor');
const lexLutorPoder = new SuperPower('mente aguçada', 5);
lexLutor.addSuperPower(lexLutorPoder.getName);

console.log(`O ${lexLutor.getNameHero} se chama ${lexLutor.getNameReal}. Seus poderes são:${lexLutor.getPowers}.`);
console.group()
console.log(`Poder: ${lexLutorPoder.getName} - Categoria: ${lexLutorPoder.getCategory}`);
console.groupEnd();
console.log();

const bizarro = new Character('Bizarro', 'Bizarro');
const bizarroPoder1 = new SuperPower('voar', 3);
const bizarroPoder2 = new SuperPower('força', 5 );
const bizarroPoder3 = new SuperPower('visão de raio-x', 4);
const bizarroPoder4 = new SuperPower('sopro congelante', 4);
bizarro.addSuperPower(bizarroPoder1.getName);
bizarro.addSuperPower(bizarroPoder2.getName);
bizarro.addSuperPower(bizarroPoder3.getName);
bizarro.addSuperPower(bizarroPoder4.getName);

console.log(`O ${bizarro.getNameHero} se chama ${bizarro.getNameReal}. Seus poderes são:${bizarro.getPowers}.`);
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
octopus.addSuperPower(octopusPoder1.getName);
octopus.addSuperPower(octopusPoder2.getName);

console.log(`O ${octopus.getNameHero} se chama ${octopus.getNameReal}. Seus poderes são:${octopus.getPowers}.`);
console.group()
console.log(`Poder: ${octopusPoder1.getName} - Categoria: ${octopusPoder1.getCategory}
Poder: ${octopusPoder2.getName} - Categoria: ${octopusPoder2.getCategory}`);
console.groupEnd();
console.log();

const feiticeiraEscarlate  = new Character('Feiticeira Escarlate', 'Wanda Django Maximoff');
const feiticeiraEscarlatePoder1 = new SuperPower('manipular a realidade', 5);
const feiticeiraEscarlatePoder2 = new SuperPower('telepatia', 5);
const feiticeiraEscarlatePoder3 = new SuperPower('telecinese', 4);
feiticeiraEscarlate.addSuperPower(feiticeiraEscarlatePoder1.getName);
feiticeiraEscarlate.addSuperPower(feiticeiraEscarlatePoder2.getName);
feiticeiraEscarlate.addSuperPower(feiticeiraEscarlatePoder3.getName);

console.log(`O ${feiticeiraEscarlate.getNameHero} se chama ${feiticeiraEscarlate.getNameReal}. Seus poderes são:${feiticeiraEscarlate.getPowers}.`);
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
mulherHulk.addSuperPower(mulherHulkPoder1.getName);
mulherHulk.addSuperPower(mulherHulkPoder2.getName);
mulherHulk.addSuperPower(mulherHulkPoder3.getName);

console.log(`O ${mulherHulk.getNameHero} se chama ${mulherHulk.getNameReal}. Seus poderes são:${mulherHulk.getPowers}.`);
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
capitaMarvel.addSuperPower(capitaMarvelPoder1.getName);
capitaMarvel.addSuperPower(capitaMarvelPoder2.getName);
capitaMarvel.addSuperPower(capitaMarvelPoder3.getName);
capitaMarvel.addSuperPower(capitaMarvelPoder4.getName);
capitaMarvel.addSuperPower(capitaMarvelPoder5.getName);
capitaMarvel.addSuperPower(capitaMarvelPoder6.getName);

console.log(`O ${capitaMarvel.getNameHero} se chama ${capitaMarvel.getNameReal}. Seus poderes são:${capitaMarvel.getPowers}.`);
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
viuvaNegra.addSuperPower(viuvaNegraPoder1.getName);
viuvaNegra.addSuperPower(viuvaNegraPoder2.getName);
viuvaNegra.addSuperPower(viuvaNegraPoder3.getName);
viuvaNegra.addSuperPower(viuvaNegraPoder4.getName);

console.log(`O ${viuvaNegra.getNameHero} se chama ${viuvaNegra.getNameReal}. Seus poderes são:${viuvaNegra.getPowers}.`);
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
fenixNegra.addSuperPower(fenixNegraPoder1.getName);
fenixNegra.addSuperPower(fenixNegraPoder2.getName);

console.log(`O ${fenixNegra.getNameHero} se chama ${fenixNegra.getNameReal}. Seus poderes são:${fenixNegra.getPowers}.`);
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
gamora.addSuperPower(gamoraPoder1.getName);
gamora.addSuperPower(gamoraPoder2.getName);
gamora.addSuperPower(gamoraPoder3.getName);
gamora.addSuperPower(gamoraPoder4.getName);

console.log(`O ${gamora.getNameHero} se chama ${gamora.getNameReal}. Seus poderes são:${gamora.getPowers}.`);
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
shuri.addSuperPower(shuriPoder1.getName);
shuri.addSuperPower(shuriPoder2.getName);

console.log(`O ${shuri.getNameHero} se chama ${shuri.getNameReal}. Seus poderes são:${shuri.getPowers}.`);
console.group()
console.log(`Poder: ${shuriPoder1.getName} - Categoria: ${shuriPoder1.getCategory}
Poder: ${shuriPoder2.getName} - Categoria: ${shuriPoder2.getCategory}`);
console.groupEnd();
console.log();

const monicaRambeau = new Character('Mônica Rambeau', 'Espectro');
const monicaRambeauPoder1 = new SuperPower('transformar o corpo em energia, ondas e raios, 5');
const monicaRambeauPoder2 = new SuperPower('voar', 3);
const monicaRambeauPoder3 = new SuperPower('disparar raios', 3);
monicaRambeau.addSuperPower(monicaRambeauPoder1.getName);
monicaRambeau.addSuperPower(monicaRambeauPoder2.getName);
monicaRambeau.addSuperPower(monicaRambeauPoder3.getName);

console.log(`O ${monicaRambeau.getNameHero} se chama ${monicaRambeau.getNameReal}. Seus poderes são:${monicaRambeau.getPowers}.`);
console.group()
console.log(`Poder: ${monicaRambeauPoder1.getName} - Categoria: ${monicaRambeauPoder1.getCategory}
Poder: ${monicaRambeauPoder2.getName} - Categoria: ${monicaRambeauPoder2.getCategory}
Poder: ${monicaRambeauPoder3.getName} - Categoria: ${monicaRambeauPoder3.getCategory}`);
console.groupEnd();
console.log();

const valquiria = new Character('Valquíria', 'Brunnhilde');
const valquiriaPoder1 = new SuperPower('força', 5);
const valquiriaPoder2 = new SuperPower('alta habilidade de luta com espadas', 3);
valquiria.addSuperPower(valquiriaPoder1.getName);
valquiria.addSuperPower(valquiriaPoder2.getName);

console.log(`O ${valquiria.getNameHero} se chama ${valquiria.getNameReal}. Seus poderes são:${valquiria.getPowers}.`);
console.group()
console.log(`Poder: ${valquiriaPoder1.getName} - Categoria: ${valquiriaPoder1.getCategory}
Poder: ${valquiriaPoder2.getName} - Categoria: ${valquiriaPoder2.getCategory}`);
console.groupEnd();
console.log();

const tempestade = new Character('Tempestade', 'Ororo Munroe');
const tempestadePoder = new SuperPower('manipula o clima', 4);
tempestade.addSuperPower(tempestadePoder.getName);

console.log(`O ${tempestade.getNameHero} se chama ${tempestade.getNameReal}. Seus poderes são:${tempestade.getPowers}.`);
console.group()
console.log(`Poder: ${tempestadePoder.getName} - Categoria: ${tempestadePoder.getCategory}`);
console.groupEnd();
console.log();

const homemAranhaXoctopos = new Confronto(homemAranha, octopus);
homemAranhaXoctopos.lutar();

const mulherHulkXoctopus = new Confronto(mulherHulk, octopus);
mulherHulkXoctopus.lutar();

const homemAranhaXgamora = new Confronto(homemAranha, gamora);
homemAranhaXgamora.lutar();
// const luta = new Confronto();
// .lutar();
// const luta = new Confronto();
// .lutar();
