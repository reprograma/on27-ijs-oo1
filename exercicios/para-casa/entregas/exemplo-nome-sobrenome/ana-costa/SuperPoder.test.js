import { SuperPoder } from "./SuperPoder.js"

let superPoder;

beforeEach(() => {
  superPoder = new SuperPoder('soltar teia', 3);
})

describe('Deve validar métodos da classe SuperPoder', () => {

  test('Método getNome deve retornar o nome do poder', () => {
    expect(superPoder.nome).toEqual('soltar teia');
  })

  test('Método getCategoria deve retornar o nome do poder', () => {
    expect(superPoder.categoria).toEqual(3);
  })
})