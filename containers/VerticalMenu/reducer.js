import { actionTypes } from './actions'
import { HYDRATE } from 'next-redux-wrapper'

export const initialState = {
    menuItems: []
};

function reducer(state = initialState, action) {
    switch (action.type) {
        case HYDRATE: {
            return { ...state, ...action.payload }
        }
        case actionTypes.VERTICAL_MENU_ITEMS_FETCHED:
        case actionTypes.VERTICAL_MENU_ITEMS_UPDATED:
            return { ...state,  menuItems: action.menuItems  };
        default:
            return state
    }
}

export default reducer;