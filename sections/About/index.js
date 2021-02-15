import About from '../../containers/About';

export default function AboutPage() {
    return (
        <section name="about" className="about-container">
            <img className="background" src="/images/sections/background/about.jpg" />
            <div>
                <h3 className="about-heading">About the game</h3>
                <About />
            </div>
        </section>
    )
}
