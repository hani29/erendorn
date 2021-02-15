import { actionTypes } from './actions'
import { HYDRATE } from 'next-redux-wrapper'

const initialState = {
    audioSectionPosition: 0,
    audio: []
};

function reducer(state = initialState, action) {
    switch (action.type) {
        case HYDRATE: {
            return { ...state, ...action.payload }
        }
        case actionTypes.UPDATE_AUDIO_SECTION_STEP:
            return { ...state, ...{ audioSectionPosition: state.audioSectionPosition + action.step } }
        case actionTypes.UPDATE_AUDIO_DETAILS:
            return { ...state,  audio: action.audio }
        default:
            return state
    }
}

export default reducer