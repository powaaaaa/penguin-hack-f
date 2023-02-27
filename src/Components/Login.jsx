import React from 'react';
import { Link } from 'react-router-dom';

const Page1 = () => {
    return (
        <div>
            <div className='flex justify-center items-center'>
                <Link to="/Home">Home</Link>
            </div>
        </div>
    );
}

export default Page1