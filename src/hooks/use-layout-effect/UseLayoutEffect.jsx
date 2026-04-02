import React, { useRef, useState } from 'react'
import { useLayoutEffect } from 'react';

const UseLayoutEffect = () => {

    const [boxWidth,setBoxWidth]=useState(0);
    const boxRef=useRef();

    useLayoutEffect(()=>{
        if(boxRef.current){
            setBoxWidth(boxRef.current.offsetWidth);
        }
    })

  return (
    <div className="">
        <div className=""
            ref={boxRef}
            style={{
                width:"90%",
                height:"100px",
                backgroundColor:"lightblue",
                color:"black"
            }}
        >
            resize me!
        </div>
        <p>the box widht is :{boxWidth}</p>
    </div>
  )
}
//this hook basically tiggers before painnting anything on the screen but its recomnded to use only when there is an absolute need for this else it may slow down the app performance...

export default UseLayoutEffect