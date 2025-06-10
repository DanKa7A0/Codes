function log(target:any, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;

    descriptor.value = function(...args: any[]) {
        console.log(`Function '${propertyKey}' called with arguments: ${args.join(', ')}`);

        return originalMethod.apply(this, args);
    }
}

class Person {
    constructor(fName: string, lName: string) {
        this.fName = fName;
        this.lName = lName;
    }

    public fName: string;
    public lName: string;

    @log
    static getFullName(fName: string, lName: string): string {
        return `${fName} ${lName}`;
    }
}



let person = new Person('John', 'Does');
Person.getFullName(person.fName, person.lName)
Person.getFullName('Benny', 'Tres'); 