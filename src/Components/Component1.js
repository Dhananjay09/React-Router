import React, {useState, useRef, useReducer} from 'react';

const Fetch = (props) => {
    return <>
    {
    React.Children.map(props.children, (child , index) =>{
        if (index===0)
            return
        return child;
    })
    }

    <h1>{React.Children.count(props.children)}</h1>
    </>
}

const Component1 = () => {
    // const [state, dispatch] = useReducer(updateState , {count : 0});
    return (
        <Fetch>
           <h1>Dhananjay Singh</h1>
           <p>Ajay Singh</p>
        </Fetch>
    )
}

export default Component1;