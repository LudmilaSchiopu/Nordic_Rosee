import './content1.css';

const Content1 = (props) => {
    const {text1, text2} = props;
    return (
        <div>
            <div className='blog1_text'>
                    <span>
                        {text1}
                    </span>
                    
                    <hr />
                    <span>
                        {text2}
                    </span>
                  
            </div>
        </div>
    )
}

export default Content1;