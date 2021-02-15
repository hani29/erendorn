import { actionTypes } from './actions'
import { HYDRATE } from 'next-redux-wrapper'

const initialState = {
    racesClassesPosition: 0,
    race: []
};

function reducer(state = initialState, action) {
    switch (action.type) {
        case HYDRATE: {
            return { ...state, ...action.payload }
        }
        case actionTypes.UPDATE_RACES_CLASSES_STEP:
            return { ...state, ...{ racesClassesPosition: state.racesClassesPosition + action.step } }
        case actionTypes.UPDATE_RACES_CLASSES_POSITION:
            return { ...state, ...{ racesClassesPosition: action.position } }
        case actionTypes.UPDATE_RACES_DETAILS:
            return { ...state,  race: action.race }
        default:
            return state
    }
}

export default reducer