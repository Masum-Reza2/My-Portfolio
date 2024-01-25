/* eslint-disable react/no-unescaped-entities */
import { FaEye } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import Slider from "../Slider/Slider";

import slider1 from '../../assets/CommerceBook/Screenshot 2024-01-25 190342.png'
import slider2 from '../../assets/CommerceBook/Screenshot 2024-01-25 201851.png'
import slider3 from '../../assets/CommerceBook/Screenshot 2024-01-25 201921.png'
import slider4 from '../../assets/CommerceBook/Screenshot 2024-01-25 201946.png'

const evntData = [
    { img: slider1 },
    { img: slider2 },
    { img: slider3 },
    { img: slider4 },
]

const CommerceBook = () => {
    return (
        <>
            <div data-aos="fade-right" className="flex flex-col lg:flex-row-reverse lg:items-center rounded-md shadow-md shadow-orange-950">

                <div className="flex-1 h-full">
                    <Slider data={evntData} />
                </div>

                <div className="flex-1 flex flex-col items-center justify-center px-3 gap-4 py-5">
                    <h5 className="font-bold text-2xl md:text-4xl">Commerce-Book</h5>
                    <p>The Social Media E-Commerce Platform features secured JWT authentication, fostering a dynamic community through interactive product engagement. Seamless transactions via Stripe, distinct user roles, and user-centric purchasing with transparent tracking. Seller onboarding involves admin approval and a nominal fee. Admin manages payments, ensures order fulfillment, and sends timely delivery notifications. A feedback mechanism encourages improvement, supported by real-time admin notifications for swift issue resolution.</p>

                    <a className="btn-block" href="https://commerce-book.web.app" target="_blank" rel="noopener noreferrer">
                        <button className="btn btn-block btn-sm bg-orange-500 hover:bg-orange-300 text-white hover:text-black"><FaEye />Link to live site</button></a>

                    <a className="btn-block" href="https://github.com/Masum-Reza2/commerce-Book" target="_blank" rel="noopener noreferrer">
                        <button className="btn btn-block btn-sm bg-orange-500 hover:bg-orange-300 text-white hover:text-black"><FaGithub />Link to Github(Client)</button>
                    </a>
                    <a className="btn-block" href="https://github.com/Masum-Reza2/commerce-Book-Backend" target="_blank" rel="noopener noreferrer">
                        <button className="btn btn-block btn-sm bg-orange-500 hover:bg-orange-300 text-white hover:text-black"><FaGithub />Link to Github(Server)</button>
                    </a>
                </div>
            </div>
        </>
    )
}

export default CommerceBook