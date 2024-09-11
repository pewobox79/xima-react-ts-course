import { routerData } from "../../data/routerData"
import NavItem from "./components/NavItem"

export default function Header() {

    const NavItems = routerData.map((item) => {
        return <NavItem
            key={item.id}
            href={item.href}
            title={item.title}
        />
    })

    console.log("navitems", NavItems)
    return <header>
        <nav>
            <ul>
                {NavItems}
            </ul>
        </nav>
    </header>
}