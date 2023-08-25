import './social.css';

import facebook_icon from './../../../img/facebook_icon.png';
import twiter_icon from './../../../img/twiter_icon.png';
import Line_4 from './../../../img/Line_4.png';

const Social = () => {
    return (
        <div>
            <div className='blog1_social'>
                <div className='blog1_social-fb'>
                    <a href="#!">
                        <img src={facebook_icon} alt="facebook_icon" />
                    </a>
                    <span>Share on Facebook</span>
                </div>
                <div className='blog1_social-tw'>
                    <a href="#!">
                        <img src={twiter_icon} alt="twiter_icon" />
                    </a>
                    <span>Share on Twitter</span>
                </div>
            </div>
            <img src={Line_4} alt="Line_4" className='blog1_social-line'/>
        </div>
    )
}

export default Social;