class Account {
  id;
  name;
  #balance;

  constructor(id, client, balanceAvaiable) {
    this.id = id;
    this.name = client;
    this.#balance = balanceAvaiable;
  }

  credit(amount) {
    this.#balance += amount;
    console.log( `Seu saldo atual é R$ ${this.#balance}.`)
  }

  debit(amount) {
    this.#balance -= amount;
    console.log( `Debito realizado. Seu saldo atual é R$ ${this.#balance}.`)
    

  }

  tranferTo(anotherAccont, amount){
    if (!(anotherAccont instanceof Account)){
        console.log( `${anotherAccont} não é uma conta válida.`);
        return
    } 
    
    if (this.#balance < amount) {
        console.log(`Saldo insuficiente. Seu saldo é R$ ${this.#balance}.`);
        return
    }

    this.debit(amount)
    anotherAccont.credit(amount)
    console.log(`${this.name} transferência para ${anotherAccont.name} realizada com sucesso. Valor transferido ${amount}.`)

  }
}

const contaGeice = new Account(3, 'Geice', 8000)
const contaAnne = new Account(4, 'Viviane', 80)
console.log(contaGeice)
contaGeice.credit(5000)
contaGeice.debit(500)

contaAnne.tranferTo(contaGeice, 90)
console.log(contaAnne)

