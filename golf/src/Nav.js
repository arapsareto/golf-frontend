import React from "react";
import { NavLink } from "react-router-dom";

export function NavBar(){
    const styles={
        color:'black'
    }
    return(
        <nav>
            <ul className="navs">
            <NavLink to='about' style={styles}>About</NavLink>
            <NavLink to='course' style={styles}>Course</NavLink>
                <NavLink to='tournament' style={styles}>Tournament</NavLink>
                
                
            </ul>
        </nav>
    );
}