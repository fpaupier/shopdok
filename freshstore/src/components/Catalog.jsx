import React from 'react'

class Catalog extends React.Component {

    render() {
        const products = this.props.products
        return (
            <ul>
                {products.map((itm, idx) => (
                    <li> {itm} </li>
                ))}
            </ul>
        )
    }
}

export default Catalog;