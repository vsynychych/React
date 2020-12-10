import React, {Component} from 'react';
import Post from "../post/Post";

class AllPosts extends Component {


    state={posts:[]}
    componentDidMount() {
        fetch("http://jsonplaceholder.typicode.com/posts")
            .then(value => value.json())
            .then(value =>{
                this.setState({posts:value})
            })
    }

    render() {
        let{posts} =this.state
        return (
            <div>
                {posts.map((value)=>(<Post  item={value} />))}
            </div>
        );
    }
}

export default AllPosts;