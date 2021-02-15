import { put, takeLatest, select } from 'redux-saga/effects'

import {
    actionTypes,
    verticalMenuItemsFetched,
    verticalMenuItemsUpdated
} from './actions'

import { menuItems } from '../../helpers/constants';

function* fetchVerticalMenuItems() {
    // const menuItems = yield call(utils.readFile, 'menu-items.json');
    yield put(verticalMenuItemsFetched(menuItems))
}

function* verticalMenuItemSelected({ id }) {
    const verticalMenu = yield select((state) => state.verticalMenu);
    let { menuItems } = verticalMenu;

    const selectedItemIndex = menuItems.findIndex(item => item.id === id)
    menuItems = menuItems.map(item => {
        item.active = false
        return item
    });
    menuItems[selectedItemIndex].active = true;

    yield put(verticalMenuItemsUpdated(menuItems))
}

export default [
    takeLatest(actionTypes.FETCH_VERTICAL_MENU_ITEMS, fetchVerticalMenuItems),
    takeLatest(actionTypes.VERTICAL_MENU_ITEM_SELECTED, verticalMenuItemSelected)
]
