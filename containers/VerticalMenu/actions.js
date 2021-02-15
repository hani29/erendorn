export const actionTypes = {
    FETCH_VERTICAL_MENU_ITEMS: 'FETCH_VERTICAL_MENU_ITEMS',
    VERTICAL_MENU_ITEMS_FETCHED: 'VERTICAL_MENU_ITEMS_FETCHED',
    VERTICAL_MENU_ITEM_SELECTED: 'VERTICAL_MENU_ITEM_SELECTED',
    VERTICAL_MENU_ITEMS_UPDATED: 'VERTICAL_MENU_ITEMS_UPDATED',
    HYDRATE: 'HYDRATE',
};

export function fetchVerticalMenuItems() {
    return {
        type: actionTypes.FETCH_VERTICAL_MENU_ITEMS
    }
}

export function verticalMenuItemSelected(id) {
    return {
        type: actionTypes.VERTICAL_MENU_ITEM_SELECTED,
        id
    }
}

export function verticalMenuItemsUpdated(menuItems) {
    return {
        type: actionTypes.VERTICAL_MENU_ITEMS_UPDATED,
        menuItems
    }
}

export function verticalMenuItemsFetched(menuItems) {
    return {
        type: actionTypes.VERTICAL_MENU_ITEMS_FETCHED,
        menuItems
    }
}