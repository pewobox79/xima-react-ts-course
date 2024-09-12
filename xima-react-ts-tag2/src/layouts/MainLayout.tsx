import { Outlet } from "react-router-dom";
import Header from "../componets/Header";
import Footer from "../componets/Footer";

export default function MainLayout (){

    return <>

    <Header/>
    <main style={{minHeight: 500}}>
    <Outlet/>
    </main>
   <Footer/>

    
    </>
}