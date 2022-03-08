import React from "react";
import classes from './MyButton.module.css'

function MyButton(props) {
    return (
        <button {...props}>{props.children}</button>
    )
}

export default MyButton;