import React, { useEffect, useRef, useState } from 'react'

const UseReference = () => {

    // const inputRef=useRef();

    // const log=()=>{
    //     console.log(inputRef.current.value);
    //     // inputRef.current.value='pedro'
    // }
    const [count,setCount]=useState(0);
    const prevCount=useRef(0);
   useEffect(()=>{
    prevCount.current=count
   },[count])
  return (
    <>
    {/* <input type="text" name="" id="" ref={inputRef} />
    <button>console log</button> */}
    <p>count:{count}</p>
    <p>prev count:{prevCount.current}</p>
    <button onClick={()=>setCount((prev)=>prev+1)}>incriment</button>
    </>
  )

  //i belive this is similar to get element by id in js which we have we can use it to get the current value from this hook....
  //but there is also one good thing in this even when the value changes it dosent re renders...
}

export default UseReference