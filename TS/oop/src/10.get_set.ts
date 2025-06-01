class User {
    constructor(username: string){
        this.username = username;
    }

    get username(){
        return this._username;
    }
    set username(newUsername: string){
        if (newUsername.length <= 3){
            throw new Error("Username must be at least 3 characters long");
        }

        this._username = newUsername;
    }

    private _username: string;
}

const user = new User("Martin");
user.username = "johnDoe";
console.log(user.username);

const user2 = new User("jo"); // setter error

const user3 = new User("Martin");
user.username = "Do"; // setter error