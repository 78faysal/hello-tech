import React from 'react';
import Navbar from '../Navbar/Navbar';
import Header from '../Header/Header';
import Courses from '../Courses/Courses';
import About from '../About/About';
import LogIn from '../LogIn/LogIn';
import FAQ from '../FAQ/FAQ';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <About></About>
            <Courses></Courses>
            <FAQ></FAQ>
            <LogIn></LogIn>
        </div>
    );
};

export default Home;