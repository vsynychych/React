export class UsersService {
    url = 'http://jsonplaceholder.typicode.com/users';

    getUsers() {
        return fetch(this.url).then(value => value.json());
    }

    getUserByName(id) {
        return fetch(this.url + "/" + id).then(value => value.json());
    }
}