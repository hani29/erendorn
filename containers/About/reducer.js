import { actionTypes } from './actions'
import { HYDRATE } from 'next-redux-wrapper'

const initialState = {
    details: ""
};

function reducer(state = initialState , action) {

    switch (action.type) {
        case HYDRATE: {
            return  { ...state, ...action.payload }
        }
        case actionTypes.UPDATE_ABOUT_DETAILS:
            return { ...state,  details: action.details }
        default:
            return state
    }
}

export default reducer