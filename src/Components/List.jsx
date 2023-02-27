import React from "react";
import Todo from "./Todo";

const List = (props) => {
    return (
        <ul style={{listStyle: "none"}}>
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
    )
}

export default List;