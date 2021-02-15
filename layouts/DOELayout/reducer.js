import { actionTypes } from './actions'
import { HYDRATE } from 'next-redux-wrapper'

const initialState = {
};

function reducer(state, action) {
    switch (action.type) {
        case HYDRATE: {
            return { ...initialState, ...action.payload }
        }
        default:
            return initialState
    }
}

export default reducer