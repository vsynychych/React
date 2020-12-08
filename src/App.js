import React, {Component} from 'react';
import CarsComponents from "./Components/carsComponents/CarsComponents";
import {cars} from "./dataBase/carDB";

class App extends Component {
    render() {
        return (
            <div>
                {
                    cars.map((value, index) =>{
                            let stl=index%2 ? "aquamarine" : "yellow";
                            return(<CarsComponents item={value} color={stl} key={index}/>)
                        }
                    )
                }
            </div>
        );
    }
}

export default App;