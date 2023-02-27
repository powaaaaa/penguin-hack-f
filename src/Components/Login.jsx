import React from 'react';
import { Link } from 'react-router-dom';

const Page1 = () => {
    return (
        <div>
            <h1>Login</h1>
            <li><Link to="/Home">Home</Link></li>
        </div>
    );
}

export default Page1