import React from "react";
import Todo from "./Todo";

const List = (props) => {
    return (
        <div>
            <ul>
                <h2 className="ml-5  text-2xl">
                    Your Todo!!
                </h2>
                {
                    props.todos.map((item, index) => {
                        return (
                            <li key={index}>
                                <Todo 
                                    content={item.content} 
                                    tagDifficulty={item.tagDifficulty} 
                                    tagMotivation={item.tagMotivation} 
                                    tagCategory={item.tagCategory}
                                    index={index}
                                    todos={props.todos}
                                    setTodos={props.setTodos}
                                />
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default List;