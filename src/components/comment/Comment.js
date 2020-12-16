import React, {Component} from 'react';
import {Link} from "react-router-dom";
import './Comment.css'

class Comment extends Component {
    render() {
        console.log(this.props.item);
        let {item}=this.props
        return (
            <div className={'comment'}>
                {item.id} - {item.name} -
                <Link to={`/comments/${item.id}`}> Details </Link>
            </div>
        );
    }
}

export default Comment;