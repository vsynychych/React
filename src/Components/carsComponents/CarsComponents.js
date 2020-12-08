import React, {Component} from 'react';
import './CarStyle.css';

class CarsComponents extends Component {
    render() {
        console.log(this.props.item);
        let {item,color} = this.props
        return (
            <div>
                <div className={color}>
                    {item.producer} - {item.model} - {item.year} - {item.color} - {item.type} - {item.engine} - {item.volume} - {item.power}
                </div>
            </div>
        );
    }
}

export default CarsComponents;