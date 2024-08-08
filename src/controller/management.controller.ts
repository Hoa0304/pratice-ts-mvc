import Book from "../model/book.model";
import BookService from "../services/book.service";
import { ManagementView } from "../views";
import { LoginController } from "./book.controller";

export class ManagementController extends LoginController {
    constructor(view: ManagementView, service: BookService) {
        super();
        view = view as ManagementView;
        this.service = service;
        this.initActions();
    }

    handleEdit(id: string, book: Book): void {
        this.service.edit(id, book);
    }

    handleAddBook(book: Book): void {
        this.service.addBook(book);
    }
    
    handleSearch(key: string): void {
        this.service.searchBooks(key);
    }

    handleDeleteData(id: string): void {
        this.service.deleteBooks(id);
    }

    async handleShowEditForm(): Promise<void> {
        const books = await this.service.getBooks();
        if (books) this.view.toggleFormEdit(books, this.handleEdit.bind(this));
    }

    async handleDelete(): Promise<void> {
        await this.handleDisplayData();
        const books = await this.service.getBooks();
        if (books)
        this.view.bindDelete(books, this.handleDeleteData.bind(this));
    }

    initActions(): void {
        this.view.bindAddBook(this.handleAddBook);
        this.handleDelete();
        this.handleShowEditForm();

    }
}
