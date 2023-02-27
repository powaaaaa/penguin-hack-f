import { React, useState, useEffect } from 'react';
import List from './List';
import RadioButton from './RadioButton';
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
        <div className='flex justify-around'>


            <form>
                <div className="contents">
                    <label>Todoを入力してね</label>
                    <input class="w-full mx-auto md:max-w-m py-2 border-2 hover:bg-gray-200 focus:outline-none focus:border-b-2 focus:border-indigo-500 placeholder-gray-500 placeholder-opacity-50" placeholder="todo" name="content" type="text" value={inputTodo.content} onChange={handleChange}/>
                </div>

                <div className="pt-7">
                    <label>どんなTodo？？</label>
                    <RadioButton inputTodo={inputTodo} setInputTodo={setInputTodo}/>
                </div>

                <button class="place-content-center p-3 rounded hover:bg-slate-200" onClick={handleAddTodo}>追加</button>
            </form>


            <div>
                <Asika />
            </div>


            <div>
                <List todos={todos} setTodos={setTodos} />
            </div>

        </div>
    )
}

export default TodoList