export const actionTypes = {
    FETCH_BLOGS_DETAILS: 'FETCH_BLOGS_DETAILS',
    UPDATE_BLOGS_DETAILS: 'UPDATE_BLOGS_DETAILS',
    HYDRATE: 'HYDRATE',
};

export function fetchBlogsDetails() {
    return {
        type: actionTypes.FETCH_BLOGS_DETAILS,
    }
}

export function updateBlogsDetails(blogs) {
    return {
        type: actionTypes.UPDATE_BLOGS_DETAILS,
        blogs
    }
}




