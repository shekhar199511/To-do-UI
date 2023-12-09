import React from "react";

import classes from './Button.module.css';
import { useDispatch } from 'react-redux';

const Button =  props => {

    const dispatch = useDispatch()
    const addItemHandler = () => {
        dispatch({
            type:"add"
        })
    }

    return (
        <button type={props.type} className={classes.btn} onClick={addItemHandler}>{props.name}</button>
    )
}

export default Button