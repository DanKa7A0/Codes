function createdOn<T extends { new (...args: any[]): {} }>(constructor: T){
    return class extends constructor {
        createdOn = new Date();
    }
}


@createdOn
class User {
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    name: string;
    age: number;

    displayUserInfo(): void {
        console.log(`Name: ${this.name}, Age: ${this.age}`);
    }
}

const user1 = new User("John Doe", 30);
user1.displayUserInfo()
console.log(user1);
console.log((user1 as any).createdOn);