import React from "react";
import css from './Input.module.css'

const Input = ({innerRef, ...props})=>{
    // const [] = useState(0)

    return (

        <input {...props} ref={innerRef} className={css.input}/>
    )
}

export default Input;