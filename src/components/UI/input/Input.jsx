import React from "react";
import css from './Input.module.css'

const Input = (props)=>{
    // const [] = useState(0)

    return (

        <input {...props} className={css.input}/>
    )
}

export default Input;