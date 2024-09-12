import { useState, useEffect } from 'react'
import UserItem from './UserItem'

function UsersOverview() {

    const [users, setUsers] = useState([])
    const [isLoading, setIsLoading] = useState(false)


    useEffect(() => {

        setIsLoading(true)
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => {
                setTimeout(() => {
                    setUsers(data)
                    setIsLoading(false)
                }, 2000)

            })

    }, [])


    const UserListing = users.map((user: { email: string, username: string, id: number }) => {
        return <UserItem key={user.id} {...user} />
    })


    return (
        <div>
            <p style={{display: isLoading ? "block": "none"}}>loading....</p>
            {UserListing}
        </div>
    )
}

export default UsersOverview