import React, { useContext } from "react";
import { Fragment } from "react";
import TaskItem from "../../components/TaskItem/TaskItem";
import TaskContext from "../../store/task-context";


const TaskList = props => {
    
    const {tasks, transformTasks, saveTasks, formAction} = useContext(TaskContext);
    

    const actionHandler = (action, index) => {
        props.onAction(action, index)
    };

    return(
        <Fragment>
            {
                tasks.map((task, index)=><TaskItem key={index} task={task} index={index}/>)
            }
        </Fragment>
    )
}

export default TaskList