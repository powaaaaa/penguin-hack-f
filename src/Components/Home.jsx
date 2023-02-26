import React from 'react';
import { Link } from 'react-router-dom';

import TodoList from './TodoList';

const Home = () => {
    return (
        <div>
            <h1>Home</h1>
            <TodoList />
            <li><Link to="/page1">Page1</Link></li>
        </div>
    );
}

export default Home;