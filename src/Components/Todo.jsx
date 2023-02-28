import React from "react";

const Todo = (props) => {
  const handleTodoDelete = () => {
    const newTodos = [...props.todos];
    newTodos.splice(props.index, 1);
    props.setTodos(newTodos);
  };

  return (
    <div className="pb-2 my-3 overflow-x-auto flex flex-col bg-[#bfe7e5] rounded-lg mt-4">
      <div className="flex flex-col">
        <li className="truncate w-3/5 pl-3">{props.content}</li>
      </div>
      <div className="flex">
        <li className="">{props.tagDifficulty}</li>
        <li className="ml-3">{props.tagMotivation}</li>
        <li className="ml-3">{props.tagCategory}</li>
        <button
          className="ml-3 px-1 border-2 rounded-lg border-[#aaddcc] hover:bg-[#b0e7df] hover:border-[#638181]"
          onClick={handleTodoDelete}
        >
          完了
        </button>
      </div>
    </div>
  );
};

export default Todo;
