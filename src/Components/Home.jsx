import React from 'react';
import { Link } from 'react-router-dom';

import TodoList from './TodoList';
import Asika from './Asika';

const Home = () => {
    return (
        <div class="flex justify-around">
            <div >
                <TodoList />
            </div>
            <div className='mt-52'>
                <Asika/>
            </div>
            <div className='mr-20'>
                <Link to="/page1">Page1</Link>
            </div>
        </div>
    );
}

export default Home;