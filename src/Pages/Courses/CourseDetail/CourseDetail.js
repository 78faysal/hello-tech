import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

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
            <div className='container mx-auto'>
                <img className='h-72 w-full object-cover' src={courseData?.img} alt="" />

                <div>
                    <h2 className='text-4xl font-bold'>{courseData?.title}</h2>
                    <p className='text-xl font-bold'>{courseData?.duration}</p>
                    <p>{courseData?.overview}</p>
                    <p></p>
                </div>
            </div>
        </div>
    );
};

export default CourseDetail;