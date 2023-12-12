import { Link } from 'react-scroll';

const Navbar = () => {

    // const handleActive = ({ isActive, isPending }) =>
    //     isActive
    //         ? "border-b-2"
    //         : isPending
    //             ? "pending"
    //             : ""

    const navLinks = <>
        <li><Link
            activeClass="active"
            to="home"
            spy={true}
            smooth={true}
            offset={-90}
            duration={500}
        >
            Home
        </Link></li>
        <li><Link
            activeClass="active"
            to="skills"
            spy={true}
            smooth={true}
            offset={-90}
            duration={500}
        >
            Skills
        </Link></li>
        <li><Link
            activeClass="active"
            to="education"
            spy={true}
            smooth={true}
            offset={-90}
            duration={500}
        >
            Education
        </Link></li>
        <li><Link
            activeClass="active"
            to="projects"
            spy={true}
            smooth={true}
            offset={-90}
            duration={500}
        >
            Projects
        </Link></li>
        <li><Link
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            offset={-90}
            duration={500}
        >
            Contact-Me
        </Link></li>
    </>

    return (
        <>
            <div className="navbar bg-orange-400 lg:text-white fixed z-50 max-w-7xl mx-auto">
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