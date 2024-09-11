import { useParams } from "react-router-dom"
import { useState } from "react";

export default function SingleUser(){

    const [change, setChange] = useState(false)
    const {name} = useParams();
    
    function handleChange(){
    
        setChange(!change)
        console.log("change value inner", change)
    }

    console.log("change value outer", change)
    
    return <>
    <h1 style={{color: change ? "red": "yellow"}}>Single user {name}</h1>
    <button onClick={handleChange}>color change</button>
    </>
}