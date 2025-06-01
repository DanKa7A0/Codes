class Employee {
    constructor(name: string, pos: string, salary: number) {
        this.name = name;
        this.position = pos;
        this.salary = salary;
    }

    public name: string;
    public getDetails(): string {
        return `Name: ${this.name}, Position: ${this.position}`;
    }
    public showSalary(): string {
        return `Salary: ${this.salary}`;
    }

    protected position: string;
    private salary: number;
}

const emp = new Employee("Alice", "Manager", 5000);
console.log(emp.getDetails());
console.log(emp.showSalary());
console.log(emp.name);
// console.log(emp.salary); // ts error
// console.log(emp.position); // ts error