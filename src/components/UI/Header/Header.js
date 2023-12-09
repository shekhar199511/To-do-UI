import React from "react";
import {Link} from "react-router-dom";

import classes from './Header.module.css';

const Header = props => {
    return (
        <div className={classes.header}>
            <Link to="/"><h1>To-Do List</h1></Link>
            <Link to="/profile"><span>Profile</span></Link>
        </div>
    )
}

export default Header