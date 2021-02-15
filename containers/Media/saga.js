import { put, takeLatest } from 'redux-saga/effects'

import {
    actionTypes,
    updateImages,
    updateVideos
} from './actions'


function* fetchImagesDetails() {
 const res = yield fetch('http://localhost:1337/images')
    const src = yield res.json()
     yield put(updateImages(src))
}

function* fetchVideosDetails() {
    const res = yield fetch('http://localhost:1337/videos')
       const source = yield res.json()
        yield put(updateVideos(source))
   }


export default [
    takeLatest(actionTypes.FETCH_IMAGES_DETAILS, fetchImagesDetails),
    takeLatest(actionTypes.FETCH_VIDEOS_DETAILS, fetchVideosDetails)
]

  



