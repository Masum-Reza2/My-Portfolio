/* eslint-disable react/no-unescaped-entities */
// import banner from '../../assets/images/Masum Reza.png'
import profile from '../../assets/profile-pic (5).png'
import { Typewriter } from 'react-simple-typewriter'
import { CiLocationOn } from "react-icons/ci";
import { FaCircle } from "react-icons/fa";




const Banner = () => {
    const message = [
        'Passionate MERN Stack Developer.',
        'Front-end web app developer.',
        'Crafting seamless web experiences.',
        'Innovative solutions with JavaScript magic.',
    ];

    const applyOnBoth = <>
        <div className='text-start mt-3'>
            <p className='flex items-center gap-3'><CiLocationOn className='text-green-500 text-lg font-bold' />Sylhet, Bangladesh</p>
            <p className='flex items-center gap-3 ml-1'><FaCircle className='text-green-500 text-xs' />Available for new projects</p>
            <div className='text-center my-2'>
                <button className='py-3 btn bg-orange-500 hover:bg-orange-300 text-white hover:text-black'>Download Resume</button>
            </div>
        </div>
    </>

    return (
        <>
            <div className="md:grid grid-cols-12 py-3 md:py-5 space-y-2 md:space-y-0">
                <div className="md:col-span-8 text-center md:flex flex-col items-center justify-center">
                    <h1 className='text-2xl md:text-4xl font-bold min-h-[25vh]'>Hi i’m <span className='text-orange-500'>Masum Reza.</span> <br /> <span className='text-green-700'>
                        <Typewriter words={message} loop={false} />
                    </span> </h1>

                    <div className='hidden lg:block'>
                        <p>I'm a MERN stack developer (MongoDB, Express.js, React.js & Node.js) with a focus on creating (and occasionally designing) exceptional digital experiences that are fast, accessible, visually appealing, and responsive. Even though I have been creating web applications for over 8 months, I still love it as if it was something new</p>
                        {applyOnBoth}
                    </div>
                </div>
                <div className="md:col-span-4">
                    <img src={profile} alt="" />
                </div>
            </div>

            <div className='lg:hidden'>
                <p className='text-justify'>I'm a MERN stack developer (MongoDB, Express.js, React.js & Node.js) with a focus on creating (and occasionally designing) exceptional digital experiences that are fast, accessible, visually appealing, and responsive. Even though I have been creating web applications for over 8 months, I still love it as if it was something new.</p>
                {applyOnBoth}
            </div>
        </>
    )
}

export default Banner