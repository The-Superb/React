import { combineReducers } from 'redux'

// REDUCERS
import cartReducer from './cartReducer'
import productCatalogReducer from './productCatalogReducer'
import productReducer from './productReducer'

export default combineReducers({
    cart: cartReducer,
    productCatalog: productCatalogReducer,
    product: productReducer
})