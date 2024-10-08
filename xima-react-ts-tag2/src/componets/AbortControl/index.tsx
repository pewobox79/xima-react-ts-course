import { useState, useEffect } from 'react'

function AbortControl() {


    const [userNumber, setUserNumber] = useState("")
    const [user, setUser] = useState({ name: "", username: "", email: "" })


    useEffect(() => {

        const controller = new AbortController();
        const signal = controller.signal

        fetch(`https://jsonplaceholder.typicode.com/users/${userNumber}`, {signal: signal})
            .then((response) => response.json())
            .then((json) => setUser(json));

            return ()=>{
                controller.abort()
            }
    }, [userNumber])
    
    return (
        <div><h2>AbortControl Exercise</h2>
            <div>
                <p>{user.name}</p>
                <p>{user.email}</p>
                <p>{user.username}</p>
            </div>

            <div onClick={() => setUserNumber("1")}>User 1</div>
            <div onClick={() => setUserNumber("2")}>User 2</div>
            <div onClick={() => setUserNumber("3")}>User 3</div>

        </div>
    )
}

export default AbortControl