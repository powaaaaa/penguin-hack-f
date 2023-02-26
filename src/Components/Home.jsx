import React from 'react';
import { Link } from 'react-router-dom';

import TodoList from './TodoList';
import Asika from './Asika';

const Home = () => {
    return (
        <div class="flex">
            <div class="basis-1/4">
                <TodoList />
            </div>
            <div class="basis-1/2">
                <Asika />
            </div>
            <div class="basis-1/4">
                <Link to="/page1">Page1</Link>
            </div>
        </div>
    );
}

export default Home;