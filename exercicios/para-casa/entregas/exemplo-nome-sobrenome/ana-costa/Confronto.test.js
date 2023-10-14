import { Confronto } from "./Confronto";
import { Personagem } from "./Personagem";
import { SuperPoder } from "./SuperPoder";

let homemAranha;
let duendeVerde;
let bizarro;
let octopus;
let poderTeia;
let poderAndarParedes;
let poderSentido;
let poderForca;
let poderVoar;
let poderVisaoRaioX;
let poderSoproCongelante;
let poderTentaculosIndestrutiveis;
let poderVelocidade;
let confronto;

beforeEach(() => {
  //criando personagens 
  homemAranha = new Personagem('Homem aranha', 'Peter Park');
  duendeVerde = new Personagem('Duende-Verde', 'Norman Osbourne');
  bizarro = new Personagem('Bizarro', 'Bizarro');
  octopus = new Personagem('Octo Ocatavius'),
  //criando poderes
  poderTeia = new SuperPoder('soltar teia', 3);
  poderAndarParedes = new SuperPoder('andar em paredes', 2);
  poderSentido = new SuperPoder('sentido apurado', 1);
  poderForca = new SuperPoder('força', 5);
  poderVoar = new SuperPoder('voar', 3)
  poderVisaoRaioX = new SuperPoder('visão de raio x', 5);
  poderSoproCongelante = new SuperPoder('sopro congelante', 4);
  poderTentaculosIndestrutiveis = new SuperPoder('tantáculos indestrutíveis', 5);
  poderVelocidade = new SuperPoder('velocidade', 1);
  //adicionando poderes aos personagens
  homemAranha.adicionaSuperPoder(poderTeia);
  homemAranha.adicionaSuperPoder(poderAndarParedes);
  homemAranha.adicionaSuperPoder(poderSentido);
  duendeVerde.adicionaSuperPoder(poderForca);
  bizarro.adicionaSuperPoder(poderVoar);
  bizarro.adicionaSuperPoder(poderForca);
  bizarro.adicionaSuperPoder(poderVisaoRaioX);
  bizarro.adicionaSuperPoder(poderSoproCongelante);
  octopus.adicionaSuperPoder(poderTentaculosIndestrutiveis);
  octopus.adicionaSuperPoder(poderVelocidade);
  //criando confronto
  confronto = new Confronto();
})

describe('valida métodos da classe confronto', () => {

  test('Homem aranha VS Duende-Verde -  (Homem aranha deve ganhar)', () => {
    let resultado = confronto.lutar(homemAranha, duendeVerde)
    expect(resultado).toEqual(1);
  });

  test('Homem aranha VS Bizarro -  (Bizarro deve ganhar)', () => {
    let resultado = confronto.lutar(homemAranha, bizarro)
    expect(resultado).toEqual(2);
  });

  test('Homem aranha VS Octopus -  (deve empatar)', () => {
    let resultado = confronto.lutar(homemAranha, octopus)
    expect(resultado).toEqual(0);
  });

  test('Ambos heroi e vilão devem ser instância da classe Persongem', () => {
    expect(() => {
      confronto.lutar('carro', 'caminhao');
    }).toThrow(Error('super heroi e vilão devem ser instância de personagem'));
  })
})