import React from 'react'
import { Link } from "react-router-dom";
import "./Header.css"

const Header = () => {
  return (
    <div className="headercontainer">
        <div className="headerlogo">
            <h2>NewsJet</h2>
        </div>
        <div className="midheader">
        <Link className="navlinks" to="/" >
         Home
        </Link>
        <Link className="navlinks" to="/technews" >
         Technology
        </Link>
        <Link className="navlinks" to="/healthnews" >
         Health
        </Link>
        <Link className="navlinks" to="/businessnews" >
         Business
        </Link>
        <Link className="navlinks" to="/Entertainment" >
         Entertainment
        </Link>
        <Link className="navlinks" to="/Sports" >
        Sports
        </Link>
        <Link className="navlinks" to="/Science" >
         Science
        </Link>
        </div>
    </div>
  )
}

export default Header