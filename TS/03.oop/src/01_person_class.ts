class Person {
    firstName: string;
    lastName: string;
    age: number;

    constructor(fName: string, lName:string, age: number){
        this.firstName = fName;
        this.lastName = lName;
        this.age = age;
    }

    introduce(): string {
        return `My name is ${this.firstName} ${this.lastName} and I am ${this.age} years old.`;
    }
};

const person = new Person("John", "Doe", 30);
console.log(person.introduce())
