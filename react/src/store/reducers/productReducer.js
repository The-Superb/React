import actiontypes from '../actiontypes'

const initState = {}

export default (state = initState, action) => {
    switch(action.type) {
        case actiontypes().product.set:
            state = action.payload
            return state

        default:
            return state
    }
}