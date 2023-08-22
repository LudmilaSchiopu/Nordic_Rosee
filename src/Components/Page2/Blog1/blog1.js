
import './blog1.css';
import image_author from './../../../img/image_author.png';
import facebook_icon from './../../../img/facebook_icon.png';
import twiter_icon from './../../../img/twiter_icon.png';
import Content1 from '../Content1/content1';


const Blog1 = () => {

    return (
        <div>
            <div className="blog1">
                <div className="blog1_container">
                    <div className="blog1_author">
                        <div className='blog1_author-info'>
                        <img src={image_author} alt="image_author" className="blog1_author-img" />
                        <div className="blog1_author-text">
                            <span className="blog1_author-name">Mika MAtikainen</span>
                            <span className="blog1_author-date">Apr 15, 2020 · 4 min read</span>
                        </div>
                        </div>
                        
                        <div className="blog1_author-social">
                            <img src={facebook_icon} alt="facebook_icon" className="blog1_author-fb" />
                            <img src={twiter_icon} alt="twiter_icon" className="blog1_author-tw" />
                        </div>
                    </div>
                    <div className='blog1_paragraph1'>
                        <Content1   text1='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu velit tempus erat egestas efficitur. 
                                        In hac habitasse platea dictumst. Fusce a nunc eget ligula suscipit finibus. Aenean pharetra quis 
                                        lacus at viverra.'
                                    text2='Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. 
                                        Aliquam quis posuere ligula. In eu dui molestie, molestie lectus eu, semper lectus.'/>
                    </div>
                    <div className='blog1_title'>Next on the pipeline</div>
                    <div className='blog1_paragraph2'>
                        <Content1   text1='Duis eu velit tempus erat egestas efficitur. In hac habitasse platea dictumst. Fusce a nunc eget 
                                        ligula suscipit finibus. Aenean pharetra quis lacus at viverra. Class aptent taciti sociosqu ad 
                                        litora torquent per conubia nostra, per inceptos himenaeos.'
                                    text2='Morbi efficitur auctor metus, id mollis lorem pellentesque id. Nullam posuere maximus dui et fringilla.'/>        
                    </div>
                    
                      
                </div>
            </div>
        </div>
    )
}

export default Blog1;