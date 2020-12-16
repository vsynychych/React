import React, {Component} from 'react';
import './App.css'

import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom'

import AllComments from "./components/allComments/AllComments";
import AllPosts from "./components/allPosts/AllPosts";

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <div>
                        <Link to={"/posts"}> posts </Link>
                    </div>

                    <div>
                        <Link to={"/comments"}> comments </Link>
                    </div>

                    <div className={'box'}>
                        <Switch>
                            <Route path={"/posts"} render={() => <AllPosts/>}/>
                            <Route path={"/comments"} render={() => <AllComments/>}/>
                        </Switch>
                    </div>
                </div>
            </Router>
        );
    }
}
export default App;
