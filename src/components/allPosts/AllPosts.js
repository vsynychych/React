import React, {Component} from 'react';
import {PostService} from "../../services/postService/PostService";
import Post from "../post/Post";


class AllPosts extends Component {
    postService=new PostService();
    state={posts:[]};
    componentDidMount() {
        this.postService.getAllPost().then(value => this.setState({posts:value}));
    }

    render() {
        let {posts}=this.state
        return (
            <div>
                {posts.map(value =><Post item={value} key={value.id}/>)}
            </div>
        );
    }
}
export default AllPosts;