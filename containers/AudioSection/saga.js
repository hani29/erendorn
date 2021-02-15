import { put, takeLatest } from 'redux-saga/effects'

import {
    actionTypes,
    updateAudioDetails,
} from './actions'


function* fetchAudioDetails() {
 const res = yield fetch('http://localhost:1337/voices')
    const audio = yield res.json()
yield put(updateAudioDetails(audio))
}



export default [
    takeLatest(actionTypes.FETCH_AUDIO_DETAILS, fetchAudioDetails),
]