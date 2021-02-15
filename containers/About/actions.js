export const actionTypes = {
    FETCH_ABOUT_DETAILS: 'FETCH_ABOUT_DETAILS',
    UPDATE_ABOUT_DETAILS: 'UPDATE_ABOUT_DETAILS',
    HYDRATE: 'HYDRATE',
};

export function fetchAboutDetails() {
    return {
        type: actionTypes.FETCH_ABOUT_DETAILS,
    }
}

export function updateAboutDetails(details) {
    return {
        type: actionTypes.UPDATE_ABOUT_DETAILS,
        details
    }
}




