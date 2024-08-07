import User from "../model/users.model";
import UserService from "../services/user.service";
import { AuthView } from "../views";

export class AuthController {
    private view: AuthView;
    private service: UserService;

    constructor(view: AuthView) {
        this.view = view;
        this.service = new UserService();
        this.action();
    }

   handleAddUser = (user: User) => {
       console.log('User added:', user);
       this.view.showPw();
       this.service.register(user);
       
    }
    clearFormInvalid(){
        const errorElement = document.querySelectorAll('.error');
        errorElement.forEach((item) => {
            item.textContent = '';
        });
        
    }
    
    
    async handleLogin() {
        const user = await this.service.getUsers();
        if (user) this.view.login(user);
        this.view.showPw();
    }
    action():void{
        if(window.location.pathname === '/register'){
            this.clearFormInvalid();
            this.view.bindAddUser(this.handleAddUser);
        }
        if(window.location.pathname === '/'){
            this.handleLogin();
        }
    }
}
