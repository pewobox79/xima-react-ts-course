import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'
import Homepage from '../pages/Homepage'
import MainLayout from '../layouts/MainLayout'
import AboutUs from '../pages/AboutUs';
import { routerData } from '../data/routerData';
import UsersPage from '../pages/UsersPage';
import SingleUser from '../pages/SingleUser';
import ToDo from '../pages/ToDo'



const NavItems = routerData.map((item) => {

    let component;
    switch (item.href) {
        case "/": component = <Homepage />
            break;
        case "/aboutus":
            component = <AboutUs />
            break;
        case "/todo":
            component = <ToDo />
            break;
            
        default: component = <div>no comp</div>
    }

    /* return item.href === "/" ? <Route key={item.id} index element={component} /> : <Route key={item.id} path={item.href} element={component} /> */

    return <Route 
    key={item.id} 
    index={item.href === "/"}
    path={item.href}
    element={component} />

})

export const mainRouter = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<MainLayout />}>
            {NavItems}
            <Route path="todo" element={<ToDo/>}/>
            <Route path="users">
                <Route index element={<UsersPage/>}/>
                <Route path=":name" element={<SingleUser/>}/>
            </Route>
            <Route path="*" element={<h1>404 - Page not found</h1>}/>
        </Route>

    )
)