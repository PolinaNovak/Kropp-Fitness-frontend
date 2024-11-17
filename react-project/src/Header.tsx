
import "./Header.css"

function Header(){
    return(
    <header className="header">
        <a className="header-logo" href="/">
            <img className="header-logo-image" src="./images/logo.png" alt="KROPP Logo"
            width="135"
            height="25"
            loading="lazy"
            />
        </a>
        <nav className="header-menu">
            <ul className="header-menu-list">
                <li className="header-menu-item">
                    <a className="header-menu-link is-current" href="/">Home</a>
                </li>
                <li className="header-menu-item">
                    <a className="header-menu-link" href="/">Pages</a>
                </li>
                <li className="header-menu-item">
                    <a className="header-menu-link" href="/">Portfolio</a>
                </li>
                <li className="header-menu-item">
                    <a className="header-menu-link" href="/">Blog</a>
                </li>
                <li className="header-menu-item">
                    <a className="header-menu-link" href="/">Shop</a>
                </li>
            </ul>
        </nav>
        <div>
            <div className="header-actions">
                <button className="header-book-button button" type="button">Book now</button>
                <button className="header-burger-button button" type="button" title="Open menu">
                    <span className="visually-hidden">Open menu</span>
                    <span className="header-burger-button-line"></span>
                    <span className="header-burger-button-line"></span>
                    <span className="header-burger-button-line"></span>
                </button>
            </div>
        </div>
    </header>
    )
}

export default Header;