import React, { useState } from 'react';


const accordions = [
    {
        title: 'What is the difference between a virus and malware?',
        content: 'Malware is a broad term that includes any malicious software, while a virus is a specific type of malware that spreads by infecting other files or programs.',
    },
    {
        title: 'What is cloud computing?',
        content: 'Cloud computing refers to the delivery of computing services, such as servers, storage, and applications, over the internet instead of on a local computer or server.',
    },
    {
        title: 'What is the Internet of Things (IoT)?',
        content: 'The Internet of Things refers to a network of connected devices, vehicles, and other objects that can collect and exchange data through the internet.',
    },
    {
        title: 'What is machine learning?',
        content: 'Machine learning is a type of artificial intelligence that allows computer systems to automatically learn and improve from experience without being explicitly programmed.',
    },
    {
        title: 'What is blockchain technology?',
        content: ' Blockchain technology is a distributed ledger system that allows for secure and transparent transactions without the need for a central authority.',
    },
];


const FAQ = () => {

    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
        if (activeIndex === index) {
            setActiveIndex(null);
        } else {
            setActiveIndex(index);
        }
    };

    return (
        <div className="w-full max-w-md mx-auto mt-32">
            <h2 className='text-4xl text-indigo-400 text-center font-bold'>FAQ</h2>
            {accordions.map((accordion, index) => (
                <div key={index} className="border-b">
                    <div
                        className="flex justify-between items-center cursor-pointer py-4 px-6"
                        onClick={() => toggleAccordion(index)}
                    >
                        <h3 className="text-lg font-medium">{accordion.title}</h3>
                        <svg
                            className={`w-4 h-4 transition-transform transform ${activeIndex === index ? 'rotate-180' : ''
                                }`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M19 9l-7 7-7-7"
                            ></path>
                        </svg>
                    </div>
                    <div
                        className={`${activeIndex === index ? 'block' : 'hidden'
                            } px-6 py-4`}
                    >
                        <p>{accordion.content}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default FAQ;