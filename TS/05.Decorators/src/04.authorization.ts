export { }
function authourization(role: MockAuthrizationService) {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        const originalGet = descriptor.get;

        descriptor.get = function(){
            if (!role.canViewData(propertyKey)){
                throw new Error("You are not authorized to view this information");
            }

            return originalGet.call(this);
        }
    }
}


class MockAuthrizationService {
    constructor(private userRole: 'Guest' | 'PersonalDataAdministrator' | 'Admin') { }

    canViewData(property: string) {
        switch (this.userRole) {
            case 'Admin': return true;
            case 'PersonalDataAdministrator': return ['name', 'age'].includes(property);
            default: return false;
        }
    }
}

// let mockAuthorizationService = new MockAuthrizationService("Admin");
// let mockAuthorizationService = new MockAuthrizationService("PersonalDataAdministrator");
let mockAuthorizationService = new MockAuthrizationService("Guest");

class User {
    constructor(name: string, age: number, creditCardNumber: string) {
        this._name = name;
        this._age = age;
        this._creditCardNumber = creditCardNumber;
    }

    @authourization(mockAuthorizationService)
    get name(): string { return this._name; }

    @authourization(mockAuthorizationService)
    get age(): number { return this._age; } 

    @authourization(mockAuthorizationService)
    get creditCardNumber(): string { return this._creditCardNumber; } 


    private _name: string;
    private _age: number;
    private _creditCardNumber: string;
}


const user1 = new User("John Doe", 30, 'ABCD-1234');
console.log(user1.name);
console.log(user1.age);
console.log(user1.creditCardNumber);
