import React from 'react';

import classes from './TaskItem.module.css';

const TaskItem = props => {

    const setActionhandler = (action, index) => {
        
        console.log(action, index)
        props.onAction(action, index)
    }

    return (
        <div className={classes.item}>
            <p className={classes.task}>{props.task}</p>
            <div className={classes.action}>
                <p className={classes['action-item']} onClick={(event) => setActionhandler('edit', props.index)}>Edit</p>
                <p className={classes['action-item']} onClick={(event) => setActionhandler('delete', props.index)}>Delete</p>
            </div>
        </div>
    )
}

export default TaskItem