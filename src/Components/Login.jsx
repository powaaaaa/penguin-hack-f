import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

const Page1 = () => {
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
        </div>
    );
}

export default Page1