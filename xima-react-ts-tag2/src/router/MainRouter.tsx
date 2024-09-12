import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Homepage from "../pages/Homepage";
import AboutUs from "../pages/AboutUs";
import TypeScript from "../pages/TypeScript";
import Users from "../pages/Users";

export const mainRouter = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<MainLayout/>}>
            <Route index element={<Homepage/>}/>
            <Route path="aboutus" element={<AboutUs/>}/>
            <Route path="typescript" element={<TypeScript/>} />
            <Route path="users">
                <Route index element={<Users/>}/>
            </Route>

        </Route>
    )
)