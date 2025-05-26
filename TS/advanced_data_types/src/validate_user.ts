type User = {
    id: number | string,
    username: string,
    passwordHash: string | string[],
    status: 'Locked' | 'Unlocked' | 'Deleted',
    email?: string
} 

function isUser(input: object): input is User {
    return "id" in input && (typeof input.id === "number" && input.id > 100 || typeof input.id === "string" && input.id.length === 14)
        && "username" in input && typeof input.username === "string" && input.username.length >= 5  && input.username.length <= 10
        && "passwordHash" in input && (
            typeof input.passwordHash === "string" && input.passwordHash.length === 20 || 
            Array.isArray(input.passwordHash) && input.passwordHash.length === 4 && input.passwordHash.every(x => typeof x === "string" && x.length === 8)
        )
        && "status" in input && (input.status === "Locked" || input.status === "Unlocked")
    ;
}

console.log(isUser({ id: 120, username: 'testing', passwordHash: '123456-123456-123456', status: 'Deleted', email: 'something' }));
console.log(isUser({ id: '1234-abcd-5678', username: 'testing', passwordHash: '123456-123456-123456', status: 'Unlocked' }));
console.log(isUser({ id: '20', username: 'testing', passwordHash: '123456-123456-123456', status:'Deleted', email: 'something' }));
console.log(isUser({ id: 255, username: 'Pesho', passwordHash: ['asdf1245', 'qrqweggw', '123-4567','98765432'], status: 'Locked', email: 'something' }));
console.log(isUser({ id: 'qwwe-azfg-ey38', username: 'Someone', passwordHash: ['qwezz8jg', 'asdg-444','12-34-56'], status: 'Unlocked' }));
console.log(isUser({ id: 1344, username: 'wow123', passwordHash: '123456-123456-1234567', status: 'Locked', email: 'something@abv.bg' }));

