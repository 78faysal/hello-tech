import React from 'react';
import img from '../../Images/about.jpg';

const About = () => {
    return (
        <div className='bg-blue-100'>
            <div className='flex justify-around items-center container p-10 mx-auto'>
                <img className='w-90' src={img} alt="" />
                <div className='w-3/5'>
                    <div>
                        <p>About Us</p>
                        <h2>We tech latest Techologies</h2>
                        <p>At our website, we strive to keep you up-to-date on the latest trends and developments in the world of tech. Our team of expert writers and analysts are passionate about technology, and work tirelessly to bring you the most accurate and informative content possible.</p>

                        <button className="border-solid border-2 border-blue-700 hover:border-blue-400 text-white font-bold py-3 px-6 rounded-full">
                            Learn More
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default About;