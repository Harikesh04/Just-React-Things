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
        <NavLink className="navlinks" to="/" activeClassName="active-link" >
         Home
        </NavLink>
        <NavLink className="navlinks" to="/technews"activeClassName="active-link" >
         Technology
        </NavLink>
        <NavLink className="navlinks" to="/healthnews" activeClassName="active-link">
         Health
        </NavLink>
        <NavLink className="navlinks" to="/businessnews" activeClassName="active-link">
         Business
        </NavLink>
        <NavLink className="navlinks" to="/Entertainment"activeClassName="active-link" >
         Entertainment
        </NavLink>
        <NavLink className="navlinks" to="/Sports" activeClassName="active-link">
        Sports
        </NavLink>
        <NavLink className="navlinks" to="/Science"activeClassName="active-link" >
         Science
        </NavLink>
        </div>
    </div>
  )
}

export default Header