import { React, useState, useEffect } from 'react';
import Todo from "./Todo";
import RadioButton from './RadioButton';

const TodoList = () => {
    const data = localStorage.getItem("todos") ? JSON.parse(localStorage.getItem("todos")) : []
    const [inputTodo, setInputTodo] = useState({ 
        content:"", 
        difficulty:"かんたん", 
        motivation:"ある！", 
        category:"せいかつ" 
    });
    const [todos, setTodos] = useState(data)

    useEffect(() => {
      const json = JSON.stringify(todos)
      localStorage.setItem("todos",json)
    }, [todos])  

    const handleAddTodo = () => {
        if(inputTodo.content === ""){
            alert("空文字は追加出来ません")
        }else{
            setTodos([
                ...todos,
                {
                    content: inputTodo.content,
                    tagDifficulty: inputTodo.difficulty,
                    tagMotivation: inputTodo.motivation,
                    tagCategory: inputTodo.category
                }
            ])
        }
        setInputTodo({ 
            content:"", 
            difficulty:"かんたん", 
            motivation:"ある！", 
            category:"せいかつ" 
        });
    }

    const handleChange = (event) => {
        console.log(event)
        setInputTodo({
            ...inputTodo,
            [event.target.name]:event.target.value
        });
    };

    return(
        <div>
            <h1>TodoList</h1>
            <input name="content" type="text" value={inputTodo.content} onChange={handleChange}/>
            <div className="contents">
                <RadioButton />
            </div>
            <button onClick={handleAddTodo}>追加</button>
            <ul style={{listStyle: "none"}}>
                {
                    todos.map((item, index) => {
                        return (
                            <li key={index}>
                                <Todo 
                                    content={item.content} 
                                    tagDifficulty={item.tagDifficulty} 
                                    tagMotivation={item.tagMotivation} 
                                    tagCategory={item.tagCategory}
                                    index={index}
                                    todos={todos}
                                    setTodos={setTodos}
                                />
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default TodoList