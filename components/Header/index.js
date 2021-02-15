import Link from 'next/link';
import * as routes from '../../helpers/routes';

const Component = ({ children }) => {
    return <>
        <header className="game-header">
            <div className="game-logo-container">
                <Link href={routes.home}>
                    <a  className="game-logo-link">
                        <img
                            src="/images/header/logo.png"
                            className="game-logo"
                        />
                    </a>
                </Link>
                <div className="nav">
                    <div className="nav-section left">
                        <Link href={routes.about}>
                            <a>
                                About
                            </a>
                        </Link>
                        <Link href={routes.media}>
                            <a>
                                Media
                            </a>
                        </Link>
                    </div>
                    <div className="nav-section right">
                        <Link href={routes.blogs}>
                            <a>
                                Blogs
                            </a>
                        </Link>
                        <Link href={routes.contact}>
                            <a>
                                Contact
                            </a>
                        </Link>
                    </div>
                </div>
                <img className="header-shadow" src="/images/header/shadow.png"/>
                <img className="header-divider" src="/images/header/divider.png"/>
            </div>
        </header>
    </>
};

export default Component;