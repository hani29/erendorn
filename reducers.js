import {combineReducers} from 'redux';

import verticalMenuReducer from './containers/VerticalMenu/reducer'
import racesClassesReducer from './containers/RacesClasses/reducer'
import aboutReducer from './containers/About/reducer'
import timelineReducer from './containers/DevelopmentTimeline/reducer'
import imageReducer from './containers/Media/reducer'
import audioReducer from './containers/AudioSection/reducer'
import blogsReducer from './pages/blogs/Blogs/reducer'

export default combineReducers({
    verticalMenu: verticalMenuReducer,
    racesClasses: racesClassesReducer,
    aboutClasses: aboutReducer,
    timelineClasses: timelineReducer,
    imageClasses: imageReducer,
    audioClasses: audioReducer,
    blogsClasses: blogsReducer
})