import React from 'react';
import { Link } from 'react-router-dom';

const Pricing = () => {
    return (
        <div className='mt-28'>
            <h2 className='text-4xl text-blue-700 text-center font-bold'>Pricing</h2>
            <div className="flex flex-col sm:flex-row justify-center items-center max-w-6xl mx-auto mt-12 space-y-8 sm:space-x-8 sm:space-y-0">
                {/* Card 1 */}
                <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                    <div className="px-6 py-4">
                        <h2 className="text-2xl font-bold text-gray-800">Basic Plan</h2>
                        <p className="text-gray-600 mt-4">$10/mo</p>
                    </div>
                    <div className="px-6 py-4">
                        <ul className="text-gray-700">
                            <li className="flex items-center">
                                <span className="material-icons text-green-500 mr-2">✔</span>
                                Unlimited access to courses
                            </li>
                            <li className="flex items-center">
                                <span className="material-icons text-green-500 mr-2">✔</span>
                                Certificate of completion
                            </li>
                            <li className="flex items-center">
                                <span className="material-icons text-green-500 mr-2">✔</span>
                                24/7 customer support
                            </li>
                        </ul>
                    </div>
                    <div className="bg-gray-100 px-6 py-4">
                        <Link to='/login'>
                            <button className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                Register Now
                            </button>
                        </Link>
                    </div>
                </div>
                {/* Card 2 */}
                <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                    <div className="px-6 py-4">
                        <h2 className="text-2xl font-bold text-gray-800">Standard Plan</h2>
                        <p className="text-gray-600 mt-4">$10/mo</p>
                    </div>
                    <div className="px-6 py-4">
                        <ul className="text-gray-700">
                            <li className="flex items-center">
                                <span className="material-icons text-green-500 mr-2">✔</span>
                                Unlimited access to courses
                            </li>
                            <li className="flex items-center">
                                <span className="material-icons text-green-500 mr-2">✔</span>
                                Certificate of completion
                            </li>
                            <li className="flex items-center">
                                <span className="material-icons text-green-500 mr-2">✔</span>
                                24/7 customer support
                            </li>
                        </ul>
                    </div>
                    <div className="bg-gray-100 px-6 py-4">
                        <Link to='/login'>
                            <button className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                Register Now
                            </button>
                        </Link>
                    </div>
                </div>
                {/* Card 3 */}
                <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                    <div className="px-6 py-4">
                        <h2 className="text-2xl font-bold text-gray-800">Expert Plan</h2>
                        <p className="text-gray-600 mt-4">$10/mo</p>
                    </div>
                    <div className="px-6 py-4">
                        <ul className="text-gray-700">
                            <li className="flex items-center">
                                <span className="material-icons text-green-500 mr-2">✔</span>
                                Unlimited access to courses
                            </li>
                            <li className="flex items-center">
                                <span className="material-icons text-green-500 mr-2">✔</span>
                                Certificate of completion
                            </li>
                            <li className="flex items-center">
                                <span className="material-icons text-green-500 mr-2">✔</span>
                                24/7 customer support
                            </li>
                        </ul>
                    </div>
                    <div className="bg-gray-100 px-6 py-4">
                        <Link to='/login'>
                            <button className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                Register Now
                            </button>
                        </Link>
                    </div>
                </div>
                {/* Card 4 */}
                <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                    <div className="px-6 py-4">
                        <h2 className="text-2xl font-bold text-gray-800">Pro Plan</h2>
                        <p className="text-gray-600 mt-4">$10/mo</p>
                    </div>
                    <div className="px-6 py-4">
                        <ul className="text-gray-700">
                            <li className="flex items-center">
                                <span className="material-icons text-green-500 mr-2">✔</span>
                                Unlimited access to courses
                            </li>
                            <li className="flex items-center">
                                <span className="material-icons text-green-500 mr-2">✔</span>
                                Certificate of completion
                            </li>
                            <li className="flex items-center">
                                <span className="material-icons text-green-500 mr-2"></span>
                                24/7 customer support
                            </li>
                        </ul>
                    </div>
                    <div className="bg-gray-100 px-6 py-4">
                        <Link to='/login'>
                            <button className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                Register Now
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Pricing;