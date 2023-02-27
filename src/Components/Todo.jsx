import React from 'react';

const Todo = (props) => {
    const handleTodoDelete = () => {
        const newTodos = [...props.todos]
        newTodos.splice(props.index,1)
        props.setTodos(newTodos)
    }
    
    return (
        <div class="my-3 overflow-x-auto">
            <div className='flex'>
                <input className='mr-2' type="checkbox" checked="" />
                <li className='truncate w-3/5'>{props.content}</li>
            </div>
            <div className='flex'>
                <li>{props.tagDifficulty}</li>
                <li className='ml-3'>{props.tagMotivation}</li>
                <li className='ml-3'>{props.tagCategory}</li>
                <button className='ml-3' onClick={handleTodoDelete}>完了</button>
            </div>
        </div>
    )
}

export default Todo