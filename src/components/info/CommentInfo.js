import React, {Component} from 'react';
import {CommentService} from "../../services/CommentService";

class CommentInfo extends Component {

    state = {comment: null};
    commentService = new CommentService();

    componentDidMount() {
        let {item}=this.props
        this.commentService.getCommentID(item).then(value => this.setState({comment: value}));
    }

    render() {
        let {comment} = this.state;
        return (
            <div className={"commentInfo"}>
                {comment && <div> ID:{comment.id} <br/> Name: {comment.name} <br/> E-mail: {comment.email} <br/>
                Body: {comment.body}</div>}
            </div>
        );
    }
}

export default CommentInfo;