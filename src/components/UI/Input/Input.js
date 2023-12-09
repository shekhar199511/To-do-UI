import React from "react";
import { Fragment } from "react";
import  { useSelector, useDispatch } from 'react-redux';
import classes from './Input.module.css';

const Input = (props, ref) => {

    let input = useSelector(state=>state.input)
    const dispatch = useDispatch()

    const inputChangeHandler = (event) => {
        dispatch({
            type:"inputChange",
            value:event.target.value
            
        })
    }

    return (
        <Fragment>
            <input type="text" className={classes['input-component']} placeholder={props.placeholder} value={ input } onChange={ inputChangeHandler }/>
        </Fragment>
    )
}


export default Input