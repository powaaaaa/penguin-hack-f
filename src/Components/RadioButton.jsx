import { React, useState } from 'react';

const RadioButton =() => {
    const [inputTodo, setInputTodo] = useState({ 
        todo:"", 
        difficulty:"かんたん", 
        motivation:"ある！", 
        category:"せいかつ" 
    });
    const TAG_VALUE = [
        { labelname: 'difficulty', values: ['かんたん', 'ふつう', 'むずかしい'] },
        { labelname: 'motivation', values: ['ある！', 'そこそこ', 'ない…'] },
        { labelname: 'category', values: ['せいかつ', 'イベント', 'アイデア'] }
    ];

    const handleChange = (event) => {
        console.log(event)
        setInputTodo({
            ...inputTodo,
            [event.target.name]:event.target.value
        });
    };

    return (
        <div className="contents">
                        {
                            TAG_VALUE.map(({labelname, values}) =>
                            <ul class="flex flex-row border-2 rounded-2xl" key={labelname}>
                                <label>{labelname}</label>
                                <p>
                                {
                                    values.map((value, valueindex) => 
                                        <li  key={valueindex}>
                                            <input
                                                name={labelname}
                                                type="radio"
                                                value={value}
                                                defaultChecked={value === inputTodo[labelname]}
                                                onChange={handleChange}
                                                class="hidden"
                                        />
                                    <span class="flex flex-row">{value}</span> 
                                        </li>
                                    )
                                }
                                </p>
                            </ul>
                            )
                        }
                    </div>
    )
}

export default RadioButton ;