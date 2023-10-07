class Employee{
    id;
    name;
    salary;

    constructor(id, name, salary) {
        this.id = id;
        this.name = name;
        this.salary = salary;
    }
    raiseSalary(percent){
        return this.salary += this.salary * percent
    }
}

const employee1 = new Employee(1, "Felipe", 3500);
console.log(employee1);
employee1.raiseSalary(0.1);
console.log(employee1);
