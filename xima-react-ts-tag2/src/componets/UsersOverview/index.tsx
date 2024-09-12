import UserItem from './UserItem'
import { useFetch } from '../../hooks/useFetch'

function UsersOverview() {


    const { data=[], error = "", isLoading } = useFetch('https://jsonplaceholder.typicode.com/users')

    const UserListing = data && data?.map((user: { email: string, username: string, id: number }) => {
        return <UserItem key={user.id} {...user} />
    })


    return (
        <div>
            <p style={{display: isLoading ? "block": "none"}}>loading....</p>
        {isLoading ? <div>loading...</div>:UserListing}
           {error}
        </div>
    )
}

export default UsersOverview