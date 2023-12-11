import { FaEye } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import Slider from "../Slider/Slider";

import slider1 from '../../assets/touchLajawabImg/slider1.png'
import slider2 from '../../assets/touchLajawabImg/slider2.png'
import slider3 from '../../assets/touchLajawabImg/slider3.png'
import slider4 from '../../assets/touchLajawabImg/slider4.png'
import slider5 from '../../assets/touchLajawabImg/slider5.png'
import slider6 from '../../assets/touchLajawabImg/slider6.png'
import slider7 from '../../assets/touchLajawabImg/slider7.png'

const lajawabData = [
    { img: slider1 },
    { img: slider2 },
    { img: slider3 },
    { img: slider4 },
    { img: slider5 },
    { img: slider6 },
    { img: slider7 },
]

const TouchLajawab = () => {
    return (
        <>
            <div className="flex flex-col lg:flex-row-reverse lg:items-center rounded-md shadow-md shadow-orange-900">

                <div className="flex-1 h-full">
                    <Slider data={lajawabData} />
                </div>

                <div className="flex-1 flex flex-col items-center justify-center px-3 gap-4 py-5">
                    <h5 className="font-bold text-2xl md:text-4xl">Touch-Lajawab</h5>
                    <p>User can apply CRUD operation on the UI, that means user can Create, Read, Update and Delete a food product.A secure api system integreted by JWT, That means one can't modify or delete another's added food products.A multiple searching functionality added, user can search their required foods by food name, category or owner name.Dark mode facility enabled, it will provide releaf to user's eye.Animation on scroll added, and giving a nice view on the UI.Please visit and explore more functionality.</p>

                    <a className="btn-block" href="https://touch-lajawab.web.app" target="_blank" rel="noopener noreferrer">
                        <button className="btn btn-block btn-sm bg-orange-500 hover:bg-orange-300 text-white hover:text-black"><FaEye />Link to live site</button></a>

                    <a className="btn-block" href="https://github.com/Porgramming-Hero-web-course/b8a11-client-side-Masum-Reza2" target="_blank" rel="noopener noreferrer">
                        <button className="btn btn-block btn-sm bg-orange-500 hover:bg-orange-300 text-white hover:text-black"><FaGithub />Link to Github (Client)</button>
                    </a>

                    <a className="btn-block" href="https://github.com/Porgramming-Hero-web-course/b8a11-server-side-Masum-Reza2" target="_blank" rel="noopener noreferrer">
                        <button className="btn btn-block btn-sm bg-orange-500 hover:bg-orange-300 text-white hover:text-black"><FaGithub />Link to Github (Server)</button></a>
                </div>
            </div>
        </>
    )
}

export default TouchLajawab