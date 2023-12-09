import React from "react";

import classes from './Header.module.css';
import {Link} from "react-router-dom"

const Header = props => {
    return (
        <div className={classes.header}>
            <Link to="/"><h1>To-Do List</h1></Link>
            <Link to="/profile"><span>Profile</span></Link>
        </div>
    )
}

export default Header