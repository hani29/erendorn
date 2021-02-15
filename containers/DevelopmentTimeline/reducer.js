import { actionTypes } from './actions'
import { HYDRATE } from 'next-redux-wrapper'

const initialState = {
    timeline: []
};

function reducer(state = initialState , action) {
    switch (action.type) {
        case HYDRATE: {
            return  { ...state, ...action.payload }
        }
        case actionTypes.UPDATE_TIMELINE_DETAILS:
            return { ...state,  timeline: action.timeline }
        default:
            return state
    }
}

export default reducer