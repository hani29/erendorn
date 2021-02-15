import { useSelector } from "react-redux";

const DevelopmentTimeline = ({ children }) => {
    const {timeline} = useSelector((state) => state.timelineClasses)
    return <>
        <div id="items">
            <div className="item">
                <div className="development-timeline-inner-container">
                    <div className="timeline">

                        {timeline !== undefined &&
                            timeline.map(({ title, image, type }, index) => {
                                return (
                                    type === 'slot' ?
                                        <Slot
                                        key={index}
                                            title={title}
                                            source={`http://localhost:1337${image.url}`}
                                            connectorDirection={'right'}
                                        /> :
                                        type === 'timestone' ?
                                            <TimeStone
                                            key={index}
                                                title={title}
                                                connectorDirection={'right'}
                                            /> :
                                            <Ender key={index}/>)
                            })
                        }
                    </div>
                </div>
            </div>


        </div>
    </>
};

const Slot = ({ source, title, connectorDirection = 'right' }) => {
    return <>
        <div className="slot">
            <img className="source" src={source} />
            <img className="cover" src="/images/development-timelines/slot-cover.png" />
            <h2>{title}</h2>
            <Connector direction={connectorDirection} />
        </div>
    </>
}

const TimeStone = ({ title, connectorDirection = 'right' }) => {
    return <>
        <div className="time-stone">
            <img className="ornament" src='/images/development-timelines/timestone.png' />
            <h3>{title}</h3>
            <Connector direction={connectorDirection} style={{ top: 78, left: '10%' }} />
        </div>
    </>
}

const Connector = ({ direction, style }) => {
    return <>
        <div className={`slot-connector ${direction}`} style={style}>
            <img src='/images/development-timelines/connector.png' />
        </div>
    </>
}

const Ender = () => {
    return <>
        <div className="ender">
            <img src="/images/development-timelines/ender.png" />
        </div>
    </>
}

export default DevelopmentTimeline;