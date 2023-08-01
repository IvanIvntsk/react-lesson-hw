import React from 'react';

class Car extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const {id, brand, price, year} = this.props.car
        return(
            <div>
                <div>Id: {id}</div>
                <div>Brand: {brand}</div>
                <div>Price: {price}</div>
                <div>Year: {year}</div>
            </div>
        )
    }
}
export default Car