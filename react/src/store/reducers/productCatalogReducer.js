import actiontypes from '../actiontypes'

const initState = []

export default (state = initState, action) => {
    switch(action.type) {
        case actiontypes().productCatalog.set:
            state = action.payload
            return state

        default:
            return state
    }
}