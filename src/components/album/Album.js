import React, {Component} from 'react';
import './Album.css'

class Album extends Component {

        render() {
        console.log(this.props.item);
        let {item,onAlbumChose}=this.props;
        let green="green";
        let beige="beige";
        return (
            <div className={beige}>
                <button className={green} onClick={()=>{onAlbumChose(item.id)}}>chose me</button>
                {item.id} - {item.title}
            </div>
        );
    }
}

export default Album;