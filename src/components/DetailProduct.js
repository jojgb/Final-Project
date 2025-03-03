import React, { Component } from 'react'
// import axios from 'axios';
import axios from '../config/axios'

class DetailProduct extends Component {
    state = {
        product : {}
    }

    componentDidMount() {
        const idproduct = parseInt(this.props.match.params.asdfg)
        axios.get('http://localhost:2071/products/' + idproduct)
            .then(res => {
                this.setState({product: res.data})
            })
    }

    render() {
        const {product} = this.state
        return (
            
            <div className=" card" key={product.id}>
                <div className="card-header">
                    {product.name}
                </div>
                <div className="card-body">
                    <img src={product.src} alt={product.name} />
                    <h3 className="card-title">Product: {product.name}</h3>
                    <p className="card-text">Description: {product.description}</p>
                    <p className="card-text">Price: Rp.{product.price}</p>
                    <a href="/" className="btn btn-block btn-primary">Add to Cart</a>
                </div>
            </div>
            
        )
    }
}

export default DetailProduct;