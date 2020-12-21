import React, {Component} from 'react';
import {Link, withRouter} from "react-router-dom";

class Post extends Component {
    render() {
        let {item, match: {url}} = this.props;
        return (
            <div>
               <hr/>  ID: {item.id} - {item.title} - <Link to={url + "/" + item.id}> More info </Link>
            </div>
        );
    }
}

export default withRouter(Post);