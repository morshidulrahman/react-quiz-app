import React from "react";
import logo from "../assets/images/3.jpg";
import Classes from "../styles/Video.module.css";

function Video() {
  return (
    <a href="quiz.html">
      <div className={Classes.video}>
        <img src={logo} alt="video" />
        <p>#23 React Hooks Bangla - React useReducer hook Bangla</p>
        <div className={Classes.qmeta}>
          <p>10 Questions</p>
          <p>Score : Not taken yet</p>
        </div>
      </div>
    </a>
  );
}

export default Video;
