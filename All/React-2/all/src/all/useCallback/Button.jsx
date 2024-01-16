import React from "react";

const Button = ({handleClick, children}) => {
    console.log(`Rendering button - `, children);
    return(
        <>
            <button className="button" onClick={handleClick}>
                {children}
            </button>
        </>
    )
}

export default React.memo(Button)