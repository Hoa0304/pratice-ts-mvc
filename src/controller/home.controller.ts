import { HomeView } from "../views";

export class HomeController {
    private view: HomeView;

    constructor() {
        this.view = new HomeView();
        this.action();
    }

    action(): void {
        this.view.changeQuote();
    }
}
