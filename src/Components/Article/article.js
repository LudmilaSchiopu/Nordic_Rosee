import './article.css';


const Article = (props) => {
    const {img, text} = props;
    return (
        <div>
            
            <div className='article_blog'>
                <img src={img} alt="article1" className='article_img'/>
                <a href="#!" className='article_text'>{text}</a>
                
            </div>
        </div>
    )
}

export default Article;