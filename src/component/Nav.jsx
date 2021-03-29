import React from 'react';
import { NavLink } from "react-router-dom";
import './Nav.css';


const Nav = () => {
    return (
        <div id="navList">
            <section id="groupNav">
            <NavLink to="/" className="textColour"> 
                <h3>Home</h3>
            </NavLink>
            <NavLink to="/about" className="textColour"> 
                <h3>About</h3>
            </NavLink>
           <NavLink to="/contact" className="textColour"> 
                <h3> <a href="/">Contact</a> </h3>
            </NavLink>
                
                
           <NavLink to="/signin" className="textColour"> 
                <h3> <a href="/">Sign-In</a> </h3>
            </NavLink>
                
           <NavLink to="/signup" className="textColour"> 
                <h3> <a href="/">Sign-up</a> </h3>
            </NavLink>
                </section>
        </div>
    )
}

export default Nav;
