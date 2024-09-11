import { Link } from "react-router-dom";

export default function UsersPage(){

    return <div>
        <h2>User List</h2>
        <ul>
            <li><Link to="/users/peter">Peter</Link></li>
            <li><Link to="/users/eric">Eric</Link></li>
        </ul>
    </div>
}