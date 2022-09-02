import React from 'react'
import { Link,NavLink } from "react-router-dom";
import "./Header.css"

const Header = () => {
  return (
    <div className="headercontainer">
        <div className="headerlogo">
            <h2>NewsJet</h2>
        </div>
        <div className="midheader">
        <NavLink className="navlinks" to="/" activeclassname="active-link" >
         Home
        </NavLink>
        <NavLink className="navlinks" to="/technews"activeclassname="active-link" >
         Technology
        </NavLink>
        <NavLink className="navlinks" to="/healthnews" aactiveclassname="active-link">
         Health
        </NavLink>
        <NavLink className="navlinks" to="/businessnews" activeclassname="active-link">
         Business
        </NavLink>
        <NavLink className="navlinks" to="/Entertainment"activeclassname="active-link" >
         Entertainment
        </NavLink>
        <NavLink className="navlinks" to="/Sports" activeclassname="active-link">
        Sports
        </NavLink>
        <NavLink className="navlinks" to="/Science"activeclassname="active-link" >
         Science
        </NavLink>
        </div>
    </div>
  )
}

export default Header