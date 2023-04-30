import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div className='header-section min-h-screen flex justify-center items-center bg-gray-500 text-white pt-10 '>
            <div className="max-w-md">
                <div className="max-w-7xl text-center px-4">
                    <h1 className="text-5xl font-bold">Let's know and learn technology from <br /> <span className='text-6xl font-bold text-indigo-400'>Hello Tech </span></h1>
                    <div className='mt-5'>
                        <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 py-3 rounded-full mr-2">
                            Start Now
                        </button>
                        <button className="border-solid border-2 border-blue-700 hover:border-blue-400 text-white font-bold py-3 px-6 rounded-full">
                            Learn More
                        </button>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Header;