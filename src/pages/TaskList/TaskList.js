import React, { useState, useEffect } from "react";
import { Fragment } from "react";
import TaskItem from "../../components/TaskItem/TaskItem";
// import {taskCollection} from "../../Constant";
import {useSelector} from 'react-redux';

const TaskList = props => {
    
    const tasks = useSelector(state => state.tasks)

    return(
        <Fragment>
            {
                tasks.map((task, index)=><TaskItem key={index} task={task} index={index} />)
            }
        </Fragment>
    )
}

export default TaskList