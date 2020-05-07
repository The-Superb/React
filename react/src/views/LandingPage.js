import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
    return (
        <div>
            <h1>Home Page</h1>
            <div>
                <Link to="/products" className="btn purple-gradient btn-md nav-item"><i className="fas fa-shopping-cart mr-2" ></i>Visa produker</Link>
            </div>
        </div>
    )
}