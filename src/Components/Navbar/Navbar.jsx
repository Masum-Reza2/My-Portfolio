import { NavLink } from "react-router-dom"

const Navbar = () => {

    // const handleActive = ({ isActive, isPending }) =>
    //     isActive
    //         ? "bg-white shadow bg-indigo-500 text-white"
    //         : isPending
    //             ? "pending"
    //             : ""

    const navLinks = <>
        <li><NavLink to={'/'}>Home</NavLink></li>
        <li><NavLink to={'/skills'}>Skills</NavLink></li>
        <li><NavLink to={'/experience'}>Experience</NavLink></li>
        <li><NavLink to={'/education'}>Education</NavLink></li>
        <li><NavLink to={'/about'}>About-me</NavLink></li>
        <li><NavLink to={'/projects'}>Projects</NavLink></li>
        <li><NavLink to={'/contact'}>Contact-Me</NavLink></li>
    </>

    return (
        <>
            <div className="navbar bg-base-300 shadow-md shadow-sky-950 border border-green-500">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow shadow-green-900 border border-green-500 bg-base-300 rounded-box w-52 space-y-2 z-50">
                            {navLinks}
                        </ul>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 space-x-2">
                        {navLinks}
                    </ul>
                </div>
                <div className="navbar-end">

                </div>
            </div>
        </>
    )
}

export default Navbar