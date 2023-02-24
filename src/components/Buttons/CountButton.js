import React, { useState } from "react";

// practice React Hooks (useState)
const CountButton = (props) => {
    console.log(props)
    const [currentCount, setCurrentCount] = useState(0);

    const handleClick = () => {
        //  setCurrentCount(currentCount + 1) 
        setCurrentCount(currentCount + props.incrementBy) //menggunakan props
    }

    //internal styling css
    const divStyle = {
        color: "blue",
        border: "1px solid black",
        borderRadius: "5px",
    }
    return (
        <div style={divStyle}>
            <button 
                style={{backgroundColor: "blue", color:"white"}} //inline style
                onClick={handleClick}
            > +{props.incrementBy}
            </button>
            <div>{currentCount}</div>
        </div>
    )
}

export default CountButton;