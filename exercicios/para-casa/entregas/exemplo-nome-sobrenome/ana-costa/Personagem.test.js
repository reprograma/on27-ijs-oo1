
import { Personagem } from "./Personagem.js";
import { SuperPoder } from "./SuperPoder.js";

let homemAranha;

beforeEach(() => {
  homemAranha = new Personagem('Homem Aranha', 'Peter Parker');
})

describe('Deve validar métodos da classe Personagem', () => {

  test('deve validar método getNome', () => {
    expect(homemAranha.nome).toEqual('Homem Aranha');
  });

  test('deve validar método getNomeVidaReal', () => {
    expect(homemAranha.nomeVidaReal).toEqual('Peter Parker');
  });

  describe('Deve validar métodos de poder', () => {
    let poderTeia;
    let poderAndarParedes;
    let poderSentido;
    let poderForca;
    let poderVelocidade;

    beforeEach(() => {
      poderTeia = new SuperPoder('soltar teia', 3);
      poderAndarParedes = new SuperPoder('andar em paredes', 2);
      poderSentido = new SuperPoder('Sentido apurado', 1);
      poderForca = new SuperPoder('força', 4);
      poderVelocidade = new SuperPoder('velocidade', 3);
    })

    test('Deve lançar uma exceção ao adicionar super poder inválido', () => {
      const superPoderInvalido = {nome: 'Poder legal', categoria: 10}
      expect(() => {
        homemAranha.adicionaSuperPoder(superPoderInvalido);
      }).toThrow(Error('Super poder inválido'));
    })

    test('deve lançar exceção ao tentar adicionar mais que 4 poderes', () => {
      homemAranha.adicionaSuperPoder(poderTeia);
      homemAranha.adicionaSuperPoder(poderAndarParedes);
      homemAranha.adicionaSuperPoder(poderSentido);
      homemAranha.adicionaSuperPoder(poderForca);

      expect(() => {
        homemAranha.adicionaSuperPoder(poderVelocidade);
      }).toThrow(Error('Limite máximo de poderes excedido'));
    })

    test('Deve adicionar super poderes corretamente', () => {
      expect(homemAranha.adicionaSuperPoder(poderTeia))
      .toEqual('Poder soltar teia com categoria 3 adicionado com sucesso');
      expect(homemAranha.adicionaSuperPoder(poderAndarParedes))
      .toEqual("Poder andar em paredes com categoria 2 adicionado com sucesso");
      expect(homemAranha.adicionaSuperPoder(poderSentido))
      .toEqual("Poder Sentido apurado com categoria 1 adicionado com sucesso");
    })

    test('Deve retornar poder total corretamente', () => {
      homemAranha.adicionaSuperPoder(poderTeia);
      homemAranha.adicionaSuperPoder(poderAndarParedes)
      expect(homemAranha.poderTotal()).toEqual(5)
    })
  })
})