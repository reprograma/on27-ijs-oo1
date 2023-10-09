class Employee {
    id;
    name;
    salary;

    constructor(id, name, salary){
        this.id = id;
        this.name = name;
        this.salary = salary
    }

    raiseSalary(percent) {
        this.salary = this.salary + (this.salary * percent)
        console.log(`Salário recebeu aumento, o novo salário é de R$ ${this.salary}`);
    }
}

const employee1 = new Employee (1, "Fernanda", 5000)

console.log(employee1);
employee1.raiseSalary(0.2)