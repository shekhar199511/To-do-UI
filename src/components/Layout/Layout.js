import React, { Fragment, useState, useRef, useEffect } from "react";

import wallpaper from '../../assets/wallpaper.jpeg';
import classes from './Layout.module.css';
import Input from '../UI/Input/Input'
import Button from "../UI/Button/Button";
import TaskList from "../../pages/TaskList/TaskList";
import { useSelector } from "react-redux";
const Layout = props => {

    const tasks = useSelector(state => state.tasks)

    return (
        <Fragment>

            <div className={classes.content}>
                <div className = {classes.form}>
                    <Input placeholder="Add your task here"/>
                    <Button type="submit" name="Add" />
                </div>
                <TaskList />
            </div>
            
        </Fragment>
    )
}

export default Layout