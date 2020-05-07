import actiontypes from '../actiontypes'
import axios from 'axios'

export const getProductCatalog = () => {
    return async dispatch => {
        const res = await axios.get('http://localhost:9999/api/products')

        dispatch(setProductCatalog(res.data))
    }
}

export const setProductCatalog = (products) => {
    return {
        type: actiontypes().productCatalog.set,
        payload: products
    }
}