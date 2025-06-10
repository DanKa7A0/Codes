function validateAge(target: any, propertyKey: string, descriptor: PropertyDescriptor){
    const originalSet = descriptor.set;

    descriptor.set = function(val: number) {
        if (val < 1 || val > 200) {
            throw new Error("Age must be between 1 and 200");
        }

        return originalSet.call(this, val);
    }
}

class Age {
    constructor(age: number){
        this.age = age;
    }

    @validateAge
    set age(val: number){ this._age = val; }
    get age() { return this._age; }
    
    private _age!: number;
}

let ageVal = new Age(10);
ageVal.age = -10; 