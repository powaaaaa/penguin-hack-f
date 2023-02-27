import React from 'react';
import { Link } from 'react-router-dom';

const Page1 = () => {
    return (
        <div className='w-screen h-screen'>
            <div className='flex justify-center items-center'>
                <Link to="/.auth/login/github?post_login_redirect_uri=/Home">
                    <img src='../img/github-mark.png'></img>
                </Link>
                <Link to="/.auth/login/twitter?post_login_redirect_uri=/Home">
                    <img src='../img/Logoblue.svg'></img>
                </Link>
                <Link to="/.auth/login/aad?post_login_redirect_uri=/Home">
                    <img src='../img/Azure-Active-Directory.svg'></img>
                </Link>
            </div>
        </div>
    );
}

export default Page1