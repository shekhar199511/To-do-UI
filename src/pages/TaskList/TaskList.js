import React, { useContext } from "react";
import { Fragment } from "react";
import TaskItem from "../../components/TaskItem/TaskItem";
import TaskContext from "../../store/task-context";


const TaskList = props => {
    
    const {tasks, transformTasks, saveTasks, formAction} = useContext(TaskContext);
    

    return(
        <Fragment>
            {
                tasks && tasks.map((task, index)=><TaskItem key={index} task={task} index={index}/>)
            }
            {
                !tasks && <p>No tasks available!!!</p>
            }
        </Fragment>
    )
}

export default TaskList