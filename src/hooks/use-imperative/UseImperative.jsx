import React, { forwardRef, useImperativeHandle, useRef } from 'react'

const UseImperative = () => {

    const inputRef=useRef();

  return (
    <>
        <CustomInput ref={inputRef} />
        <button onClick={()=>inputRef.current.focusInput()}>Focus Input</button>
        <button onClick={()=>inputRef.current.clearInput()}>Clear Input</button>
    </>
  )
}

//child component....
const CustomInput=forwardRef((props,ref)=>{
    const inputRef=useRef();

    useImperativeHandle(ref,()=>({
        focusInput:()=>{
            inputRef.current.focus();
        },
        clearInput:()=>{
            inputRef.current.value="";
        }
    }))
    return(
        <input ref={inputRef} type='text' placeholder='type something'/>
    )
})
//this hook basically works like a encapsulation dosent exposes all the data that we pass in the child component but just whats essential..
export default UseImperative