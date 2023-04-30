import React from 'react';
import Navbar from '../Navbar/Navbar';
import Header from '../Header/Header';
import Courses from '../Courses/Courses';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Header></Header>
            <Courses></Courses>
        </div>
    );
};

export default Home;