import { Outlet } from "react-router-dom"
import Navbar from "../Components/Navbar/Navbar"

const Layout = () => {
    return (
        <>
            <Navbar />
            <div className="min-h-[90vh] px-2 md:px-4">
                <Outlet />
            </div>

        </>
    )
}

export default Layout