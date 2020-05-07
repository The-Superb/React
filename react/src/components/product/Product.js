import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../store/actions/cartActions'

export default function Product({product}) {

    const dispatch = useDispatch()
    
    const add = (product) => {   
        dispatch(addToCart(product))
    }

    return (
        <div className="col mb-4">
            <div className="card">
                <div className="view overlay">
                    <img className="card-img-top" src={ product.image }
                    alt="Card image cap" />
                    <Link to={`/products/details/${product._id}`}>
                    <div className="mask rgba-white-slight"></div>
                    </Link>
                </div>

                <div className="card-body">
                    <h4 className="card-title"> { product.name } </h4>

                    <p className="card-text">{ product.shortDescription }</p>
                    <p className="card-text">{ product.price } SEK</p>

                    <Link to={`/products/details/${product._id}`} className="btn purple-gradient btn-md">Visa Produkt</Link>
                    <button className="ml-2 btn btn-dark btn-md" onClick={() => add(product)}>Köp</button>
                </div>
            </div>
        </div>
    )
}