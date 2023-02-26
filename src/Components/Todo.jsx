import { React } from 'react';

const Todo = (props, {index, todos, setTodos}) => {
    const handleTodoDelete = () => {
        const newTodos = [...todos]
        newTodos.splice(index,1)
        setTodos(newTodos)
    }
    
    return (
        <div>
            <p>{props.content}</p>
            <p>{props.tagDiff}</p>
            <p>{props.tagWill}</p>
            <p>{props.tagKind}</p>
            <button onClick={handleTodoDelete}>完了</button>
        </div>
    )
}

export default Todo