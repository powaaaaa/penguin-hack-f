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

const RadioButton = (props) => {
  const TAG_VALUE = [
    { labelname: "difficulty", values: ["かんたん", "ふつう", "むずかしい"] },
    { labelname: "motivation", values: ["ある！", "そこそこ", "ない…"] },
    { labelname: "category", values: ["せいかつ", "イベント", "アイデア"] },
  ];

  const handleChange = (event) => {
    props.setInputTodo({
      ...props.inputTodo,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <form class="mx-auto md:max-w-md">
      {TAG_VALUE.map(({ labelname, values }) => (
        <ul
          className="p-2 flex flex-raw bg-[#bfe7e5] rounded-lg mt-4"
          key={labelname}
        >
          <label className="flex-none w-32">
            <div className="flex justify-center">{labelname}</div>
          </label>
          <div className="flex justify-center">
            <p>
              {values.map((value, valueindex) => (
                <li key={valueindex}>
                  <input
                    id={value}
                    name={labelname}
                    type="radio"
                    value={value}
                    defaultChecked={value === props.inputTodo[labelname]}
                    onChange={handleChange}
                  />
                  <label for={value}>
                    {value}
                    {labelname === "difficulty" ? (
                      value === "かんたん" ? (
                        <SentimentVerySatisfiedIcon />
                      ) : value === "ふつう" ? (
                        <SentimentSatisfiedAltIcon />
                      ) : (
                        <SentimentVeryDissatisfiedIcon />
                      )
                    ) : labelname === "motivation" ? (
                      value === "ある！" ? (
                        <BatteryFullIcon />
                      ) : value === "そこそこ" ? (
                        <Battery60Icon />
                      ) : (
                        <Battery20Icon />
                      )
                    ) : value === "せいかつ" ? (
                      <RestaurantIcon />
                    ) : value === "イベント" ? (
                      <EventAvailableIcon />
                    ) : (
                      <TipsAndUpdatesIcon />
                    )}
                  </label>
                </li>
              ))}
            </p>
          </div>
        </ul>
      ))}
    </form>
  );
};

export default RadioButton;
