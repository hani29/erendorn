import { all, call, delay, put, take, takeLatest, fork } from 'redux-saga/effects'

import verticalMenuSaga from './containers/VerticalMenu/saga'
import aboutSaga from "./containers/About/saga"
import raceSaga from "./containers/RacesClasses/saga"
import timelineSaga from "./containers/DevelopmentTimeline/saga"
import imagesSaga from './containers/Media/saga'
import audioSaga from './containers/AudioSection/saga'
import blogsSaga from './pages/blogs/Blogs/saga'

function* rootSaga() {
    yield all([
        ...verticalMenuSaga,
        ...aboutSaga,
        ...raceSaga,
        ...timelineSaga,
        ...imagesSaga,
        ...audioSaga,
        ...blogsSaga
    ])
}

export default rootSaga
