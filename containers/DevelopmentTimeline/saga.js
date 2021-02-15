import { put, takeLatest } from 'redux-saga/effects'

import {
    actionTypes,
    updateTimelineDetails,
} from './actions'


function* fetchTimelineDetails() {
 const res = yield fetch('http://localhost:1337/timelines')
 const timeline = yield res.json()

yield put(updateTimelineDetails(timeline))
}



export default [
    takeLatest(actionTypes.FETCH_TIMELINE_DETAILS, fetchTimelineDetails),
]

  



