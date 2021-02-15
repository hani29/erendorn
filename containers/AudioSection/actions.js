export const actionTypes = {
    UPDATE_AUDIO_SECTION_STEP: 'UPDATE_AUDIO_SECTION_STEP',
    FETCH_AUDIO_DETAILS: 'FETCH_AUDIO_DETAILS',
    UPDATE_AUDIO_DETAILS: 'UPDATE_AUDIO_DETAILS',
    HYDRATE: 'HYDRATE',
};

export function updateAudioSectionStep(step) {
    return {
        type: actionTypes.UPDATE_AUDIO_SECTION_STEP,
        step
    }
}

export function fetchAudioDetails() {
    return {
        type: actionTypes.FETCH_AUDIO_DETAILS
    }
}

export function updateAudioDetails(audio) {
    return {
        type: actionTypes.UPDATE_AUDIO_DETAILS,
        audio
    }
}
