import React, {Component} from 'react';
import User from "./User";

class Users extends Component {
    users = [
        {name: 'vasya', car: 'Corolla', age: 31, status: false},
        {name: 'petya', car: 'Avensis', age: 30, status: true},
        {name: 'kolya', car: 'Passat', age: 29, status: true},
        {name: 'olya', car: 'Golf', age: 28, status: false},
        {name: 'max', car: 'Touran', age: 30, status: true},
        {name: 'anya', car: 'Caddy', age: 31, status: false},
        {name: 'oleg', car: 'Jetta', age: 28, status: false},
        {name: 'andrey', car: 'Camry', age: 29, status: true},
        {name: 'masha', car: 'Logan', age: 30, status: true},
        {name: 'olya', car: 'Megan', age: 31, status: false},
        {name: 'max', car: 'Toaurag', age: 31, status: true}
    ];
    render() {
        return (
            <div>
                {
                    this.users.map((value, index) =>
                        <User user={value} key={index}/>
                    )
                }
            </div>
        );
    }
}

export default Users;