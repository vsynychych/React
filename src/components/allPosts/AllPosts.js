import React, {Component} from 'react';
import Post from "../post/Post";

class AllPosts extends Component {

    state = {posts: [], chosenOne: null}

    componentDidMount() {
        fetch("http://jsonplaceholder.typicode.com/posts")
            .then(value => value.json())
            .then(value => {
                this.setState({posts: value});
            })
    }

    onPostChose = (id) => {
        let chosenOne = this.state.posts.find(value => value.id === id);
        this.setState({chosenOne});
    }


    render() {
        let {posts, chosenOne} = this.state
        let cls = "green";
        return (
            <div>
                {posts.map((value) => (<Post item={value} key={value.id} onPostChose={this.onPostChose}/>))}
                {chosenOne && <h2 className={cls}>{chosenOne.id}-{chosenOne.title} </h2>}
            </div>
        )
    }
}

export default AllPosts;