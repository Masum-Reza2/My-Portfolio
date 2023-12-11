/* eslint-disable react/no-unescaped-entities */
const Education = () => {
    return (
        <div className="pb-5">
            <h1 className="btn btn-block btn-sm text-white lg:text-lg px-5 bg-orange-500 hover:bg-orange-500">Education</h1>
            {/* <p className="hidden lg:block py-3 md:py-5 text-justify md:text-center px-5 lg:px-64 text-[#4B5563]">Transitioning from a non-CS background, I've effectively mastered web development in 8 months. As a prospective HSC candidate for 2024, I'm poised to pursue a Bachelor's degree, contemplating a major in either English or Geography. My journey underscores a commitment to diverse learning and the seamless integration of newfound skills.</p> */}

            <div className="mt-3 space-y-2">
                {/* ssc */}
                <div className="flex flex-col md:flex-row p-5 rounded-md shadow shadow-red-900">
                    <div className="md:w-[40%] space-y-3 md:space-y-5 ">
                        <h5 className="font-bold text-lg">Kalenga High School</h5>
                        <p>Student : <span className="ml-3 bg-orange-400 text-white px-2 rounded">Jan 2016 - Feb 2018</span></p>
                    </div>
                    <div className="md:w-[60%] space-y-3 md:space-y-5">
                        <h5 className="font-bold text-lg">Certificate of Secondary School</h5>
                        <p className="text-justify md:text-start">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet dapibus nibh ut faucibus nunc, egestas id amet porttitor. Pulvinar quisque sed amet, nulla nunc. Eleifend sodales posuere fusce tempus etiam et pellentesque. Molestie risus enim neque eget dui.</p>
                        <button className="btn btn-xs btn-success text-white ">see result</button>
                    </div>
                </div>
                <div className="divider"></div>

                {/* hsc */}
                <div className="flex flex-col md:flex-row p-5 rounded-md shadow shadow-red-900">
                    <div className="md:w-[40%] space-y-3 md:space-y-5 ">
                        <h5 className="font-bold text-lg">Moulvibazar Govt. Collage</h5>
                        <p>Student : <span className="ml-3 bg-orange-400 text-white px-2 rounded">Jan 2022 - Apr 2024</span></p>
                    </div>
                    <div className="md:w-[60%] space-y-3 md:space-y-5">
                        <h5 className="font-bold text-lg">Certificate of Higher Secondary</h5>
                        <p className="text-justify md:text-start">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet dapibus nibh ut faucibus nunc, egestas id amet porttitor. Pulvinar quisque sed amet, nulla nunc. Eleifend sodales posuere fusce tempus etiam et pellentesque. Molestie risus enim neque eget dui.</p>
                        <button className="btn btn-xs btn-success text-white ">cooming soon</button>
                    </div>
                </div>
                <div className="divider"></div>

                {/* programming hero */}
                <div className="flex flex-col md:flex-row p-5 rounded-md shadow shadow-red-900">
                    <div className="md:w-[40%] space-y-3 md:space-y-5 ">
                        <h5 className="font-bold text-lg">Programming Hero</h5>
                        <p>Student : <span className="ml-3 bg-orange-400 text-white px-2 rounded">June 2023 - December 2023</span></p>
                    </div>
                    <div className="md:w-[60%] space-y-3 md:space-y-5">
                        <h5 className="font-bold text-lg">Certificate of web training</h5>
                        <p className="text-justify md:text-start">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet dapibus nibh ut faucibus nunc, egestas id amet porttitor. Pulvinar quisque sed amet, nulla nunc. Eleifend sodales posuere fusce tempus etiam et pellentesque. Molestie risus enim neque eget dui.</p>
                        <button className="btn btn-xs btn-success text-white ">see result</button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Education