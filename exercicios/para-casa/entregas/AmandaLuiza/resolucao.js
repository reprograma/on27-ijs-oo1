// Classe base Personagem
class Personagem {
  constructor(nome, poder) {
    this.nome = nome;
    this.poder = poder;
  }
}

// Classe SuperHeroi que herda de Personagem
class SuperHeroi extends Personagem {
  poderTotal() {
    return this.poder * 1.1;
  }
}

// Classe Vilao que herda de Personagem
class Vilao extends Personagem {
  constructor(nome, poder, tempoDePrisao) {
    super(nome, poder);
    this.tempoDePrisao = tempoDePrisao;
  }

  getTempoDePrisao() {
    return this.tempoDePrisao;
  }
}

// Classe Confronto
class Confronto {
  lutar(superHeroi, vilao) {
    const poderTotalSuperHeroi = superHeroi.poderTotal;
    const poderTotalVilao = vilao.poderTotal;

    if (poderTotalSuperHeroi > poderTotalVilao) {
      return 1; // Super-herói ganha a batalha
    } else if (poderTotalVilao > poderTotalSuperHeroi) {
      return 2; // Vilão ganha a batalha
    } else {
      return 0; // Empate
    }
  }
}

// Exemplo de teste
const superman = new SuperHeroi("Superman", 100);
const joker = new Vilao("Coringa", 90, "Perpétua");
const confronto = new Confronto();

const resultado = confronto.lutar(superman, joker);

if (resultado === 1) {
  console.log(`${superman.nome} ganhou a batalha!`);
} else if (resultado === 2) {
  console.log(`${joker.nome} ganhou a batalha!`);
} else {
  console.log("A batalha terminou em empate.");
}
