import {useState, useRef} from 'react';
const Component1 = () => {
    const [height, setHeight] = useState(0);
    const currEl = useRef(null)
    const onTextClicked = () =>{
        currEl.current.focus();
    }
    return (
        <>
        <input ref={currEl} onChange={(event)=> setHeight(event.target.value)} ></input>
        <button onClick={onTextClicked}>Hello {height }</button>
        </>
    )
}

export default Component1;