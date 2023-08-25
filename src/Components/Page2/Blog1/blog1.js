
import './blog1.css';
import Content1 from '../Content1/content1';
import List from '../List/list';


import Rectangle_8 from './../../../img/Rectangle_8.png';
import Tags from '../Tags/tags';
import Line_11 from './../../../img/Line_11.png';
import Author from '../Author/author';
import Social from '../Social/social';


const Blog1 = () => {

    return (
        <div>
            <div className="blog1">
                <div className="blog1_container">
                    <Author/>
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
                    <div className='blog1_large-image'>
                        <img className='blog1_large-img' src={Rectangle_8} alt="rectangle_8" />
                        <div className='blog1_large-text'>Image caption centered this way and I'll make this a bit longer to indicate the amount of line-height.</div>
                    </div>
                    <div className='blog1_paragraph3'>
                        <Content1  text1='Aenean pharetra quis lacus at viverra. Class aptent taciti sociosqu ad litora torquent 
                                          per conubia nostra, per inceptos himenaeos. Aliquam quis posuere ligula.'
                                   text2='In eu dui molestie, molestie lectus eu, semper lectus. Proin at justo lacinia, auctor 
                                          nisl et, consequat ante. Donec sit amet nisi arcu. Morbi efficitur auctor metus, id mollis
                                          lorem pellentesque id. Nullam posuere maximus dui et fringilla. Nulla non volutpat leo.'/>
                    </div>
                    <List/>
                    <span className='blog1_regards'>Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam quis posuere ligula.</span>
                    <span className='blog1_regards'>Thanks for reading,<br/> Mika</span>
                    <Social/>
                    <Tags/>
                    <img src={Line_11} alt="line" className='blog1_line11' />  
                </div>
            </div>
        </div>
    )
}

export default Blog1;