import { React, useState, useEffect } from "react";
import List from "./List";
import RadioButton from "./RadioButton";
import "./color.css";
import Asika from "./Asika";

const TodoList = () => {
  const data = localStorage.getItem("todos")
    ? JSON.parse(localStorage.getItem("todos"))
    : [];
  const [inputTodo, setInputTodo] = useState({
    content: "",
    difficulty: "かんたん",
    motivation: "ある！",
    category: "せいかつ",
  });
  const [todos, setTodos] = useState(data);

  useEffect(() => {
    const json = JSON.stringify(todos);
    localStorage.setItem("todos", json);
  }, [todos]);

  const handleAddTodo = () => {
    if (inputTodo.content === "") {
      alert("空文字は追加出来ません");
    } else {
      setTodos([
        ...todos,
        {
          content: inputTodo.content,
          tagDifficulty: inputTodo.difficulty,
          tagMotivation: inputTodo.motivation,
          tagCategory: inputTodo.category,
        },
      ]);
      //apiをたたく
    }
    setInputTodo({
      content: "",
      difficulty: "かんたん",
      motivation: "ある！",
      category: "せいかつ",
    });
  };

  const handleChange = (event) => {
    console.log(event);
    setInputTodo({
      ...inputTodo,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div className="flex h-screen">
      <form className="shadow-md m-7 p-7 w-1/3 box subpixel-antialiased">
        <div className="content">
          <label>Todoを入力してね</label>
          <div className="flex justify-center">
            <input
              className="border-2 rounded-lg pb-1 px-7 hover:bg-gray-200 focus:outline-none focus:border-b-2 focus:border-[#e8b37a]"
              placeholder="がんばれ！"
              name="content"
              type="text"
              value={inputTodo.content}
              onChange={handleChange}
              autoFocus
            />
          </div>
        </div>

        <div className="pt-4 flex flex-col">
          <label>どんなTodo？？</label>
          <RadioButton inputTodo={inputTodo} setInputTodo={setInputTodo} />
        </div>

        <div className="my-2 text-center">
          <button
            className="p-1 border-2 border-[#aaddcc] rounded hover:bg-[#c3ede7] hover:border-[#7f9494]"
            onClick={handleAddTodo}
          >
            追加
          </button>
        </div>
      </form>

      <div className="rounded-lg w-1/3 relative overflow-hidden my-7">
        <Asika status={todos.length}></Asika>
        <img
          className=" absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
w-[40vw] max-w-none"
          src="img/asikaback3.png"
          alt="background"
        />
      </div>

      <div className="shadow-md rounded-lg m-7 p-8 box w-1/3">
        <List todos={todos} setTodos={setTodos} />
      </div>
    </div>
  );
};

export default TodoList;
