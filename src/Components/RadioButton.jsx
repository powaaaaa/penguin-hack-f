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
                            <ul className={`${labelname}_list`} key={labelname}>
                                <label>{labelname}</label>
                                {
                                    values.map((value, valueindex) => 
                                        <li className="radio-buttons" key={valueindex}>
                                            <input
                                                name={labelname}
                                                type="radio"
                                                value={value}
                                                defaultChecked={value === inputTodo[labelname]}
                                                onChange={handleChange}
                                        />
                                    <span className='radio-span'>{value}</span> 
                                        </li>
                                    )
                                }
                            </ul>
                            )
                        }
                    </div>
    )
}

export default RadioButton ;