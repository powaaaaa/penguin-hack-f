import React from 'react';
import { Link } from 'react-router-dom';

const Page1 = () => {
    return (
        <div>
            <h1>Page1</h1>
            <li><Link to="/">Home</Link></li>
        </div>
    );
}

export default Page1