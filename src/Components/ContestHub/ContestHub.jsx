import { FaEye } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import Slider from "../Slider/Slider";

import slider1 from '../../assets/contestHubImg/slider1.png'
import slider2 from '../../assets/contestHubImg/slider2.png'
import slider3 from '../../assets/contestHubImg/slider3.png'
import slider4 from '../../assets/contestHubImg/slider4.png'
import slider5 from '../../assets/contestHubImg/slider5.png'
import slider6 from '../../assets/contestHubImg/slider6.png'
import slider7 from '../../assets/contestHubImg/slider7.png'

const contestData = [
    { img: slider1 },
    { img: slider2 },
    { img: slider3 },
    { img: slider4 },
    { img: slider5 },
    { img: slider6 },
    { img: slider7 },
]

const ContestHub = () => {
    return (
        <>
            <div className="flex flex-col lg:flex-row lg:items-center rounded-md shadow-md shadow-orange-900">

                <div className="flex-1 h-full">
                    <Slider data={contestData} />
                </div>

                <div className="flex-1 flex flex-col items-center justify-center px-3 gap-4 py-5">
                    <h5 className="font-bold text-2xl md:text-4xl">Contest Hub</h5>
                    <p>Distributed the power into 3 categories(user, creator and admin).The Creator can add, update and delete any contest till the admin approves, but once the Admin approve the contest, then the creator can't able to apply any CRUD operation.The boss, the Admin can delete, update and toggle any user role at any time.Creator can declere the winner if he forget to declere the system will automatically set a winner from the backend.The contest which created by a creator will never display to user untill the Admin approves it.For one contest only one can be winner.</p>

                    <a className="btn-block" href="https://contesthub-5558e.web.app" target="_blank" rel="noopener noreferrer">
                        <button className="btn btn-block btn-sm bg-orange-500 hover:bg-orange-300 text-white hover:text-black"><FaEye />Link to live site</button></a>

                    <a className="btn-block" href="https://github.com/Masum-Reza2/ContestHub-client-SIde" target="_blank" rel="noopener noreferrer">
                        <button className="btn btn-block btn-sm bg-orange-500 hover:bg-orange-300 text-white hover:text-black"><FaGithub />Link to Github (Client)</button>
                    </a>

                    <a className="btn-block" href="https://github.com/Masum-Reza2/Contest-Hub-Server-Side" target="_blank" rel="noopener noreferrer">
                        <button className="btn btn-block btn-sm bg-orange-500 hover:bg-orange-300 text-white hover:text-black"><FaGithub />Link to Github (Server)</button></a>
                </div>
            </div>
        </>
    )
}

export default ContestHub