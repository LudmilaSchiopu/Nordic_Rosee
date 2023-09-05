//import { Component } from 'react';
import { Routes, Route, Link } from 'react-router-dom';

import './app.css';


import Blog from '../Page2/Blog/blog';
import Layout from '../Layout/layout';
import Page1 from '../Page1/page';




function App() {
    
        return (
            <div className='app'>
                <Routes>
                    <Route path="/" element={<Layout/>}>
                        <Route index element={<Page1/>}/>
                        
                        <Route path=":id" element={<Blog/>}/>
                    </Route>
                </Routes>



                
              
                
            </div>
        )
    }



export default App;