import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {checkoutCart } from '../../store/actions/cartActions'
import CartProduct from './CartProduct'

export default function Cart() {
    const dispatch = useDispatch()
    const shoppingcart = useSelector(state => state.cart.shoppingcart)
    const totalCartAmount = useSelector(state => state.cart.totalCartAmount)
    const totalCartQuantity = useSelector(state => state.cart.totalCartQuantity)

    const save = (shoppingcart) => {   
        dispatch(checkoutCart(shoppingcart))
    }

    return (
        <div>
            <div className="mb-4">
                {
                shoppingcart.map(product => {
                    return <CartProduct key={product._id} item={product} />
                })
                }
            </div>
            


            <p className="ml-4" style={{fontSize: "26px"}}><strong>Totala pris:</strong> {totalCartAmount} SEK</p>
            <p className="ml-4" style={{fontSize: "26px"}}><strong>Totala antal:</strong> {totalCartQuantity}</p>
            <button className="btn purple-gradient btn-md ml-4" onClick={() => save(shoppingcart)}>Gå till kassan</button>
        </div>
    )
}