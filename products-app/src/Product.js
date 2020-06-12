import React from 'react'
import './Product.css'

function Product(props) {
    return (
        <div className="ProductContainer">
            <h3>{props.product.name}</h3>
            <p>{props.product.size}</p>
            <p>{props.product.description}</p>
        </div>
    )
}

export default Product