
import { createContext, useContext } from "react";
import { Customer } from "./Component1";

const Component2 = (props) => {
    const value = useContext(Customer);
    return <>
    {value}
    </>
}
export default Component2;