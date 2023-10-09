class Employee {
    #id;
    #name;
    #salary;

    constructor(id, name, salary) {
        this.#id = id;
        this.#name = name;
        this.#salary = salary
    }

    get id() {
        return this.#id;
    }

    set id(newId) {
        this.#id = newId
    }

    get name() {
        return this.#name;
    }

    set name(newName) {
        this.#name = newName
    }

    get salary() {
        return this.#salary;
    }

    set salary(newSalary) {
        this.#salary = newSalary
    }

    raiseSalary(percent) {
        this.salary = this.salary + (this.salary * percent)
        console.log(`${this.name} recebeu aumento de salário, seu novo salário é de R$ ${this.salary.toFixed(2)}`);
    }
}

const employee1 = new Employee(1, "Fernanda", 5000)

console.log(`id: ${employee1.id}, name: ${employee1.name}, salary: ${employee1.salary}`);
employee1.raiseSalary(0.2)