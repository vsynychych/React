import React, {Component} from 'react';
import {AlbumServices} from "../../services/AlbumServices";
import Album from "../album/Album";

class AllAlbums extends Component {

    albumService= new AlbumServices();
    state={album:[],chosenOne:null};
    componentDidMount() {
        this.albumService.getAllPosts().then(value => this.setState({album:value}))
    }

    onAlbumChose=(id)=>{
        this.albumService.getPostById(id).then(value => this.setState({chosenOne:value}))
    }

    render() {
        let {album,chosenOne}=this.state
        let red="red";

        return (
            <div>
                {
                    album.map(value => <Album item={value} key={value.id} onAlbumChose={this.onAlbumChose} red={this.red}/>)
                }
                {
                    chosenOne && <h2 className={red}>{chosenOne.id} - {chosenOne.title}</h2>
                }

            </div>
        );
    }
}

export default AllAlbums;