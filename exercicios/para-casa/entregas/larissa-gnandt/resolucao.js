class SuperPoder {
  #nome;
  #categoria;

  constructor(nome, categoria) {
    this.#nome = nome;
    this.#categoria = categoria;
  }

  get nome() {
    return this.#nome;
  }

  get categoria() {
    return this.#categoria;
  }
}

class Personagem {
  #nome;
  #nomeVidaReal;
  #poderes;

  constructor(nome, nomeVidaReal) {
    this.#nome = nome;
    this.#nomeVidaReal = nomeVidaReal;
    this.#poderes = [];
  }

  get nome() {
    return this.#nome;
  }

  get nomeVidaReal() {
    return this.#nomeVidaReal;
  }

  adicionaSuperPoder(poder) {
    if (!(poder instanceof SuperPoder)) {
      return console.log("Este poder deve ser uma instância de SuperPoder!");
    }

    if (this.#poderes.length === 4) {
      return console.log(
        "A lista de poderes não pode ultrapassar o total de 4 poderes."
      );
    }

    this.#poderes.push(poder);
    return console.log(
      `O poder "${poder.nome}" foi adicionado a lista de poderes.`
    );
  }

  poderTotal() {
    const somaPoderes = this.#poderes.reduce((acumulador, poder) => {
      return acumulador + poder.categoria;
    }, 0);

    return somaPoderes;
  }
}

class Confronto {
  lutar(superHeroi, vilao) {
    const poderSuperHeroi = superHeroi.poderTotal();
    const poderVilao = vilao.poderTotal();

    if (poderSuperHeroi > poderVilao) {
      return 1;
    } else if (poderSuperHeroi < poderVilao) {
      return 2;
    } else {
      return 0;
    }
  }
}

const superPoder1 = new SuperPoder("Solta Teia", 3);
const superPoder2 = new SuperPoder("Andar em Paredes", 2);
const superPoder3 = new SuperPoder("Sentido Apurado ", 1);
const superPoder4 = new SuperPoder("Andar em Paredes", 2);
const superPoder5 = new SuperPoder("Andar em Paredes", 2);
const superPoder6 = new SuperPoder("Força", 5);
const superPoder7 = new SuperPoder("Força", 5);

const heroi = new Personagem("Homem-Aranha", "Peter Park");

const vilao = new Personagem("Duende-Verde", "Norman Osbourne");

const confronto1 = new Confronto();

heroi.adicionaSuperPoder(superPoder1);
heroi.adicionaSuperPoder(superPoder2);
heroi.adicionaSuperPoder(superPoder3);
heroi.adicionaSuperPoder(superPoder4);
heroi.adicionaSuperPoder(superPoder5);
console.log(
  `O herói ${heroi.nome} tem o poder total de: ${heroi.poderTotal()}`
);
vilao.adicionaSuperPoder(superPoder6);
vilao.adicionaSuperPoder(superPoder6);
console.log(
  `O vilão ${vilao.nome} tem o poder total de: ${vilao.poderTotal()}`
);

const resultadoDoConfronto = confronto1.lutar(heroi, vilao);
switch (resultadoDoConfronto) {
  case 1:
    console.log(`O herói ${heroi.nome} ganhou o confronto`);
    break;
  case 2:
    console.log(`O vilão ${vilao.nome} ganhou o confronto`);
    break;
  default:
    console.log(`O confronto terminou empatado`);
}
