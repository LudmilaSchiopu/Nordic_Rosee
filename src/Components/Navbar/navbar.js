import './navbar.css';
import NORDIC_ROSE from './../../img/NORDIC_ROSE.png';

const Navbar = () => {
    return (
        <header className='header'>
            <div className='logo'> <img src={NORDIC_ROSE} alt="NORDIC_ROSE" className='logo_image' /></div>
            <nav className='header_menu'>
                <ul className='menu_list'>
                    <li className='menu_text'>Blog</li>
                    <li className='menu_text'>About</li>
                    <li className='menu_text'>Links</li>
                    <li className='menu_text'>Projects</li>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar;