import React from 'react';
import Catalog from './Catalog';

class Carousel extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            error: null,
            isLoaded: false,
            products: {},
        }
    }

    componentDidMount() {
        fetch("http://localhost:5001")
        .then(res => res.json())
        .then(
            result => {
                this.setState({
                    isLoaded: true,
                    products: result.products
                })
            },
            error => {
                this.setState({
                    isLoaded: true,
                    error,
                })
            }
        )
    }


    render() {
        const {products, error, isLoaded} = this.state
        if (error)
            return <div>
                        <h1>Error! Failed to get products from backend :(</h1>
                        <p>Got error: {error.message}</p>
                    </div>
        if (!isLoaded)
            return <h2>App initialization...</h2>
        return  <Catalog products={products} />
                
    }
}

export default Carousel;