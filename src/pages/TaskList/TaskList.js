import React, { useState, useEffect } from "react";
import { Fragment } from "react";
import { useSelector } from "react-redux";
import TaskItem from "../../components/TaskItem/TaskItem";
// import {taskCollection} from "../../Constant";

const TaskList = props => {
    const tasks = useSelector(state => state.tasks)


    const actionHandler = (action, index) => {
        console.log(action, index)
        props.onAction(action, index)
    }

    return(
        <Fragment>
            {
                tasks.map((task, index)=><TaskItem key={index} task={task} index={index} onAction={actionHandler}/>)
            }
        </Fragment>
    )
}

export default TaskList