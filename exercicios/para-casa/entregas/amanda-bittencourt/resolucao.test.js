import class { SuperPoder ; Personagem ; Confronto } from "./resolucao.js"

describe('SuperPoder Class', () => {
  test('SuperPoder com propriedades de Solta Teia', () => {
    const poder = new SuperPoder('Solta Teia', 3);
    expect(poder.nome).toBe('Solta Teia');
    expect(poder.categoria).toBe(3);
  });
});

describe('Personagem Class', () => {
  test('Personagem com os nomes corretos', () => {
    const personagem = new Personagem('Homem-Aranha', 'Peter Park');
    expect(personagem.nome).toBe('Homem-Aranha');
    expect(personagem.nomeVidaReal).toBe('Peter Park');
  });

  test('AdicionaSuperPoder deve adicionar os super poderes', () => {
    const personagem = new Personagem('Homem-Aranha', 'Peter Park');
    const poder = new SuperPoder('Solta Teia', 3);
    personagem.adicionaSuperPoder(poder);
    expect(personagem.poderes.length).toBe(1);
  });

  test('PoderTotal deve calcular o poer total', () => {
    const personagem = new Personagem('Homem-Aranha', 'Peter Park');
    const poder1 = new SuperPoder('Solta Teia', 3);
    const poder2 = new SuperPoder('Andar em Paredes', 2);
    personagem.adicionaSuperPoder(poder1);
    personagem.adicionaSuperPoder(poder2);
    expect(personagem.poderTotal()).toBe(5);
  });
});
