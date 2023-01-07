import React from 'react';
import { useDispatch } from 'react-redux';

import classes from './TaskItem.module.css';


const TaskItem = props => {

    const dispatch = useDispatch();

    const setActionhandler = (action, index) => {
        
        console.log(action, index)
        if(action=='edit') props.onAction(action, index)
        if(action=='delete') dispatch({type : 'delete', index:props.index})
        
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