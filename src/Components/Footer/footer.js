import './footer.css';
import NORDIC_ROSE2 from './../../img/NORDIC_ROSE2.png';

const Footer = () => {
    return (
        <footer className='footer'>
            <div className='footer_container'>
            <div className='footer_menu'>
                <a href="#!"><b>Digital product design</b></a>
                <a href="#!">Remote work</a>
                <a href="#!"><b>UX design</b></a>
                <a href="#!">Distributed teams</a>
                <a href="#!"><b>Creativity</b></a>
                <a href="#!">Strategy</a>
                <a href="#!"><b>Suspense</b></a>
                <a href="#!">Growth</a>
            </div>
            <div className='footer_content'>
                <img className='footer_logo' src={NORDIC_ROSE2} alt="img" />
            
                <div className='footer_text'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu velit tempus erat egestas efficitur. 
                In hac habitasse platea dictumst. Fusce a nunc eget ligula suscipit finibus.
                </div>
                <div className='footer_social'>
                    <a href="#!">Twitter</a>
                    <a href="#!">LinkedIn</a>
                    <a href="#!">RSS</a>
                </div>
                <div className='copyright'>
                © 2012–2020 Nordic Rose Co. All rights reserved.
                </div>
            </div>
            </div>

        </footer>
    )
}

export default Footer;