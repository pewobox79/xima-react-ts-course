import {NavLink} from 'react-router-dom'

export default function NavItem({href, title}){

    return <NavLink to={href} >
        <li>{title}</li>
    </NavLink>
}