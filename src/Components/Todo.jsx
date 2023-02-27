import React from "react";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";
import SentimentVerySatisfiedIcon from "@mui/icons-material/SentimentVerySatisfied";
import Battery20Icon from "@mui/icons-material/Battery20";
import Battery60Icon from "@mui/icons-material/Battery60";
import BatteryFullIcon from "@mui/icons-material/BatteryFull";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import TipsAndUpdatesIcon from "@mui/icons-material/TipsAndUpdates";

const Todo = (props) => {
  const handleTodoDelete = () => {
    const newTodos = [...props.todos];
    newTodos.splice(props.index, 1);
    props.setTodos(newTodos);
  };

  return (
    <div className="pb-2 my-3 overflow-x-auto flex flex-col border-2 border-[#aaddcc] rounded mt-4">
      <div className="flex flex-col">
        <li className="truncate w-3/5 pl-3">{props.content}</li>
      </div>
      <div className="flex flex-raw">
        <div className="flex flex-col ">
          <li className="w-20 flex flex-col justify-center">
            <p className="text-sm pb-1 flex justify-center">difficulty</p>
            <div className="flex justify-center">
              {props.tagDifficulty === "かんたん" ? (
                <SentimentVerySatisfiedIcon />
              ) : props.tagDifficulty === "ふつう" ? (
                <SentimentSatisfiedAltIcon />
              ) : (
                <SentimentVeryDissatisfiedIcon />
              )}
            </div>
          </li>
        </div>
        <li className="flex flex-col">
          <p className="text-sm pb-1 flex justify-center">motivation</p>
          <div className="flex justify-center">
            {props.tagMotivation === "ある！" ? (
              <BatteryFullIcon />
            ) : props.tagMotivation === "そこそこ" ? (
              <Battery60Icon />
            ) : (
              <Battery20Icon />
            )}
          </div>
        </li>
        <li className="ml-3 w-20">
          <p className="text-sm pb-1 flex justify-center">category</p>
          <div className="flex justify-center">
            {props.tagCategory === "せいかつ" ? (
              <RestaurantIcon />
            ) : props.tagCategory === "イベント" ? (
              <EventAvailableIcon />
            ) : (
              <TipsAndUpdatesIcon />
            )}
          </div>
        </li>
        <button
          className="ml-3 px-1 border-2 rounded-lg border-[#aaddcc] hover:bg-amber-200 hover:border-amber-600"
          onClick={handleTodoDelete}
        >
          完了
        </button>
      </div>
    </div>
  );
};

export default Todo;
