import React from "react";

import classes from './Header.module.css';

const Header = props => {
    return (
        <div className={classes.header}>
            <h1>To-Do List</h1>
            <span>Profile</span>
        </div>
    )
}

export default Header