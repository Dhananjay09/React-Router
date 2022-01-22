import { useState, useEffect } from "react";
const useMouseMove = () =>{
    const [x, setX] = useState(0)
    const [y, setY] = useState(0)

    const handler = (event) =>{
        setX(event.x);
        setY(event.y);
    }

    useEffect(()=>{
        window.addEventListener("mousemove", handler);
        return ()=>{
            window.removeEventListener("mousemove", handler);
        }
    })
    return [x,y];
}
export default useMouseMove;