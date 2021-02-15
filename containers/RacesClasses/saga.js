import { put, takeLatest } from 'redux-saga/effects'

import {
    actionTypes,
    updateRacesDetails,
} from './actions'


function* fetchRacesDetails() {
 const res = yield fetch('http://localhost:1337/races')
    const race = yield res.json()
yield put(updateRacesDetails(race))
}



export default [
    takeLatest(actionTypes.FETCH_RACES_DETAILS, fetchRacesDetails),
]