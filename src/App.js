import React, {Component} from 'react';
import AllUsers from "./components/allUsers/AllUsers";
import AllComments from "./components/allComments/AllComments";
import AllPosts from "./components/allPosts/AllPosts";
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import "./App.css"

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <ul className={"list"}>
                        <li><Link to={"/users"}> Users list </Link></li>
                        <li><Link to={"/posts"}> Posts list </Link></li>
                        <li><Link to={"/comments"}> Comments list </Link></li>
                    </ul>
                    <div>
                        <Switch>
                            <Route path={"/users"} render={() => {
                                return <AllUsers/>
                            }}/>
                            <Route path={"/comments"} render={() => {
                                return <AllComments/>
                            }}/>
                            <Route path={"/posts"} render={() => {
                                return <AllPosts/>
                            }}/>
                        </Switch>
                    </div>
                </div>
            </Router>
        );
    }
}

export default App;