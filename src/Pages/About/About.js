import React from 'react';
import img from '../../Images/about.jpg';

const About = () => {
    return (
        <div className='bg-blue-100 pt-5 mt-10'>
            <div className='lg:flex justify-around items-center container gap-5 p-10 mx-auto'>
                <img className='w-80' src={img} alt="" />
                <div className='lg:w-3/5 mx-auto'>
                        <p className='text-blue-700 font-bold text-xl'>About Us</p>
                        <h2 className='text-3xl font-bold mt-3'>We teach latest Techologies</h2>
                        <p className='text-xl'>At our website, we strive to keep you up-to-date on the latest trends and developments in the world of tech. Our team of expert writers and analysts are passionate about technology, and work tirelessly to bring you the most accurate and informative content possible.</p>

                        <button className="border-solid border-2 border-blue-700 hover:border-blue-400 text-black font-bold py-3 px-6 rounded-full mt-5">
                            Learn More
                        </button>

                </div>
            </div>
        </div>
    );
};

export default About;