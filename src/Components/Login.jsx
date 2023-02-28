import { React, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Login.css";

const Page1 = () => {
  return (
    <div className="w-screen h-screen box-color">
      <div className="flex justify-center box-icon">
        <img className="w-6/7" src="../img/login.png"></img>
      </div>
      <div className="flex justify-center box-api">
        <a
          className="mr-24"
          href="http://localhost:4280/.auth/login/github?post_login_redirect_uri=/Home"
        >
          <img className="h-24" src="../img/github-mark.svg" />
        </a>
        <a
          className="mx-24"
          href="/.auth/login/twitter?post_login_redirect_uri=/Home"
        >
          <img className="h-24" src="../img/twitter.svg"></img>
        </a>
        <a
          className="ml-24"
          href="/.auth/login/aad?post_login_redirect_uri=/Home"
        >
          <img className="h-24" src="../img/Azure-Active-Directory.svg"></img>
        </a>
      </div>
    </div>
  );
};

export default Page1;
