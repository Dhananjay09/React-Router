import {useState, useEffect} from 'react';
const Component1 = () => {
    const [height, setHeight] = useState(window.innerHeight);
    const [width, setWidth] = useState(window.innerWidth);


    useEffect (()=> {
        window.addEventListener('resize', ()=>{
            setHeight(window.innerHeight)
            setWidth(window.innerWidth)
        })    
    }, [])
    return (
        <>
        <h1>Hello {height + " "+width}</h1>
        </>

    )
}

export default Component1;