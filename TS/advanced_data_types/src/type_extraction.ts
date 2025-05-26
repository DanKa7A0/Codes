let names = {
    fName: 'John',
    lName: 'Doe',
    age: 22,
    getPersonInfo() { 
        return `${this.fName} ${this.lName}, age ${this.age}`;
    }
};
let cityInfo = {
    city: 'Boston',
    street: 'Nowhere street',
    number: 13,
    postalCode: 51225,
    getAddressInfo() { 
        return `${this.street} ${this.number}, ${this.city} ${this.postalCode}` ;
    } 
};

type Names = {
    fName: string;
    lName: string;
    age: number;
    getPersonInfo(): string;
};

type CityInfo = {
    city: string;
    street: string;
    number: number;
    postalCode: number;
    getAddressInfo(): string;
};

function createCombinedFunction(names: Names, cityInfo: CityInfo){
    return function combinedFunction(personInfo: Names & CityInfo) { 
        `Hello, ${names.getPersonInfo()} from ${cityInfo.getAddressInfo()}`;
    }
}

let combinedFunction = createCombinedFunction(names, cityInfo);
let combinedPerson = Object.assign({}, names, cityInfo);
combinedFunction(combinedPerson); 