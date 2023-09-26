import "./Nav.css";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import { FcCommandLine } from "react-icons/fc";
import { FcElectronics } from "react-icons/fc";
import { FcPuzzle } from "react-icons/fc";
import { FcReading } from "react-icons/fc";
import { FcIdea } from "react-icons/fc";
import { BsGithub } from "react-icons/bs";
function NavComponent() {
  const [active, setActive] = useState("intro");
  let btnClass = "bg-gray-800 rounded text-white font-semibold";
  function changeActive(navName) {
    setActive(navName);
  }
  function setClass(navName) {
    if (navName === active) return btnClass;
    return null;
  }
  return (
    <div className="m-5 nav-btn w-1/6">
      <div label="title">
        <p className="text-lg font-semibold">GET STARTED</p>
      </div>
      <Link to="/">
        <div
          className={`${setClass("intro")} p-2 flex`}
          onClick={() => changeActive("intro")}
        >
          <div className="p-1">
            <FcCommandLine />
          </div>
          <p> Introduction</p>
        </div>
      </Link>
      <Link to="/control">
        <div
          className={`${setClass("control")} p-2 flex`}
          onClick={() => changeActive("control")}
        >
          <div className="p-1">
            <FcElectronics />
          </div>
          <p> Controller</p>
        </div>
      </Link>
      {/* <Link to="/application">
        <div
          className={`${setClass("temp")} p-2 flex`}
          onClick={() => changeActive("temp")}
        >
          <div className="p-1">
            <FcPuzzle />
          </div>
          <p> Application(R3F)</p>
        </div>
      </Link> */}
      <Link to="/question">
        <div
          className={`${setClass("question")} p-2 flex`}
          onClick={() => changeActive("question")}
        >
          <div className="p-1">
            <FcIdea />
          </div>
          <p> Question</p>
        </div>
      </Link>
      <Link to="/articles">
        <div
          className={`${setClass("articles")} p-2 flex`}
          onClick={() => changeActive("articles")}
        >
          <div className="p-1">
            <FcReading />
          </div>
          <p> Article</p>
        </div>
      </Link>
      <div
        className={`p-2 flex`}
      >
        <div className="p-1">
          <BsGithub />
        </div>
        <a href="https://github.com/princeborn1999/reduino" target="_blank">Github</a>
      </div>
    </div>
  );
}
export default NavComponent;
