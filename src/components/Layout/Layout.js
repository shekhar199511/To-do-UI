import React, { Fragment, useState, useRef, useEffect } from "react";

import wallpaper from '../../assets/wallpaper.jpeg';
import classes from './Layout.module.css';
import Input from '../UI/Input/Input'
import Button from "../UI/Button/Button";
import {taskCollection} from "../../Constant";
import TaskList from "../../pages/TaskList/TaskList";

const Layout = props => {

    
    let formAction = 'save';
    let actionIndex = -1;

    const inputTaskRef = useRef();
    const [tasks, setTasks] = useState(taskCollection)

    const saveTaskHandler = (event, formAction) => {
        event.preventDefault();
        if(formAction==='save') setTasks(oldArray => [...oldArray, inputTaskRef.current.value])
        else if(formAction==='edit'){
            let prevTasksArray = [...tasks]
            prevTasksArray[actionIndex] = inputTaskRef.current.value
            setTasks(prevTasksArray)
            actionIndex = -1
        }
        
    }

    useEffect(()=>{
        inputTaskRef.current.value = ''
    }, [tasks])

    const manipulateTaskHandler = (action, selectedIndex) => {
        console.log(action, selectedIndex)
        let editItem = tasks[selectedIndex]
        actionIndex = selectedIndex
        if(action=="edit"){
            formAction = 'edit'
            inputTaskRef.current.value = editItem
        } else if(action=="delete"){
            setTasks(oldArray => 
                oldArray.filter(item => item!=editItem)
            )
        }
    }


    

    return (
        <Fragment>
            {/* <div className={classes.wallpaper}>
                <img src={wallpaper} alt="time-wallpaper"/>   
            </div> */}
            <div className={classes.content}>
                <div className = {classes.form}>
                    <Input placeholder="Add your task here" ref={inputTaskRef}/>
                    <Button type="submit" name="Add" onClick = {(event)=>saveTaskHandler(event, formAction)}/>
                </div>
                <TaskList tasks={tasks} onAction = {manipulateTaskHandler}/>
            </div>
            
        </Fragment>
    )
}

export default Layout