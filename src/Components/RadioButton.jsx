import React from "react";

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
          class="flex flex-raw border-2 border-[#aaddcc] rounded mt-4"
          key={labelname}
        >
          <label className="flex-none w-32">{labelname}</label>
          <p>
            {values.map((value, valueindex) => (
              <li key={valueindex}>
                <input
                  id={valueindex}
                  name={labelname}
                  type="radio"
                  value={value}
                  defaultChecked={value === props.inputTodo[labelname]}
                  onChange={handleChange}
                  class="hidden"
                />
                <label
                  for={valueindex}
                  className="flex flex-col rounded-lg hover:bg-amber-200 checked:bg-green-300"
                >
                  {value}
                </label>
              </li>
            ))}
          </p>
        </ul>
      ))}
    </form>
  );
};

export default RadioButton;
