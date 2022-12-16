import React, { Fragment, useRef, useEffect, useContext } from "react";

import classes from './Layout.module.css';
import Input from '../UI/Input/Input'
import Button from "../UI/Button/Button";
import TaskList from "../../pages/TaskList/TaskList";
import TaskContext from "../../store/task-context";

const Layout = props => {

    const taskContext = useContext(TaskContext);
    const inputTaskRef = useRef();

    const saveTaskHandler = event => {
        event.preventDefault();
        taskContext.saveTasks(inputTaskRef)
        
    }

    useEffect(()=>{
        taskContext.setInputControlRef(inputTaskRef)
    }, [inputTaskRef])


    

    return (
        <Fragment>
            {/* <div className={classes.wallpaper}>
                <img src={wallpaper} alt="time-wallpaper"/>   
            </div> */}
            <div className={classes.content}>
                <div className = {classes.form}>
                    <Input placeholder="Add your task here" ref={inputTaskRef}/>
                    <Button type="submit" name="Add" onClick = {saveTaskHandler}/>
                </div>
                <TaskList/>
            </div>
            
        </Fragment>
    )
}

export default Layout