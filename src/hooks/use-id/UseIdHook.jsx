import React, { useId } from 'react'

const UseIdHook = () => {
    const id = useId();
    const id1 = useId();
    return (
        <>
            <label htmlFor={id}>Enter your name</label>
            <input id={id} type="text" />

            <label htmlFor={id1}>Enter your middle name</label>
            <input id={id1} type="text" />
        </>
    )
}
//use id hook is added to map things with unique id's ....
export default UseIdHook