import Book from "../model/book.model";
import BookService from "../services/book.service";
import { ManagementView } from "../views";
import BookView from "../views/book.views";
import { LoginController } from "./book.controller";

export class ManagementController  {
   private view: ManagementView;
    private service: BookService;
    private views: BookView;
    private loginController: LoginController | undefined;

    constructor(views: BookView, service: BookService, view: ManagementView) {
        this.view = view;
        this.service = service;
        this.views = views;
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
        if(this.loginController)
        await this.loginController.handleDisplayData();
        const books = await this.service.getBooks();
        if (books)
        this.view.bindDelete(books, this.handleDeleteData.bind(this));
    }

    initActions(): void {
        console.log('Initializing actions');
        this.view.toggleForm();
        this.view.bindAddBook(this.handleAddBook);
        this.handleDelete();
        this.handleShowEditForm();
    }
}
