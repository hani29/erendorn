export const actionTypes = {
    UPDATE_MEDIA_SECTION_POSITION: 'UPDATE_MEDIA_SECTION_POSITION',
};

export function updateMediaSectionPosition(position) {
    return {
        type: actionTypes.UPDATE_MEDIA_SECTION_POSITION,
        position
    }
}