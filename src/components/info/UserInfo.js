import React, {Component} from 'react';
import {UsersService} from "../../services/UsersService";

class UserInfo extends Component {

    state = {user: null};
    userService = new UsersService();

    componentDidMount() {
        let {item} = this.props;
        console.log(this.props);
        this.userService.getUserByName(item).then(value => this.setState({user: value}));
    }

    render() {
        let {user} = this.state;
        console.log(user);
        return (
            <div className={"userInfo"}>
                {user && <div> ID: {user.id} <br/> Name:{user.name} <br/> E-mail: {user.email} <br/>
                Website:{user.website} <br/> Phone number:{user.phone} <br/> Address: {user.address.city}, street:{user.address.street} </div>}
            </div>
        );
    }
}

export default UserInfo;