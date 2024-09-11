
import { NavLink } from 'react-router-dom'

function NavItem({ href, title }:{href: string, title: string} ) {
    return (
        <NavLink 
        className={({ isActive }) =>
            isActive ? "active" : ""
        } to={href}>{title}</NavLink>
    )
}

export default NavItem