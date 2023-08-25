import './list.css';

const List = () => {
    return (
        <div>
            <div className='blog1_list-title'>A list looks like this:</div>
            <ul className='blog1_list'>
                <li className='blog1_list-text'>First item in the list</li>
                <li className='blog1_list-text'>Second item in the list lorem ipsum dolor sit amet nunc felis dolor lorem ipsum sit amet</li>
                <li className='blog1_list-text'>Third item in the list</li>
            </ul>
        </div>
    )
}

export default List;