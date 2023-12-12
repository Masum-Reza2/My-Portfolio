import { Outlet } from "react-router-dom"
import Navbar from "../Components/Navbar/Navbar"
import Footer from "../Components/Footer/Footer"

const Layout = () => {
    return (
        <div className="scroll-smooth transition-all duration-500">
            <Navbar />
            <div className="min-h-[90vh] px-2 md:px-4 pt-20">
                <Outlet />
            </div>
            <Footer />
        </div>
    )
}

export default Layout