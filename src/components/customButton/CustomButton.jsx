import React from "react";
import './customButton.css'

export const CustomButton = ({text, color, ...props}) => {
    return(
        <div>
            <button className={color} {...props}>{text}</button>
        </div>
    )
}