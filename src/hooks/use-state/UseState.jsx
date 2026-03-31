import React, { useState } from 'react'

const UseState = () => {
    const [count,setCount]=useState(0);

    const increaseCount=()=>{
        setCount((prev)=>prev+1)
    }

  return (
    <div className="">
        <p>Count:{count}</p>
        <button onClick={increaseCount}>Increase count</button>
    </div>
  )
}

export default UseState