import { Outlet } from "react-router-dom"
import Navbar from "../Components/Navbar/Navbar"

const Layout = () => {
    return (
        <>
            <Navbar />
            <div className="min-h-[90vh]">
                <Outlet />
            </div>
            footer
        </>
    )
}

export default Layout