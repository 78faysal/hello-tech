import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const CourseDetail = () => {

    const { courseId } = useParams();

    const [courseData, setCourseData] = useState();

    useEffect(() => {
        fetch(`http://localhost:5000/courseDetail/${courseId}`)
            .then(res => res.json())
            .then(data => setCourseData(data))
    }, [])

    return (
        <div className='mt-28'>
            <div className='container mx-auto p-5'>
                <img className='h-72 w-full object-cover' src={courseData?.img} alt="" />
                <br />
                <div>
                    <h2 className='text-4xl font-bold'>{courseData?.title}</h2>
                    <p className='text-xl font-bold'>{courseData?.duration}</p><br />
                    <p><span>Overview:</span> {courseData?.overview}</p> <br />
                    <p>{courseData?.objections}</p>
                </div>
                <div className='flex gap-4 my-5'>
                    <Link className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ' to='/' >Enroll Now</Link>
                    <p className='text-3xl font-bold'>$30</p>
                </div>

            </div>
        </div>
    );
};

export default CourseDetail;