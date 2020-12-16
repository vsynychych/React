import React, {Component} from 'react';
import {CommentsService} from "../../services/commentsService/CommentsService";
import Comment from "../comment/Comment";

class AllComments extends Component {
    state={comments:[]};
    commentsService=new CommentsService();
    componentDidMount() {
        this.commentsService.getComments().then(value => this.setState({comments:value}));
    }

    render() {
        let {comments}=this.state;
        return (
            <div>
                {comments.map(value => <Comment item={value} key={value.id}  />)}
            </div>
        );
    }
}

export default AllComments;