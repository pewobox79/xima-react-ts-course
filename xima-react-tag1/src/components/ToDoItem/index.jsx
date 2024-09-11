import { useState } from "react"
export default function ToDoItem({title}){

    const [done, setDone] = useState(false)
    
    return <div onClick={()=>setDone(!done)} style={{textDecoration: done ? "line-through": "none"}}>{title}
    </div>
}