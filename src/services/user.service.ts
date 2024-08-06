import api from '../api/books';
import User from '../model/users.model';

interface UserService{
    users: User[];
    onDataChanged: (data: any)=> void;
}

class UserService implements UserService {
    constructor() {
        this.users = [];
        this.onDataChanged = () => {};
    }

    async getUsers() {
        try {
            let { data } = await api.get('/users');
            if (data) {
                data = await data.map((user: User) => new User(user));
                this.users = data;
                return this.users;
            }
        } catch (error) {

        }
    }
    hello(){
        return 'Hello';
    }
    async register(user: User) {
        console.log('User registered:', user);
        try {
            let { data } = await api.post('/users', user);
            if (data) {
                user = data;
                return user;
            }
        } catch (e) {
        console.log(e);
        }
    }
}

export default UserService;
