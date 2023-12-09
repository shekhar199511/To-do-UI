import React from 'react';

import classes from './TaskItem.module.css';
import { useDispatch } from 'react-redux';

const TaskItem = props => {


    const dispatch = useDispatch()

    const setActionhandler = (action, index) => {
       
        dispatch({
            'type' : action,
            'value' : index,
        })

    }

    return (
        <div className={classes.item}>
            <p>{props.task}</p>
            <div className={classes.action}>
                <p className={classes['action-item']} onClick={(event) => setActionhandler('edit', props.index)}>Edit</p>
                <p className={classes['action-item']} onClick={(event) => setActionhandler('delete', props.index)}>Delete</p>
            </div>
        </div>
    )
}

export default TaskItem