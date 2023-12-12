import { Outlet } from "react-router-dom"
import Navbar from "../Components/Navbar/Navbar"
import Footer from "../Components/Footer/Footer"

const Layout = () => {
    return (
        <>
            <Navbar />
            <div className="min-h-[90vh] px-2 md:px-4">
                <Outlet />
            </div>
            <Footer />
        </>
    )
}

export default Layout