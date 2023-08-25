import './author.css';

import image_author from './../../../img/image_author.png';
import facebook_icon from './../../../img/facebook_icon.png';
import twiter_icon from './../../../img/twiter_icon.png';

const Author = () => {
    return (
        <div className="blog1_author">
            <div className='blog1_author-info'>
                <img src={image_author} alt="image_author" className="blog1_author-img" />
                <div className="blog1_author-text">
                    <span className="blog1_author-name">Mika MAtikainen</span>
                    <span className="blog1_author-date">Apr 15, 2020 · 4 min read</span>
                </div>
            </div>
                        
            <div className="blog1_author-social">
                <a href="#!"><img src={facebook_icon} alt="facebook_icon" className="blog1_author-fb" /></a>
                <a href="#!"><img src={twiter_icon} alt="twiter_icon" className="blog1_author-tw" /></a>
            </div>
        </div>
    )
}

export default Author;