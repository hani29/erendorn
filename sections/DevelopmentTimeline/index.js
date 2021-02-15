import DevelopmentTimelines from '../../containers/DevelopmentTimeline';

export default function DevelopmentTimeline() {
    return (
        <section name="development-timeline" className="development-timeline-container">
            <img className="background" src="/images/sections/background/development-timeline.jpg" />
            <div>
                <h3 className="development-timeline-heading">Development timeline</h3>
                <DevelopmentTimelines />
            </div>
        </section>
    )
}
