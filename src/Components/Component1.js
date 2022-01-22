import {useState, useRef, useReducer} from 'react';

const updateState = (state, action) => {
    switch(action){
        case "INC":
            state = {count : state.count + 1}
            break
        case "DEC":
            state = { count : state.count - 1}
            break
        case "RST":
            state = {count : 0}
            break
        default:
            throw new Error("Error Fount in Switch")
    }
return state;
}
const Component1 = () => {
    const [state, dispatch] = useReducer(updateState , {count : 0});
    return (
        <>
        <h1> {state.count}</h1>
        <button onClick={() => dispatch("INC")}>INCREMENT</button>
        <button onClick={() => dispatch("DEC")}>DECREMENT</button>
        <button onClick={() => dispatch("RST")}>RESET</button>
        </>
    )
}

export default Component1;