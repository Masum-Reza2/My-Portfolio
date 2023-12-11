// import banner from '../../assets/images/Masum Reza.png'
import profile from '../../assets/profile-pic (5).png'
import { Typewriter } from 'react-simple-typewriter'


const Banner = () => {
    const message = [
        'Passionate MERN Stack Developer.',
        'Front-end web app developer.',
        'Crafting seamless web experiences.',
        'Innovative solutions with JavaScript magic.',
    ];
    return (
        <div className="md:grid grid-cols-12 py-3 md:py-5 space-y-2 md:space-y-0">
            <div className="md:col-span-8 text-center md:flex flex-col items-center justify-center">
                <h1 className='text-2xl md:text-4xl font-bold min-h-[25vh]'>Hi i’m <span className='text-orange-500'>Masum Reza.</span> <br /> <span className='text-green-700'>
                    <Typewriter words={message} loop={false} />
                </span> </h1>
            </div>
            <div className="md:col-span-4">
                <img src={profile} alt="" />
            </div>
        </div>
    )
}

export default Banner