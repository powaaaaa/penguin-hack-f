import { React, useState, useEffect } from 'react';
import Todo from "./Todo";

const TodoList = () => {
    const data = localStorage.getItem("todos") ? JSON.parse(localStorage.getItem("todos")) : []
    const [inputText, setInputText] = useState("")
    const tagDiff = []
    const tagWill = ["ある！", "そこそこ", "ない…"]
    const tagKind = ["せいかつ", "イベント", "アイデア"]
    const [inputTagDiff, setInputTagDiff] = useState()
    const [inputTagWill, setInputTagWill] = useState()
    const [inputTagKind, setInputTagKind] = useState()
    const [todos, setTodos] = useState(data)

    useEffect(() => {
      const json = JSON.stringify(todos)
      localStorage.setItem("todos",json)
    }, [todos])
    

    const handleAddTodo = () => {
        if(inputText === ""){
            alert("空文字は追加出来ません")
        }else{
            setTodos([
                ...todos,
                {
                    content: inputText,
                    tagDiff: inputTagDiff,
                    tagWill: inputTagWill,
                    tagKind: inputTagKind
                }
            ])
        }
        setInputText("")
        setInputTagDiff("")
        setInputTagWill("")
        setInputTagKind("")
    }
    return(
        <div>
            <h1>TodoList</h1>
            <input type="text" value={inputText} onChange={(e) => {setInputText(e.target.value)}}/>
            <div>{
                tagDiff.map((tagDiff, index) => 
                    <input key={index} type="radio" name="難易度" value={tagDiff} onChange={(e) => {setInputTagDiff(e.target.value)}} />)
                }</div>
            <div>{
                tagWill.map((tagWill, index) => 
                    <input key={index} type="radio" name="やる気" value={tagWill} onChange={(e) => {setInputTagWill(e.target.value)}} />)
                }</div>
            <div>{
                tagKind.map((tagKind, index) => 
                    <input key={index} type="radio" name="種類" value={tagKind} onChange={(e) => {setInputTagKind(e.target.value)}} />)
                }</div>
            <button onClick={handleAddTodo}>追加</button>
            <ul style={{listStyle: "none"}}>
                {
                    todos.map((item, index) => {
                        return (
                            <li key={index}>
                                <Todo content={item.content} tagDiff={item.tagDiff} tagWill={item.tagWill} tagKind={item.tagKind}/>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default TodoList