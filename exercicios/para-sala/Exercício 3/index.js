class Account {
    id;
    name;
    #balance

    constructor(id, name, balance) {
        this.id = id;
        this.name = name;
        this.#balance = balance;
    }

    credit(amount) {
        this.#balance = this.#balance + amount
        console.log(`Novo valor adicionado. O novo saldo de ${this.name} é de R$ ${this.#balance.toFixed(2)}`);
    }

    debit(amount) {
        if (amount > this.#balance) {
            return
        }
       this.#balance -= amount
        console.log(`Novo valor debitado. O novo saldo de ${this.name} é de R$ ${this.#balance.toFixed(2)}`);
    }

    transferTo(anotherAccount, amount) {
        if(anotherAccount instanceof Account) {
            console.log(anotherAccount);
        }
        if (amount > this.#balance) {
            console.log("Saldo insuficiente!");
            return
        }
        this.debit  (amount);
        anotherAccount.credit(amount);

        console.log(`Nova transferência realizada. O valor R$  ${amount.toFixed(2)}`);
    }
}
const account1 = new Account(1, "Roxanie", 1000)
const account2 = new Account(1, "Fernanda", 2000)


console.log(account1);

account1.credit(1000)
account1.debit(200)
account1.transferTo(account2, 200)