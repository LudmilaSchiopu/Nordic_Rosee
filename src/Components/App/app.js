//import { Component } from 'react';

import './app.css';
import Navbar from '../Navbar/navbar';
import Main from '../Main/main';

import Articles from '../Articles/articles';




function App() {
    
        return (
            <div className='app'>
                
                <Navbar/>
                <Main/>
                <Articles/>
                
            </div>
        )
    }



export default App;