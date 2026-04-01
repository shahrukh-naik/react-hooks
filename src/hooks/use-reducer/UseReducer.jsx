import React, { useReducer, useState } from 'react'

const reducer = (state, action) => {
    switch (action.type) {
        case 'incr':
            return { count: state.count + 1 };
        case 'dcr':
            return { count: state.count > 0 ? state.count - 1 : 0 };
        case 'mul':
            return { count: state.count * 2 }
    }
}
const UseReducer = () => {
    //right side is the default value for reducer variables  and the first argument is the reducer function...
    const [state, dispatch] = useReducer(reducer, { count: 0 })
    return (
        <div className="">
            <p>count:{state.count}</p>
            <button onClick={() => (dispatch({ type: 'incr' }))}>+</button>
            <button onClick={() => (dispatch({ type: 'dcr' }))}>-</button>
            <button onClick={() => (dispatch({ type: 'mul' }))}>*</button>
        </div>
    )
}

export default UseReducer