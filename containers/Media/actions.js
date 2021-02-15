export const actionTypes = {
    FETCH_IMAGES_DETAILS: 'FETCH_IMAGES_DETAILS',
    UPDATE_IMAGES_DETAILS: 'UPDATE_IMAGES_DETAILS',
    FETCH_VIDEOS_DETAILS: 'FETCH_VIDEOS_DETAILS',
    UPDATE_VIDEOS_DETAILS: 'UPDATE_VIDEOS_DETAILS',
    HYDRATE: 'HYDRATE',
};

export function fetchImages() {
    return {
        type: actionTypes.FETCH_IMAGES_DETAILS,
    }
}

export function updateImages(src) {
    return {
        type: actionTypes.UPDATE_IMAGES_DETAILS,
        src
    }
}


export function fetchVideos() {
    return {
        type: actionTypes.FETCH_VIDEOS_DETAILS,
    }
}

export function updateVideos(source) {
    return {
        type: actionTypes.UPDATE_VIDEOS_DETAILS,
        source
    }
}




