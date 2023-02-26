import React from 'react';

const Todo = (props) => {
    const handleTodoDelete = () => {
        const newTodos = [...props.todos]
        newTodos.splice(props.index,1)
        props.setTodos(newTodos)
    }
    
    return (
        <div>
            <p>{props.content}</p>
            <p>{props.tagDifficulty}</p>
            <p>{props.tagMotivation}</p>
            <p>{props.tagCategory}</p>
            <button onClick={handleTodoDelete}>完了</button>
        </div>
    )
}

export default Todo