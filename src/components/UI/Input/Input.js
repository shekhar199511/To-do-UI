import React from "react";
import { Fragment } from "react";

import classes from './Input.module.css';

const Input = React.forwardRef((props, ref) => {
    return (
        <Fragment>
            <input type="text" className={classes['input-component']} placeholder={props.placeholder} ref={ref}/>
        </Fragment>
    )
})


export default Input