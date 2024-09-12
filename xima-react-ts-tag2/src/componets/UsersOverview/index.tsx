import { useState, useEffect } from 'react'
import UserItem from './UserItem'

function UsersOverview() {

    const [users, setUsers] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(false)


    useEffect(() => {

        setIsLoading(true)
        fetch('https://jsonplaceholder.typicom/users')
            .then(res => res.json())
            .then(data => {
                setTimeout(() => {
                    setUsers(data)
                    setIsLoading(false)
                }, 2000)

            })
            .catch(err=>{
                console.log(err)
                setUsers([]) 
                setError(true) 
                   
            }).finally(()=>{
                setIsLoading(false)
            })
            

    }, [])

    console.log("users", users)

    const UserListing = users && users?.map((user: { email: string, username: string, id: number }) => {
        return <UserItem key={user.id} {...user} />
    })


    return (
        <div>
            <p style={{display: isLoading ? "block": "none"}}>loading....</p>
            {error ? "":UserListing}
            {error && <h3>error</h3>}
        </div>
    )
}

export default UsersOverview