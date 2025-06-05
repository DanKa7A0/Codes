class Book {
    constructor(title: string, author: string ){
        this.title = title;
        this.author = author;
    }

    public readonly title: string;
    public readonly author: string;    
}

const book = new Book("1984", "George Orwell");
console.log(`${book.title} by ${book.author}`);
// book.title = "Brave New World"; // ts error
// book.author = "Terry Pratchet" // ts error