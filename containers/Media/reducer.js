import { actionTypes } from './actions'
import { HYDRATE } from 'next-redux-wrapper'

const initialState = {
    src: [],
    source: []
};

function reducer(state = initialState , action) {

    switch (action.type) {
        case HYDRATE: {
            return  { ...state, ...action.payload }
        }
        case actionTypes.UPDATE_IMAGES_DETAILS:
            return { ...state,  src: action.src }
        case actionTypes.UPDATE_VIDEOS_DETAILS:
            return { ...state,  source: action.source }
        default:
            return state
    }
}

export default reducer