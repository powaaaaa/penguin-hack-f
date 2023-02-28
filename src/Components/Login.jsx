import { React, useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import './Login.css';
import axios from 'axios';

const Page1 = () => {

    const [res ,setRes] = useState([]);
    
    var userId = "123";
    
    var postJson = {
        "userId": "123",
        "difficulty": "Easy",
        "motivation": "Fun",
        "category": "Fun",
        "display": true,
        "content": "Do something fun"
    }
    
    
    var putJson = {
        "userId": "123",
        "difficulty": "Easy",
        "motivation": "Fun",
        "category": "Fun",
        "display": false,
        "content": "Do something fun",
        "taskNumber": 4
    }
    
    function getData() {
        axios.get(`https://func-penguinhack.azurewebsites.net/api/TodoGet?code=mDLG8sAyOgEZIjzmQDAIZ-mtTfGOH8VGGO5PGl4LxQv6AzFupmTFuA==&userId=${userId}`)
        .then(response => {
            console.log(response);
            setRes(response.data);
            console.log(res);
        })
        .catch(error => {
            console.log(error);
        });
    }
    
    function postData() {
    }

    return (
        <div className='w-screen h-screen'>
            <div className='flex justify-center box-icon'>
                <a className='mr-24' href="http://localhost:4280/.auth/login/github?post_login_redirect_uri=/Home">
                    <img className='h-24' src='../img/github-mark.svg'></img>
                </a>
                <a className='mx-24' href="/.auth/login/twitter?post_login_redirect_uri=/Home">
                    <img className='h-24' src='../img/twitter.svg'></img>
                </a>
                <a className='ml-24' href="/.auth/login/aad?post_login_redirect_uri=/Home">
                    <img className='h-24' src='../img/Azure-Active-Directory.svg'></img>
                </a>
            </div>

            <div className='box-api'>
                <button className='mr-24'>
                    post
                    
                </button>
                <button className='mx-24' onClick={getData}>
                    get
                    {res.length < 1 ? (<div>no items</div>) : 
                        (
                            res.todos.map(todo => (
                                <li key={todo.rowKey}>{todo.motivation}</li>
                            ))
                        )
                    }
                </button>
                <button className='ml-24'>
                    put
                </button>
            </div>
        </div>
    );
}

export default Page1