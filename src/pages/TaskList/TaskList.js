import React, { useState, useEffect } from "react";
import { Fragment } from "react";
import TaskItem from "../../components/TaskItem/TaskItem";
// import {taskCollection} from "../../Constant";

const TaskList = props => {
    

    // useEffect(()=>{
    //     console.log("compnenet loaded")
    //     setTasks(props.taskCollection)
    // }, [props.taskCollection, tasks])

    const actionHandler = (action, index) => {
        console.log(action, index)
        props.onAction(action, index)
    }

    return(
        <Fragment>
            {
                props.tasks.map((task, index)=><TaskItem key={index} task={task} index={index} onAction={actionHandler}/>)
            }
        </Fragment>
    )
}

export default TaskList