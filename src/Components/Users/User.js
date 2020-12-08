import React, {Component} from 'react';
import './UserStyle.css'


class User extends Component {
    render() {
        console.log(this.props.user);
        let {user}=this.props
        return (
            <div>
                <div className={"stl"}>Name:{user.name}, Age:{user.age}, Car:{user.car}, Status:{user.status}</div>
            </div>
        );
    }
}

export default User;