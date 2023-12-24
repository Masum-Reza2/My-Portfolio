import { FaEye } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import Slider from "../Slider/Slider";

import slider1 from '../../assets/taskmanagerImg/Screenshot 2023-12-24 150054.png'
import slider2 from '../../assets/taskmanagerImg/Screenshot 2023-12-24 150148.png'
import slider3 from '../../assets/taskmanagerImg/Screenshot 2023-12-24 150218.png'
import slider4 from '../../assets/taskmanagerImg/Screenshot 2023-12-24 150257.png'
import slider5 from '../../assets/taskmanagerImg/Screenshot 2023-12-24 150328.png'

const taskData = [
    { img: slider1 },
    { img: slider2 },
    { img: slider3 },
    { img: slider4 },
    { img: slider5 },
]

const TaskManager = () => {
    return (
        <>
            <div data-aos="fade-right" className="flex flex-col lg:flex-row lg:items-center rounded-md shadow-md shadow-orange-950">

                <div className="flex-1 h-full">
                    <Slider data={taskData} />
                </div>

                <div className="flex-1 flex flex-col items-center justify-center px-3 gap-4 py-5">
                    <h5 className="font-bold text-2xl md:text-4xl">Task Manager</h5>
                    <p>Exciting news! I've made a Task Manager Web App that helps you keep track of your tasks easily. With my app, you can make, see, change, or remove tasks whenever you want. Plus, we've added features to make sure you don't accidentally delete anything important. Whether you're at work, home, or anywhere else, you can use it. Check it out and stay organized! Don't worry where you are! Just login and see each and every task you created. Have fun.</p>

                    <a className="btn-block" href="https://task-manager-ce08b.web.app" target="_blank" rel="noopener noreferrer">
                        <button className="btn btn-block btn-sm bg-orange-500 hover:bg-orange-300 text-white hover:text-black"><FaEye />Link to live site</button></a>

                    <a className="btn-block" href="https://github.com/Masum-Reza2/todo-client" target="_blank" rel="noopener noreferrer">
                        <button className="btn btn-block btn-sm bg-orange-500 hover:bg-orange-300 text-white hover:text-black"><FaGithub />Link to Github (Client)</button>
                    </a>

                    <a className="btn-block" href="https://github.com/Masum-Reza2/todo-server" target="_blank" rel="noopener noreferrer">
                        <button className="btn btn-block btn-sm bg-orange-500 hover:bg-orange-300 text-white hover:text-black"><FaGithub />Link to Github (Server)</button></a>
                </div>
            </div>
        </>
    )
}

export default TaskManager