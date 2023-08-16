import './navbar.css';
import NORDIC_ROSE from './../../img/NORDIC_ROSE.png';

const Navbar = () => {
    return (
        <header className='header'>
            <div className='header_container'>
            <div className='logo'> <img src={NORDIC_ROSE} alt="NORDIC_ROSE" className='logo_image' /></div>
            <nav className='header_menu'>
                <ul className='menu_list'>
                    <li >
                        <a className='menu_text' href="#!">Blog</a>
                    </li>
                    <li >
                        <a className='menu_text' href="#!">About</a>
                    </li>
                    <li >
                        <a className='menu_text' href="#!">Links</a>
                    </li>
                    <li >
                        <a className='menu_text' href="#!">Projects</a>
                    </li>
                </ul>
            </nav>
            </div>

        </header>
    )
}

export default Navbar;