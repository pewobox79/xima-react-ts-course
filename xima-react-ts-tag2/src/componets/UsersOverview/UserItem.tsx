import Button from "../globals/Button"
import { useState } from "react"

type UserItemType = {
    email: string,
    username: string,
    website: string,
    phone: string,
    address: {
        city: string
    }

}

function UserItem(props: UserItemType) {
    console.log("useritem", props)

    const [more, setMore] = useState(false)

    return (
        <div style={{ border: "1px solid black", borderRadius: 10, margin: 10, padding: 10 }}>
            <h3>{props.username}</h3>
            <p>{props.email}</p>
            <Button action={() => setMore(!more)} text="More" />

            {more &&
                <div id="moreInfo">
                    <p>Website: {props.website}</p>
                    <p>Phone: {props.phone}</p>
                    <p>City: {props.address.city}</p>
                </div>}
        </div>
    )
}

export default UserItem