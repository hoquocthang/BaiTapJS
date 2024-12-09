class Book {
    title: string
    author: string
    isbn: string
    constructor(title: string, author: string, isbn: string) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}
class Library {
    books: Book[] = []

    addBook(book: Book): void {
        this.books.push(book);
    }
    removeBook(isbn: string): void {
        this.books = this.books.filter(book => book.isbn !== isbn);
    }

    findBook(title: string): Book | undefined {
        return this.books.find(book => book.title === title);
    }
}
const book1 = new Book('truyen kieu', 'nguyen du', '0111')
const book2 = new Book('truyen cuoi', 'nguyen du', '0112')
const book3 = new Book('truyen hay', 'nguyen du', '0113')
const library = new Library()
library.addBook(book1)
library.addBook(book2)
library.addBook(book3)
console.log(library.books);
library.removeBook('0113')
console.log(library.books);
