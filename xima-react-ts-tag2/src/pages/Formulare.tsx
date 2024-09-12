import React, {useState} from 'react'
import RefExercise from '../componets/RefExercise'


const INIT_VALUES ={
    name: "",
    lastname:""
}

export default function Formulare() {

    const [user, setUser] = useState(INIT_VALUES)

    function handleChange(e:{target:{name:string, value: string}}) {
        setUser({...user, [e.target.name]: e.target.value})
    
    }

    function handleSend(e:React.SyntheticEvent) {
        e.preventDefault()
        console.log("send data", user)
    }

    

    return (
        <div>
            <h1>formulare</h1>


            <RefExercise/>

            <h2>OnChange Exercise</h2>
        <form onSubmit={handleSend}>
            <input
                type="text"
                placeholder="name"
                name="name"
                value={user.name}
                onChange={handleChange}
            />
            <input
                type="text"
                placeholder="lastname"
                name="lastname"
                value={user.lastname}
                onChange={handleChange}
            /><br />
            <button type="submit">Send</button>
            </form>
        </div>
    )
}
