
import React, { Component } from 'react'
import {Link} from 'react-router-dom'

class ProductItem extends Component {
    constructor(props) {
        super(props);
        this.formatterIDR = new Intl.NumberFormat('id', {
            style: 'currency',
            currency: 'IDR',
            minimumFractionDigits: 0
          })
    }
    
    
    addChartClick = (item) => {
        const quantity = parseInt(this.quantity.value)
        this.props.function(item, quantity)
        window.alert("Data berhasil dimasukan")
    }
    
    render () {
        const {item} = this.props
        return (
            <div className="card col-3 m-3" style={{ width: "18rem" }} key={item.id}>
                <img src={item.src} className="card-img-top" alt={item.name} />
                <div className="card-body">
                    <h5 className="card-title">{item.name}</h5>
                    <p className="card-text">{item.desc}</p>
                    <p className="card-text">{this.formatterIDR.format(item.price)}</p>
                    <input ref={input => this.quantity = input} className="form-control" type="number" defaultValue={1} />
                    <Link to={"/detailproduct/" + item.id}><button className="btn btn-secondary btn-block btn-sm my-2">Detail</button></Link>
                    <button onClick={() => {this.addChartClick(item)}}  className="btn btn-primary btn-block btn-sm my-2">Add to Cart</button>
                </div>
            </div>
        )
    }
}

export default ProductItem