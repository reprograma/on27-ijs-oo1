class Income{
    balance;
    interestRate;

    constructor(initialBalance, initialInterestRate){
        this.balance = initialBalance;
        this.interestRate = initialInterestRate;
    }

    printBalance(){
        console.log(`O saldo é ${this.balance}.`)
    }

    calculateIncome(){
        const rendimento = this.balance * this.interestRate
        this.balance += rendimento
        console.log(`O rendimento é R$ ${rendimento}. O saldo atual é ${this.balance}.`)
    }
}

const investimento = new Income(500, 0.2)

console.log(investimento)
investimento.calculateIncome(0.5)