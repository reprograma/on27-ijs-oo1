// objetos e prototype são iguais
// todo objeto tem um prototype, um esqueleto, uma forma
// objeto.prototype.metodo = ()=>{}, cria um metodo para uma classe já existente
// Objeto.getPrototypeOf(Object.prototype)
// Objeto.setPrototypeOf(ObjectHerdeiro.prototype, ObjectMãe.prototype)

// class é um Syntatic Sugar, uma forma mais rebuscada de escrever um construtor e prototype

// String, Number, Array... tudo é objeto/prototype/class

console.log(String.prototype)
console.log(Number.prototype)
console.log(Array.prototype)
console.log(Object.prototype)


/* ----- ORIENTAÇÃO A OBJETOS ----- */ 

// entidades: hospital(que possui funcionário(médico, enfermeira, técnico, recepcionista), departamento(...)), banco, escola, mercado; algo do mundo real

// class são tipos de dados definidos, "formas de bolo"; objetos são a instância da classe, qo que foi criado com o molde da class, o conteúdo, a representação de uma classe, exemplo: class Aluna; objeto: new Aluna('nome', 16, '2º ano')

// 4 pilares: abstração, encapsulamento, herança e polimorfismo

// encapsulamento: atributos privados, que não podem ser acessados facilmente por outros objetos; o get e set permite o acesso e modificação

// polimorfismo são as especificações das classes filhas

// void é uma palavra reservada que indica que não há um retorno implícito, apenas uma execução dentro da função; é usado em linguagens fortemente tipadas

// UML - linguagem de modelagem unificada, pode ser representada por um diagrama que contém o nome da classe, seus atributos e metódos de maneira visual; pode ser um quadro com 3 divisões, para informar se o método ou atributo é publico(+) ou privado(-) usamos +/-