import { checkValidForm, collectData } from "../helper";
import User, { UserProps } from "../model/users.model";

export class AuthView {
    constructor() {}
    
    bindAddUser(handle: (user: User) => void) {
        const regbutton = document.querySelector('.wrapper__form-reg') as HTMLButtonElement;
        const formrg = document.querySelector('.formregist') as HTMLFormElement;
      
        regbutton.addEventListener('click', (e) => {
        e.preventDefault();
        if(checkValidForm(formrg)){
          console.log('Registering user...');
            const dtb = collectData(formrg);
            const pw = document.querySelector('#password') as HTMLInputElement;
            const confirm = document.querySelector('#confirm') as HTMLInputElement;
            if (pw.value === confirm.value) {
            const userProps: UserProps = {
                name: dtb.name as string,
                email: dtb.email as string,
                password: dtb.password as string
            };
            const usern = new User(userProps);
            handle(usern);
            setTimeout(() => {
                window.location.href = '/';
            }, 2000);
            } 
            
            // clearForm(formrg);
        }else{
            console.log('Form is not valid');
        }
        });
    }

    login(users: User[]): void {
        users = users;
        const formLogin = document.querySelector('.formlogin') as HTMLFormElement;
        const buttonLogin = document.querySelector('.buttonLogin') as HTMLButtonElement;
        buttonLogin.addEventListener('click', (e) => {
            e.preventDefault();
            console.log('Logging in...');
            if(checkValidForm(formLogin, true)){
                const emailInput = document.querySelector('#email') as HTMLInputElement;
                const email = emailInput.value;
                const passwordInput = document.querySelector('#password') as HTMLInputElement;
                const password = passwordInput.value;
                console.log(email,password)
                const foundUser = users.find(
                    (user) => email === user.email && password === user.password,
                );
                console.log(foundUser)
                if (foundUser) {
                    sessionStorage.setItem('acc', 'acc');
                    window.location.href = '/home';
                }
            }else{
                console.log('Form is not valid');
            }
        });
    }

    showPw() {
        console.log('showPw');
        const eye = document.querySelector('.eye') as HTMLElement;
    
        eye.addEventListener('click', () => {
            const pass = document.querySelector('.passw') as HTMLInputElement;
            if (pass.type === 'password') {
                pass.type = 'text';
            } else {
                pass.type = 'password';
            }
        });
    }

    logout() {
        const logout = document.querySelector('.header__profile--option') as HTMLElement;
        const ul = logout.getElementsByTagName('ul')[0];
        const li = ul.getElementsByTagName('li')[3];
        li.addEventListener('click', (e) => {
            sessionStorage.removeItem('ac');
            window.location.href = '/';
        });
    }
     
}
