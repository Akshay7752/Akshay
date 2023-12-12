import React from "react";

const Title = () => {
    console.log('Rendering Title');
    return(
        <>
            <h1 className="text-3xl font-bold">
                useCallback Hook
            </h1>
        </>
    )
}

export default React.memo(Title)