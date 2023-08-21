//import { Component } from 'react';

import './app.css';
import Navbar from '../Navbar/navbar';
import Main from '../Main/main';

import Articles from '../Articles/articles';
import Footer from '../Footer/footer';
import Main2 from '../Page2/Main2/main2';
import Blog1 from '../Page2/Blog1/blog1';





function App() {
    
        return (
            <div className='app'>
                
                <Navbar/>
                <Main/>
                <Articles/>
                <Footer/>

                <Main2/>
                <Blog1/>
                
            </div>
        )
    }



export default App;