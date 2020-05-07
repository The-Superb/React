import React from 'react'
import Cart from './shoppingcart/Cart'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBIcon } from "mdbreact";

export const Navigation = () => {

    const quantity = useSelector(state => state.cart.totalCartQuantity)

    return (
        <nav className="mb-1 navbar navbar-expand-lg navbar-dark purple-gradient">
            <div className="container">
                <Link className="navbar-brand" to="/"><i className="fab fa-autoprefixer"></i> Amazon</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent-333" aria-controls="navbarSupportedContent-333" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent-333">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                        <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/products">Products</Link>
                        </li>
                    </ul>
                    <ul className="navbar-nav ml-auto nav-flex-icons">
                        <li className="nav-item dropdown">

                            <MDBDropdown>
                                <MDBDropdownToggle nav caret>
                                    { quantity } <MDBIcon icon="shopping-cart" />
                                </MDBDropdownToggle>
                                <MDBDropdownMenu right basic className="dropdown-default shopping-cart">
                                    <Cart />
                                </MDBDropdownMenu>
                            </MDBDropdown>

                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}