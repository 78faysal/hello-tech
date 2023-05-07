import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Courses = () => {

    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/coursesData')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])
    return (
        <div className="flex flex-wrap justify-center mt-28">
            {
                courses.map((course) => {
                    return (
                        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white mx-4 my-8 py-4">
                            <img src={course.img} alt={course.title} className="w-full h-56 object-cover" />
                            <div className="px-6 py-4">
                                <div className="font-bold text-xl mb-2">{course.title}</div>
                                <p className="text-gray-700 text-base">{course.overview.slice(0, 200)}{course.overview.length > 200 && "..."}</p>
                            </div>
                            <div className="px-6 py-2 flex justify-between items-center">
                                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                                    {course.duration}
                                </span>
                                {/* {course.objectives.map((objective) => (
                                    <span
                                        key={objective}
                                        className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"
                                    >
                                        {objective}
                                    </span>
                                ))} */}

                                <Link className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2' to={`/courseDetail/${course.id}`}>See More</Link>

                            </div>
                        </div>
                    );
                })
            }
        </div>
    );
};

export default Courses;
