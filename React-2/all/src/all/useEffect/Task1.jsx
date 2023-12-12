import React, { useEffect, useState } from 'react'

const Task1 = () => {
    const [val, setval] = useState("");

    useEffect(() => {
        // console.log(val);
        document.title = ` ${val} `
    }, [val]);
    
    const changes = (e) => {
        setval(e.target.value);
    }
    return (
        <>
            <h2>Select Browser</h2>
            <select onChange={changes}>
                <option></option>
                <option>Chrome</option>
                <option>Safari</option>
                <option>Yahoo</option>
                <option>Mozila</option>
            </select>

            <h1>Selected Browser is :- {val} </h1>
        </>
    )
}

export default Task1