import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProductCatalog } from '../../store/actions/productCatalogActions'
import Product from './Product'

export default function ProductList() {
    const dispatch = useDispatch()
    const productCatalog = useSelector(state => state.productCatalog)

    useEffect(() => {
        dispatch(getProductCatalog())
    },[dispatch])

    return (
        <div className="row row-cols-1 row-cols-md-3">
        {
            productCatalog.map(product => {
                return <Product key={product._id} product={product} />
            })
        }
    </div>
    )
}