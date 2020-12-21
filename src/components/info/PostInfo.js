import React, {Component} from 'react';
import {PostService} from "../../services/PostService";

class PostInfo extends Component {
    state = {post: null};
    postService = new PostService();

    componentDidMount() {
        let {item} = this.props;
        this.postService.getPostID(item).then(value => this.setState({post: value}))
    }

    render() {
        let {post} = this.state;

        return (
            <div className={"postInfo"}>
                {post && <div>  ID: {post.id} <br/> TITLE: {post.title} <br/> BODY: {post.body} </div>}
            </div>
        );
    }
}

export default PostInfo;