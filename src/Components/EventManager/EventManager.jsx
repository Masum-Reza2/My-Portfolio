/* eslint-disable react/no-unescaped-entities */
import { FaEye } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import Slider from "../Slider/Slider";

import slider1 from '../../assets/eventImg/slider1.png'
import slider2 from '../../assets/eventImg/slider2.png'
import slider3 from '../../assets/eventImg/slider3.png'
import slider4 from '../../assets/eventImg/slider4.png'
import slider5 from '../../assets/eventImg/slider5.png'
import slider6 from '../../assets/eventImg/slider6.png'

const evntData = [
    { img: slider1 },
    { img: slider2 },
    { img: slider3 },
    { img: slider4 },
    { img: slider5 },
    { img: slider6 },
]

const EventManager = () => {
    return (
        <>
            <div className="flex flex-col lg:flex-row lg:items-center rounded-md shadow-md shadow-orange-900">

                <div className="flex-1 h-full">
                    <Slider data={evntData} />
                </div>

                <div className="flex-1 flex flex-col items-center justify-center px-3 gap-4 py-5">
                    <h5 className="font-bold text-2xl md:text-4xl">Alpha-event-manager</h5>
                    <p>There is a nice authentication system, User can create account in this website.Without login user can look after the home page and beauty of the site.To deep dive into the website user have to log in first, else user will be redirected to the login page.While login and registration if user give invalid information then the system will catch him/her and give a sweet error.There are some private routes that prevent unauthenticated users from loitering.Please visit and explore more functionality.</p>

                    <a className="btn-block" href="https://alpha-event-manager.web.app" target="_blank" rel="noopener noreferrer">
                        <button className="btn btn-block btn-sm bg-orange-500 hover:bg-orange-300 text-white hover:text-black"><FaEye />Link to live site</button></a>

                    <a className="btn-block" href="https://github.com/Masum-Reza2/Alpha-Event-Manager" target="_blank" rel="noopener noreferrer">
                        <button className="btn btn-block btn-sm bg-orange-500 hover:bg-orange-300 text-white hover:text-black"><FaGithub />Link to Github</button>
                    </a>
                </div>
            </div>
        </>
    )
}

export default EventManager