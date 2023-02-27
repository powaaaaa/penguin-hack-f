import { React, useState, useEffect } from 'react';
import List from './List';
import RadioButton from './RadioButton';
import './color.css'
import Asika from './Asika';

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
            //apiをたたく
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
        <div className='flex'>

            <form className='shadow-md m-7 p-8 w-1/3 box font-semibold subpixel-antialiased'>
                <div className="contents">
                    <label>Todoを入力してね</label>
                    <input class="py-2 border-2 hover:bg-gray-200 focus:outline-none focus:border-b-2 focus:border-indigo-500 placeholder-gray-500 placeholder-opacity-50" placeholder="todo" name="content" type="text" value={inputTodo.content} onChange={handleChange}/>
                </div>

                <div className="pt-7">
                    <label>どんなTodo？？</label>
                    <RadioButton inputTodo={inputTodo} setInputTodo={setInputTodo}/>
                </div>

                <div>
                    <button class="place-content-center p-3 rounded hover:bg-slate-200" onClick={handleAddTodo}>追加</button>
                </div>
                
            </form>


            <div className="object-contain rounded-lg Asika-background">
                <img className='place-content-center' src='https://github.com/penguin-hack-f/penguin-hack-f/blob/main/src/img/asik_default.png?raw=true' alt="アシカデフォ" />
            </div>


            <div className='shadow-md rounded-lg m-7 p-8 box w-1/3'>
                <div>
                    <List todos={todos} setTodos={setTodos} />
                </div>
            </div>

        </div>
    )
}

export default TodoList