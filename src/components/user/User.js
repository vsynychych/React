import React, {Component} from 'react';
import {Link, withRouter} from "react-router-dom";

class User extends Component {
    render() {
        console.log(this.props);
        let {item,match:{url}}=this.props

        return (
            <div>
               {item.id} - {item.name}  <Link to={url+"/"+item.id}> Info </Link> <hr/>
            </div>
        );
    }
}

export default withRouter (User);