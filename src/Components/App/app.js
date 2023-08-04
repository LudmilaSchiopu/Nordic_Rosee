//import { Component } from 'react';

import './app.css';
import Navbar from '../Navbar/navbar';
import Main from '../Main/main';

import Articles from '../Articles/articles';
import Footer from '../Footer/footer';





function App() {
    
        return (
            <div className='app'>
                
                <Navbar/>
                <Main/>
                <Articles/>
                <Footer/>
                
            </div>
        )
    }



export default App;