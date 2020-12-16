import React, {Component} from 'react';
import './Post.css'
import {Link} from "react-router-dom";

class Post extends Component {
    render() {
        console.log(this.props.item);
        let {item}=this.props;
        return (
            <div className={'post'}>
                {item.id} - {item.title} -
                <Link to={`/posts/${item.id}`}> Details </Link>
            </div>
        );
    }
}
export default Post;