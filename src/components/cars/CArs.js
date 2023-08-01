import React from "react";

import {carsServices} from "../../services/carsServices/carsServices";
import Car from "./Car/Car";

class CArs extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            cars: []
        }
    }
    componentDidMount() {
        carsServices.getAll()
            .then(({data})=> this.setState(({cars:data})))
    }
    render() {
        return(
            <div>
                <h1>Cars</h1>
                {this.state.cars.map(car => <Car key={car.id} car={car}/>)}
            </div>
        )
    }
}
export default CArs