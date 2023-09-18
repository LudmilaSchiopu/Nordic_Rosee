import { Link, Outlet } from "react-router-dom";
import Navbar from "../Navbar/navbar";
import Footer from "../Footer/footer";

const Layout = () => {
    return (
        <div>
            <Navbar/>

            <Outlet/>

            <Footer/>
        </div>
        
    )
}

export default Layout;