import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <h1>Home</h1>
            <li><Link to="/page1">Page1</Link></li>
        </div>
    );
}

export default Home;