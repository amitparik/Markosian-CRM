import React from "react";

function Input(props)
{

    return(
        <>
        <input className={props.className} name={props.name} onChange={props.onChange} placeholder={props.placeholder}/>      
        </>
    )
}

export default Input;