import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const CourseDetail = () => {

    const {courseId} = useParams();

    const [courseData, setCourseData] = useState();

    useEffect(() => {
        fetch(``)
    }, [])
    
    return (
        <div className='mt-28'>
            
        </div>
    );
};

export default CourseDetail;