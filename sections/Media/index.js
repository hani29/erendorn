import Media from '../../containers/Media';

export default function MediaPage() {
    return (
        <section name="media" className="development-timeline-container">
            <img className="background" src="/images/sections/background/media.jpg" />
            <div>
                <h3 className="development-timeline-heading">Media</h3>
                <Media />
            </div>
        </section>
    )
}
