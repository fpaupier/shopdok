import React from 'react';
import ReactDom from 'react-dom';

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
        fetch("http://product-service:80")
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
            return <h1>Error! Failed to get products from backend :(</h1>
        if (!isLoaded)
            return <h2>App initialization...</h2>
        return (
            <div>
                products[0]
            </div>
        )
    }
}

export default Carousel;