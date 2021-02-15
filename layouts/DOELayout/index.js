import Header from '../../components/Header';

import VerticalMenu from '../../containers/VerticalMenu';

const DOELayout = ({ children }) => {
    return (
        <>
            <div className="layout-container">
                <title>Depths of Erendorn</title>
                <Header />
                <main>{children}</main>
            </div>
        </>
    )
};

export default DOELayout;