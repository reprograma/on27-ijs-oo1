// get e set não é exclusivo de atributos privados, é uma boa prática usar para não modificar os atributos "originais", nos privados é obrigatório o uso

// quando a gente usa get e set a gente chama como se fosse um atributo, sem () para executar a função
class Employee{
    #id;
    #firstName;
    #lastName;
    #salary;

    constructor(id, firstName, lastName, salary) {
        this.#id = id;
        this.#firstName = firstName;
        this.#lastName =lastName;
        this.#salary = salary;
    }

    raiseSalary(percent){
        return this.salary += this.salary * percent
    }

    get getID(){
        return this.#id;
    }

    get getFirstName(){
        return this.#firstName;
    }

    get getLastName(){
        return this.#lastName;
    }

    get getName(){
        return `${this.#firstName} ${this.#lastName}`;
    }

    get salary(){
        return this.#salary;
    }

    set salary(newSalary){ // void
       console.log(this.#salary = newSalary)
    }

    get getAnnualSalary(){
        return this.#salary * 12
    }

    employeeToString(){
        return `id: ${this.#id}, name: ${this.getName}, salary: ${this.salary}` // chamando this.salary usamos o método, se usamos this.#salary chamamos o atributo privado
    }
}

const employee1 = new Employee(1, 'Geice', 'Sousa Pinho', 3000);
console.log(employee1);
console.log(employee1.salary);
employee1.raiseSalary(0.1);
console.log(employee1.getAnnualSalary);
console.log(employee1.salary = 3500);
console.log(employee1.getAnnualSalary);
console.log(employee1.getName);
console.log(employee1.getFirstName);
console.log(employee1.getLastName);
console.log(employee1.employeeToString());