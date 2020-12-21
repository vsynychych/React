import React, {Component} from 'react';
import {CommentService} from "../../services/CommentService";
import Comment from "../comment/Comment";
import CommentInfo from "../info/CommentInfo";
import {Route, Switch, withRouter} from "react-router-dom";

class AllComments extends Component {
    state = {comment: []};
    commentService = new CommentService();

    componentDidMount() {
        this.commentService.getComments().then(value => this.setState({comment: value}))
    }

    render() {
        let {comment} = this.state;
        let {match: {url}} = this.props;
        return (
            <div>
                <Switch>
                    <Route path={url + "/:id"} render={(props) => {
                        const {match: {params: {id}}} = props;
                        return <CommentInfo item={id} key={id}/>
                    }}/>
                </Switch>
                <div>
                    {comment.map(value => <Comment item={value} key={value.id}/>)}

                </div>
            </div>

        );
    }
}

export default withRouter(AllComments);