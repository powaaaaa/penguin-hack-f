import React from "react";

const Todo = (props) => {
  const handleTodoDelete = () => {
    const newTodos = [...props.todos];
    newTodos.splice(props.index, 1);
    props.setTodos(newTodos);
  };

  return (
    <div class="my-3 overflow-x-auto">
      <div className="flex">
        <li className="truncate w-3/5">{props.content}</li>
      </div>
      <div className="flex">
        <li className="">{props.tagDifficulty}</li>
        <li className="ml-3">{props.tagMotivation}</li>
        <li className="ml-3">{props.tagCategory}</li>
        <button
          className="ml-3 p-1 border-2 rounded-lg border-[#aaddcc] hover:bg-amber-200 hover:border-amber-600"
          onClick={handleTodoDelete}
        >
          完了
        </button>
      </div>
    </div>
  );
};

export default Todo;
