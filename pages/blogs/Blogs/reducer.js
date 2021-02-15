import { actionTypes } from './actions'
import { HYDRATE } from 'next-redux-wrapper'

const initialState = {
    blogs: []
};

function reducer(state = initialState , action) {

    switch (action.type) {
        case HYDRATE: {
            return  { ...state, ...action.payload }
        }
        case actionTypes.UPDATE_BLOGS_DETAILS:
            return { ...state,  blogs: action.blogs }
        default:
            return state
    }
}

export default reducer