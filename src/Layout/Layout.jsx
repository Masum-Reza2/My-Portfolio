import { Outlet, useNavigation } from "react-router-dom"
import Navbar from "../Components/Navbar/Navbar"
import Footer from "../Components/Footer/Footer"
import Spinner from "../Components/Projects/Spinner";

const Layout = () => {
    const navigation = useNavigation();
    return (
        <div className="scroll-smooth transition-all duration-500">
            <Navbar />
            <div className="min-h-[90vh] px-2 md:px-4 pt-20">
                {
                    navigation?.state === "loading" ?
                        <Spinner />
                        :
                        <Outlet />
                }
            </div>
            <Footer />
        </div>
    )
}

export default Layout