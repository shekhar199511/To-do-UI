import React from "react";

import styled from "styled-components";

const InputRef = React.forwardRef(({ className }, ref)=>{
    return(
        <input type="text" ref={ref} className={className}/>
    )
})

const Input = styled(InputRef).attrs(props => ({placeholder:props.placeholder}))`
    
        height: 3em;
        width: 70%;
        border-radius: 5px;
        background-color: whitesmoke;
        border: none;
    

    &:focus{
        border: 2px solid blue;
    }
`
export default Input