import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
    return (
        <nav>
            <h1>Welcome to the color factory</h1>
            <NavLink exact to={"/colors/new"}>Add a new color</NavLink>
        </nav>
    );
}

export default NavBar;