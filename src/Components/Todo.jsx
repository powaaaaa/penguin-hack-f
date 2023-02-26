import React from 'react';

const Todo = (props) => {
    const handleTodoDelete = () => {
        const newTodos = [...props.todos]
        newTodos.splice(props.index,1)
        props.setTodos(newTodos)
    }
    
    return (
        <div class="flex items-center">
            <li>{props.content}</li>
            <li>{props.tagDifficulty}</li>
            <li>{props.tagMotivation}</li>
            <li>{props.tagCategory}</li>
            <button onClick={handleTodoDelete}>完了</button>
        </div>
    )
}

export default Todo