export class Library {
    private books: string[] = [];
    private user: string[] = [];

    addBook(book: string): void {
        this.books.push(book);
    }
    addUser(user: string): void {
        this.user.push(user);
    }

    removeBook(book: string): void {
        const index = this.books.indexOf(book);
        if (index > -1) {
            this.books.splice(index, 1);
        }
    }
    removeUser(user: string): void {
        const index = this.user.indexOf(user);
        if (index > -1) {
            this.user.splice(index, 1);
        }
    }

    listBooks(): string[] {
        return this.books;
    }

    listUsers(): string[] {
        return this.user;
    }
}