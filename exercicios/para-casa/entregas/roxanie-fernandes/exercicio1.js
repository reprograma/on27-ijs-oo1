class Animal {
  #nome;
  constructor(nome, raca, idade, qtdpata, cor) {
    this.#nome = nome;
    this.raca = raca;
    this.idade = idade;
    this.qtdpata = qtdpata;
    this.cor = cor;
  }

  get nome() {
    return this.#nome;
  }

  set nome(novoNome) {
		this.#nome = novoNome
	}

  comer() {
    console.log(`${this.nome} está comendo`);
  }

  dormir() {
    console.log(`${this.#nome} está dormindo`);
  }

  som() {
    console.log(`${this.#nome} está fazendo som`);
  }

  cagar() {
    console.log(`${this.#nome} está fazendo cocô`);
  }
  
}

const animal1 = new Animal ("Danilo", "misturado", 1, 4, "marronzinho" )

animal1.cagar()
