import {useState} from "react"
import './articles.css';
import Article from '../Article/article';

import article1 from './../../img/article1.png';
import article2 from './../../img/article2.png';
import article3 from './../../img/article3.png';
import article4 from './../../img/article4.png';
import article5 from './../../img/article5.png';
import article6 from './../../img/article6.png';
import article7 from './../../img/article7.png';
import article8 from './../../img/article8.png';
import article9 from './../../img/article9.png';
import article10 from './../../img/article10.png';
import article11 from './../../img/article11.png';
import article12 from './../../img/article12.png';


const defaultArticles = [
    {    
        'text': "Here are some things you should know regarding how we work",
        'img': article1,
    },
    {    
        'text': "Granny gives everyone the finger, and other tips from OFFF Barcelona",
        'img': article2,
    },
    {    
        'text': "Hello world, or, in other words, why this blog exists",
        'img': article3,
    },
    {    
        'text': "Here are some things you should know regarding how we work",
        'img': article4,
    },
    {    
        'text': "Connecting artificial intelligence with digital product design",
        'img': article5,
    },
    {    
        'text': "It’s all about finding the perfect balance",
        'img': article6,
    },
    {    
        'text': "I believe learning is the most important skill",
        'img': article7,
    },
    {    
        'text': "Clients are part of the team",
        'img': article8,
    },
    {    
        'text': "Clients are part of the team",
        'img': article9,
    },
    {    
        'text': "Here are some things you should know regarding how we work",
        'img': article10,
    },
    {    
        'text': "Connecting artificial intelligence with digital product design",
        'img': article11,
    },
    {    
        'text': "How modern remote working tools get along with Old School Cowboy's methods",
        'img': article12,
    }
]



const Articles = () => {

    const [articles, useArticles] = useState(defaultArticles);
    return (
        <div className='articles'>
            <div className="articles_container">
                <div className='article_title'>All articles</div>
                <div className="articles_blogs">
                {articles.map((article, i) => {
                    return <Article key={i} text={article.text} link=""
                    img={article.img}/>
                })}


            
                </div>
                
            </div>
            
        </div>
    )
}

export default Articles;