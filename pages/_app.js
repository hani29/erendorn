// Global
import '../public/styles/wordpress.css'
import '../public/styles/common.css'
import '../public/styles/smartphone.css'
import '../public/styles/tablet.css'
import '../public/styles/desktop.css'
import '../public/styles/large-screen.css'

// DOELayout
import '../layouts/DOELayout/styles/common.css'
import '../layouts/DOELayout/styles/smartphone.css'
import '../layouts/DOELayout/styles/tablet.css'
import '../layouts/DOELayout/styles/desktop.css'
import '../layouts/DOELayout/styles/large-screen.css'

// Vertical menu
import '../components/VerticalMenu/styles/common.css'
import '../components/VerticalMenu/styles/smartphone.css'
import '../components/VerticalMenu/styles/tablet.css'
import '../components/VerticalMenu/styles/desktop.css'
import '../components/VerticalMenu/styles/large-screen.css'

// Vertical menu item
import '../components/VerticalMenuItem/styles/common.css'
import '../components/VerticalMenuItem/styles/smartphone.css'
import '../components/VerticalMenuItem/styles/tablet.css'
import '../components/VerticalMenuItem/styles/desktop.css'
import '../components/VerticalMenuItem/styles/large-screen.css'

// Races & classes section
import '../sections/RacesClasses/styles/common.css'
import '../sections/RacesClasses/styles/smartphone.css'
import '../sections/RacesClasses/styles/tablet.css'
import '../sections/RacesClasses/styles/desktop.css'
import '../sections/RacesClasses/styles/large-screen.css'

// Media section
import '../sections/Media/styles/common.css'
import '../sections/Media/styles/smartphone.css'
import '../sections/Media/styles/tablet.css'
import '../sections/Media/styles/desktop.css'
import '../sections/Media/styles/large-screen.css'

// About section
import '../sections/About/styles/common.css'
import '../sections/About/styles/smartphone.css'
import '../sections/About/styles/tablet.css'
import '../sections/About/styles/desktop.css'
import '../sections/About/styles/large-screen.css'

// Development timeline section
import '../sections/DevelopmentTimeline/styles/common.css'
import '../sections/DevelopmentTimeline/styles/smartphone.css'
import '../sections/DevelopmentTimeline/styles/tablet.css'
import '../sections/DevelopmentTimeline/styles/desktop.css'
import '../sections/DevelopmentTimeline/styles/large-screen.css'

// Contact page
import '../pages/contact/styles/common.css'
import '../pages/contact/styles/smartphone.css'
import '../pages/contact/styles/tablet.css'
import '../pages/contact/styles/desktop.css'
import '../pages/contact/styles/large-screen.css'

// Blogs page
import '../pages/blogs/styles/common.css'
import '../pages/blogs/styles/smartphone.css'
import '../pages/blogs/styles/tablet.css'
import '../pages/blogs/styles/desktop.css'
import '../pages/blogs/styles/large-screen.css'

// Races & classes component
import '../components/RacesClasses/styles/common.css'
import '../components/RacesClasses/styles/smartphone.css'
import '../components/RacesClasses/styles/tablet.css'
import '../components/RacesClasses/styles/desktop.css'
import '../components/RacesClasses/styles/large-screen.css'

// Media section component
import '../containers/MediaSection/styles/common.css'
import '../containers/MediaSection/styles/smartphone.css'
import '../containers/MediaSection/styles/tablet.css'
import '../containers/MediaSection/styles/desktop.css'
import '../containers/MediaSection/styles/large-screen.css'

// Audio section component
import '../containers/AudioSection/styles/common.css'
import '../containers/AudioSection/styles/smartphone.css'
import '../containers/AudioSection/styles/tablet.css'
import '../containers/AudioSection/styles/desktop.css'
import '../containers/AudioSection/styles/large-screen.css'

// About component
import '../components/About/styles/common.css'
import '../components/About/styles/smartphone.css'
import '../components/About/styles/tablet.css'
import '../components/About/styles/desktop.css'
import '../components/About/styles/large-screen.css'

// Media component
import '../components/Media/styles/common.css'
import '../components/Media/styles/smartphone.css'
import '../components/Media/styles/tablet.css'
import '../components/Media/styles/desktop.css'
import '../components/Media/styles/large-screen.css'

// Development timeline component
import '../components/DevelopmentTimeline/styles/common.css'
import '../components/DevelopmentTimeline/styles/smartphone.css'
import '../components/DevelopmentTimeline/styles/tablet.css'
import '../components/DevelopmentTimeline/styles/desktop.css'
import '../components/DevelopmentTimeline/styles/large-screen.css'

// Races & classes item
import '../components/RacesClassesItem/styles/common.css'
import '../components/RacesClassesItem/styles/smartphone.css'
import '../components/RacesClassesItem/styles/tablet.css'
import '../components/RacesClassesItem/styles/desktop.css'
import '../components/RacesClassesItem/styles/large-screen.css'

// Header
import '../components/Header/styles/common.css'
import '../components/Header/styles/smartphone.css'
import '../components/Header/styles/tablet.css'
import '../components/Header/styles/desktop.css'
import '../components/Header/styles/large-screen.css'

// Footer
import '../components/Footer/styles/common.css'
import '../components/Footer/styles/smartphone.css'
import '../components/Footer/styles/tablet.css'
import '../components/Footer/styles/desktop.css'
import '../components/Footer/styles/large-screen.css'

// Button
import '../components/Button/styles/common.css'
import '../components/Button/styles/smartphone.css'
import '../components/Button/styles/tablet.css'
import '../components/Button/styles/desktop.css'
import '../components/Button/styles/large-screen.css'

// Vertical Divider
import '../components/VerticalDivider/styles/common.css'
import '../components/VerticalDivider/styles/smartphone.css'
import '../components/VerticalDivider/styles/tablet.css'
import '../components/VerticalDivider/styles/desktop.css'
import '../components/VerticalDivider/styles/large-screen.css'

// Control Arrow
import '../components/ControlArrow/styles/common.css'
import '../components/ControlArrow/styles/smartphone.css'
import '../components/ControlArrow/styles/tablet.css'
import '../components/ControlArrow/styles/desktop.css'
import '../components/ControlArrow/styles/large-screen.css'

// Control Bar
import '../components/ControlBar/styles/common.css'
import '../components/ControlBar/styles/smartphone.css'
import '../components/ControlBar/styles/tablet.css'
import '../components/ControlBar/styles/desktop.css'
import '../components/ControlBar/styles/large-screen.css'

// JSX
import React from 'react'
import { wrapper } from '../store'

function DEOApp({ Component, pageProps }) {
    return <Component {...pageProps} />
}

export default wrapper.withRedux(DEOApp)