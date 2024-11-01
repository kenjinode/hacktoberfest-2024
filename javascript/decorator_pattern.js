class Book {
    constructor(title, author) {
        this.title = title;
        this.author = author;
    }

    describe() {
        return `${this.title} by ${this.author}`;
    }
}

// Decorator function to add extra functionality
function giftWrap(book) {
    book.isGiftWrapped = true;
    book.unwrap = () => {
        console.log(`Unwrapped: ${book.describe()}`);
        book.isGiftWrapped = false;
    };
    return book;
}

const myBook = new Book("The Great Gatsby", "F. Scott Fitzgerald");
console.log(myBook.describe()); // "The Great Gatsby by F. Scott Fitzgerald"

const wrappedBook = giftWrap(myBook);
console.log(wrappedBook.isGiftWrapped); // true
wrappedBook.unwrap(); // "Unwrapped: The Great Gatsby by F. Scott Fitzgerald"
console.log(wrappedBook.isGiftWrapped); // false
