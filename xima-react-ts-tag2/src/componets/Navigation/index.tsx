import { routerData } from '../../utils/routerData'
import NavItem from './components/NavItem'

function Navigation() {

    const NavList = routerData.map((item)=>{

        return <NavItem key={item.id} {...item}/>
    })
  return (
      <nav>
        {NavList}
        </nav>
  )
}

export default Navigation