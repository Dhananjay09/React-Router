import React, {useState, useRef, useReducer, createContext, Component} from 'react';
import Component2 from './Component2'
const Customer = createContext();
const Component1 = () => {
    const [state, setState] = useState("Dhananjay");
    return (
     <Customer.Provider value={state}>
         <Component2/>
     </Customer.Provider>   
    )
}

export {Component1, Customer};