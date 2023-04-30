import React from 'react';
import Navbar from '../Navbar/Navbar';
import Header from '../Header/Header';
import Courses from '../Courses/Courses';
import About from '../About/About';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Header></Header>
            <About></About>
            <Courses></Courses>
        </div>
    );
};

export default Home;