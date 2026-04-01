import React, { createContext, useContext, useState } from 'react'

const GlobalStateContext=createContext(null);

const UseContext = () => {

    const [isToggle, setIsToggle] = useState(false);

    return (
        <GlobalStateContext.Provider value={{isToggle,setIsToggle}}>
        <div className="">
            <h1>parent component</h1>
            <ChildToggle  />
            <ChildDisplay />
        </div>
        </GlobalStateContext.Provider>
    )
}
const ChildToggle = () => {
    const {setIsToggle}=useContext(GlobalStateContext);
    return (
        <div className="">
            <button onClick={() => setIsToggle((prev) => !prev)}>Toggle state</button>
        </div>
    )
}
const ChildDisplay = () => {
    const {isToggle}=useContext(GlobalStateContext);
    return (
        <p>Current State:{isToggle ? "ON" : "OFF"}</p>
    )
}

export default UseContext