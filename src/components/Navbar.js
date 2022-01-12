
import React from "react";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <div>
      <div className={`maindiv-${props.mode}`}>
        <div className="logo">
          <h1>{props.logo}</h1>
        </div>
        <ul className={`navbar-${props.mode}`}>
          <li className="item">
            <Link to="/">{props.ghar}</Link>
          </li>
          <li className="item">
            <Link to="/about">About</Link>
          </li>
          <li className="item">
            <Link to="contact">Contact</Link>
          </li>
          <li className="item">
            <a href="/">Learn more</a>
          </li>
          <li className="item">
            <a href="/">Sign up</a>
          </li>
          <li className="item">
            <a href="/">Log in</a>
          </li>
        </ul>
      <button onClick={props.changingmode}>{props.mode}</button>
      </div>
    </div>
  );
}
