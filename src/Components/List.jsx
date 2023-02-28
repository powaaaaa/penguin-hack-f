import React from "react";
import Todo from "./Todo";

const List = (props) => {
  return (
    <div>
      <ul>
        <h2 className="ml-5  text-2xl">Your Todo!!</h2>
        <div className="overflow-auto max-h-96">
          {props.todos.map((item, index) => {
            return (
              <li key={index}>
                <Todo {...item} />
              </li>
            );
          })}
        </div>
      </ul>
    </div>
  );
};

export default List;
