import { put, takeLatest } from 'redux-saga/effects'

import {
    actionTypes,
    updateAboutDetails,
} from './actions'


function* fetchAboutDetails() {
 const res = yield fetch('http://localhost:1337/about')
    const details = yield res.json()
yield put(updateAboutDetails(details))
}



export default [
    takeLatest(actionTypes.FETCH_ABOUT_DETAILS, fetchAboutDetails),
]