import React, {useState, useRef, useReducer} from 'react';

const RadioButton = (props) => {
    return (
        <>
        <h1>
        {props.children} <input  name ={props.name} type="radio"/>
        </h1>
        </>
    )
}

const RadioGroup = (props) => {
    return (
        <>
        {
        React.Children.map(props.children, (child) =>{
            return React.cloneElement(child, {name : props.name})
        })
        
        }
        </>
    )
}

const Component1 = () => {
    // const [state, dispatch] = useReducer(updateState , {count : 0});
    return (
        <RadioGroup name="group1">
            <RadioButton>
            Level 1 
            </RadioButton>
            <RadioButton>
            Level 2
            </RadioButton>
            <RadioButton>
            Level 3 
            </RadioButton>
        </RadioGroup>
    )
}

export default Component1;