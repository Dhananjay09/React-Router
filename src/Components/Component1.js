import {useState, useEffect} from 'react';
const Component1 = () => {
    const [height, setHeight] = useState(0);
    useEffect (()=> {
    document.title = `${height}`
    },[])
    return (
        <>
        <input onChange={(event)=> setHeight(event.target.value)} placeholder="Enter the input"></input>
        <h1>Hello {height }</h1>
        </>

    )
}

export default Component1;