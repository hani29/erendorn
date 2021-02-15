import { actionTypes } from './actions'
import { HYDRATE } from 'next-redux-wrapper'

const initialState = {
    mediaSectionPosition: 0
};

function reducer(state, action) {
    switch (action.type) {
        case HYDRATE: {
            return { ...initialState, ...action.payload }
        }
        case actionTypes.UPDATE_MEDIA_SECTION_POSITION:
            return { ...initialState, ...{ mediaSectionPosition: action.position } }
        default:
            return initialState
    }
}

export default reducer