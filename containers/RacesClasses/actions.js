export const actionTypes = {
    UPDATE_RACES_CLASSES_POSITION: 'UPDATE_RACES_CLASSES_POSITION',
    UPDATE_RACES_CLASSES_STEP: 'UPDATE_RACES_CLASSES_STEP',
    HYDRATE: 'HYDRATE',
    FETCH_RACES_DETAILS: 'FETCH_RACES_DETAILS',
    UPDATE_RACES_DETAILS: 'UPDATE_RACES_DETAILS',
};

export function updateRacesClassesPosition(position) {
    return {
        type: actionTypes.UPDATE_RACES_CLASSES_POSITION,
        position
    }
}

export function updateRacesClassesStep(step) {
    return {
        type: actionTypes.UPDATE_RACES_CLASSES_STEP,
        step
    }
}

export function fetchRacesDetails() {
    return {
        type: actionTypes.FETCH_RACES_DETAILS,
    }
}

export function updateRacesDetails(race) {
    return {
        type: actionTypes.UPDATE_RACES_DETAILS,
        race
    }
}

