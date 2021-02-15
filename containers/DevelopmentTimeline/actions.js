export const actionTypes = {
    FETCH_TIMELINE_DETAILS: 'FETCH_TIMELINE_DETAILS',
    UPDATE_TIMELINE_DETAILS: 'UPDATE_TIMELINE_DETAILS',
    HYDRATE: 'HYDRATE',
};

export function fetchTimelineDetails() {
    return {
        type: actionTypes.FETCH_TIMELINE_DETAILS,
    }
}

export function updateTimelineDetails(timeline) {
    return {
        type: actionTypes.UPDATE_TIMELINE_DETAILS,
        timeline
    }
}




