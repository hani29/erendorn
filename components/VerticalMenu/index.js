import VerticalMenuItem from '../VerticalMenuItem';

const VerticalMenu = ({ items, onItemClicked }) => {
    return <div className="vertical-menu-container">
        <div className="control">
            <div className="hamburger" />
            <div className="close" />
        </div>
        <img
            className="vertical-menu-bg"
            src="/images/vertical-menu/bg.png"
        />
        <img
            className="vertical-menu-stem"
            src="/images/vertical-menu/stem-with-arrows.png"/>
        <div>
            {
                items.map((item, index) => {
                    return (
                        <VerticalMenuItem
                            onClick={onItemClicked}
                            index={index}
                            key={item.id}
                            {...item} />)
                })
            }
        </div>
    </div>
};

export default VerticalMenu;