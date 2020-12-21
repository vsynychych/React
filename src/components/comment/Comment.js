import React, {Component} from 'react';
import {Link, withRouter} from "react-router-dom";

class Comment extends Component {
    render() {
        console.log(this.props);
        let {item,match:{url}}=this.props;
        return (
            <div>
              <hr/>  ID: {item.id} - {item.name} - <Link to={url+"/"+item.id}> More info </Link>
            </div>
        );
    }
}

export default withRouter (Comment);