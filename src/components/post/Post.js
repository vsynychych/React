import React, {Component} from 'react';
import './Post.css'

class Post extends Component {

    render() {
        // console.log(this.props.item);
        let {item, onPostChose} = this.props
        let color = "beige";
        let button = "btn";
        return (
            <div className={color}>
                <button className={button} onClick={() => onPostChose(item.id)}>chose</button>
                {item.id} - {item.title}
            </div>
        );
    }
}

export default Post;