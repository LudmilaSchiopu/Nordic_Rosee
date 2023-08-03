import './main.css';
import image2 from './../../img/image2.png';

const Main = () => {
    return (
        <div className='main'>
            <div><img src={image2} alt="image2" className='main_image'/></div>
            <h1 className='main_title'>A few words about this blog platform, Ghost, and how this site was made</h1>
            <p className='main_text'>Why Ghost (& Figma) instead of Medium, WordPress or other options?</p>
            <div className='button_line'></div>
            <p className='article_title'>All articles</p>
        </div>
    )
}

export default Main;