import React, {useRef} from 'react'

function RefExercise() {

    const nameRef = useRef<HTMLInputElement>(null)
    const lastNameRef=useRef<HTMLInputElement>(null)

    function handleSubmit(e:React.FormEvent<HTMLFormElement>){
        e.preventDefault()

        const userData ={
            name: nameRef.current?.value,
            lastname: lastNameRef.current?.value
        } 

        console.log("userdata to submit", userData)

        
    }
    return (
        <div><h2>RefExercise</h2>

            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name</label><br/>
                <input id="name" type="text" name="name" ref={nameRef}/><br/>
                <label htmlFor='lastname'>LastName</label><br/>
                <input id="lastname" type="text" name="lastname" ref={lastNameRef}/><br/>
                <button type="submit">save</button>
            </form>

            <hr />
        </div>
    )
}

export default RefExercise