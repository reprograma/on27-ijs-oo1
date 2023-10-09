class Income {
    balance;
    interestRate;

    constructor(initialBalance, initialInterestRate) {
        this.balance = initialBalance;
        this.interestRate = initialInterestRate;
    }

    printBalance() {
        console.log(`Saldo atual: R$ ${this.balance.toFixed(2)}`);
    }
    calculateIncome() {
        const income = this.balance * this.interestRate;
        this.balance += income;
        console.log(`O seu rendimento foi de R$ ${this.balance.toFixed(2)}`);
    }
}

const income1 = new Income(1000, 0.1);
income1.printBalance();
income1.calculateIncome();
