import React from 'react';
import { Styled } from 'direflow-component';
import styles from './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import Default from './Default';
import Messages from './Messages';
import About from './About';

const HomePage = () => (
    <Styled styles={styles}> 
        <div>
            <div className="sample-text">Testing Menu Items</div>
            <div className="menu">
                <ul>
                    <li> <Link to="/">Default</Link> </li>
                    <li> <Link to="/messages">Messages</Link> </li>
                    <li> <Link to="/about">About</Link> </li>
                </ul>
            </div>
            <div className="sample-text">
                <Routes>
                    <Route exact path="/" element={<Default/>} />
                    <Route path="/messages" element={<Messages/>} />
                    <Route path="/about" element={<About/>}/>
                </Routes>
            </div>
        </div>
    </Styled>    
);


export default HomePage;