
import './article.css';




const Article = (props) => {
    const {img, text, handleClick} = props;

    

   

    return (
        
            
            <div className='article_blog' onClick={handleClick}>
                <img src={img} alt="article1" className='article_img'/>
                <div className='article_text'>
                {text}</div>
                
            </div>
        
    )
}

export default Article;