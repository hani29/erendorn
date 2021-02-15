import Button from '../Button';

const RacesClassesItem = ({ children, image, className, name, description }) => {
    return <>
        <div className="class-item">
            <div>
                <div className="class-item-image-container" style={{
                    background: `url(${`/images/races-classes/classes/bg/${className}.png`})`,
                    backgroundSize: 360,
                    backgroundPosition: '10px 0px'
                }}>
                    <img src={`http://localhost:1337${image.url}`} />
                </div>
            </div>

            <h2>{name}</h2>
            <p>
                {
                    description
                }
            </p>
            <div className="class-item-button-container">
                <Button onClick={() => {}}>More info...</Button>
            </div>
        </div>
    </>
};

export const RacesClassesItemContainer = ({ children }) => {
    return <div className="races-classes-list-item-container">{children}</div>
};

export default RacesClassesItem;