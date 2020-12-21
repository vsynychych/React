import React, {Component} from 'react';
import {UsersService} from "../../services/UsersService";
import UserInfo from "../info/UserInfo";
import User from "../user/User";
import {Route, Switch, withRouter} from "react-router-dom";

class AllUsers extends Component {
    userService = new UsersService();
    state = {user: []};

    componentDidMount() {
        this.userService.getUsers().then(value => this.setState({user: value}));
    }
    render() {
        let {user} = this.state;
        let {match: {url}} = this.props;
        return (
            <div>
                <div>
                    <Switch>
                        <Route path={url + "/:id"} render={(props) => {
                            const {match: {params: {id}}} = props;
                            return <UserInfo item={id} key={id}/>
                        }}/>
                    </Switch>
                </div>
                {user.map(value => <User item={value} key={value.id}/>)}
            </div>
        );
    }
}
export default withRouter(AllUsers);