import React from "react";

const RadioButton = (props) => {
  const TAG_VALUE = [
    { labelname: "difficulty", values: ["かんたん", "ふつう", "むずかしい"] },
    { labelname: "motivation", values: ["ある！", "そこそこ", "ない…"] },
    { labelname: "category", values: ["せいかつ", "イベント", "アイデア"] },
  ];

  const handleChange = (event) => {
    console.log(event);
    props.setInputTodo({
      ...props.inputTodo,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <form class="mx-auto md:max-w-md">
      {TAG_VALUE.map(({ labelname, values }) => (
        <ul
          class="flex flex-row border-2 border-[#aaddcc] rounded mb-4"
          key={labelname}
        >
          <label className="pr-12">{labelname}</label>
          <p>
            {values.map((value, valueindex) => (
              <li key={valueindex}>
                <input
                  name={labelname}
                  type="radio"
                  value={value}
                  defaultChecked={value === props.inputTodo[labelname]}
                  onChange={handleChange}
                  class="hover:bg-slate-300"
                />
                <label>{value}</label>
              </li>
            ))}
          </p>
        </ul>
      ))}
    </form>
  );
};

export default RadioButton;
