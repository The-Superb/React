import actiontypes from '../actiontypes'
import axios from 'axios'

export const getProduct = (id) => {
    return async dispatch => {
        const res = await axios.get('http://localhost:9999/api/products/' + id)

        dispatch(setProduct(await res.data))
    }
}

export const setProduct = (product) => {
    return {
        type: actiontypes().product.set,
        payload: product
    }
}