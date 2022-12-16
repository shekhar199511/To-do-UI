import React, {useContext} from 'react';

import classes from './TaskItem.module.css';
import TaskContext from '../../store/task-context';

const TaskItem = props => {

    const {tasks, transformTasks, saveTasks, formAction} = useContext(TaskContext);
    
    return (
        <div className={classes.item}>
            <p>{props.task}</p>
            <div className={classes.action}>
                <p className={classes['action-item']} onClick={(event) => transformTasks('edit', props.index)}>Edit</p>
                <p className={classes['action-item']} onClick={(event) => transformTasks('delete', props.index)}>Delete</p>
            </div>
        </div>
    )
}

export default TaskItem