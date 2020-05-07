import React from 'react'
import { useDispatch } from 'react-redux'
import { addToCart, removeFromCart, clearCart } from '../../store/actions/cartActions'

export default function CartProduct({item}) {

    const dispatch = useDispatch()

    const add = (event) => {    
        event.stopPropagation()

        dispatch(addToCart(item))
    }

    const remove = (event) => {  
        event.stopPropagation();
        event.nativeEvent.stopImmediatePropagation();
        dispatch(removeFromCart(item.id))
    }

    const clear = (event) => {  
        event.stopPropagation();
        dispatch(clearCart(item))
    }

    return (
        <div>
            <div className="cart-item">
                <div className="p-2 d-flex justify-content-between align-items-center">
                    <div className="d-flex align-items-center mr-5">
                        <img src={item.image} alt="" className="img-fluid image-width" />
                        <div className="pr-5">
                            <div className="pr-5"><strong>{item.name}</strong></div>
                            <div className="text-muted"><small>{item.quantity} x {item.price}</small></div>
                        </div>
                    </div>
                    <div>
                        <div className="btn-group btn-group-sm ml-4" role="group" aria-label="Basic example">
                            <button className="btn btn-elegant" onClickCapture={add}>+</button>
                            <button className="btn btn-elegant" onClick={remove}>-</button>
                            <div className="btn-group btn-group-sm ml-2" role="group" aria-label="trash">
                                <button className="btn btn-danger px-3" onClick={clear}><i className="fas fa-trash"></i></button>
                            </div>
                        </div>
                        </div>
                    </div>
                <div className="dropdown-divider"></div>
            </div>
        </div>
    )
}