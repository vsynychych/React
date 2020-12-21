import React, {Component} from 'react';
import {PostService} from "../../services/PostService";
import Post from "../post/Post";
import PostInfo from "../info/PostInfo";
import {Route, Switch, withRouter} from "react-router-dom";

class AllPosts extends Component {
    state = {posts: []};
    postService = new PostService();

    componentDidMount() {
        this.postService.getPosts().then(value => this.setState({posts: value}));
    }

    render() {
        let {posts} = this.state;
        let {match: {url}} = this.props;
        return (
            <div>
                <div>
                    <Switch>
                        <Route path={url + "/:id"} render={(props) => {
                            let {match: {params: {id}}} = props;
                            return <PostInfo item={id} key={id}/>
                        }}/>
                    </Switch>
                </div>
                {posts.map(value => <Post item={value} key={value.id}/>)}
            </div>
        );
    }
}

export default withRouter(AllPosts);