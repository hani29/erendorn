import ControlBar, {ControlBarContainer} from '../../components/ControlBar';

const playVideo = (event) => {
    const video = event.currentTarget.querySelector('video')
    if(video) video.play()
}

const pauseVideo = (event) => {
    const video = event.currentTarget.querySelector('video')
    if(video) {
        video.pause()
        video.currentTime = 0
    }
}

const MediaSection = ({ items, title, mediaType }) => {
    return <>
        <div className="media-section-container">
            <h2>{title}</h2>
            <div className="media-section-content">
                {
                    items.map((item, index) => {
                        return (
                            <Item
                            key={index}
                                mediaType={mediaType}
                                src={item.src} />
                        )
                    })
                }
            </div>
            <ControlBarContainer>
                <ControlBar style={{ padding: '8px 0' }} selected={true} />
                <ControlBar style={{ padding: '8px 0' }} />
                <ControlBar style={{ padding: '8px 0' }} />
            </ControlBarContainer>
        </div>
    </>
};

const Item = ({ mediaType, src }) => {
    return <div
        onMouseOver={playVideo}
        onMouseOut={pauseVideo}>
        {
            mediaType === 'image' ?
                <img
                    className="source"
                    src={src}/> :
                mediaType === 'video' ?
                    <video
                        className="source"
                        src={src} loop /> :
                    null
        }
        <img
            className="floss"
            src='/images/media/floss.png' /> :
        {
            mediaType === 'video' ?
                <img
                    className="control"
                    src='/images/media/play-button.png' /> :
                null
        }
    </div>
}

export default MediaSection;