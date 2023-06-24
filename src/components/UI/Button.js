import classes from "./Button.module.css";
import React, {useState} from "react";

const Button = ()=>{
    const [count, setCount] = useState(0)
    const plus = ()=>{
        setCount(count +1)
    }
    const minus = ()=>{
        setCount(count-1)
    }
    const reset = ()=>{
        setCount(0)
    }
    return(
        <div className={classes.buttons}>
            <button onClick={plus}>+</button>
            <span>{count}</span>
            <button onClick={minus}>-</button>
            <button onClick={reset}>clear</button>
        </div>
    )
}
export default Button
