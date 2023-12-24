/* eslint-disable react/no-unescaped-entities */
const Education = () => {
  return (
    <div id="education" className="pb-5">
      <h1 className="btn btn-block btn-sm text-white lg:text-lg px-5 bg-orange-500 hover:bg-orange-500">
        Education
      </h1>

      <div className="mt-3 space-y-2">
        {/* ssc */}
        <div
          className="flex flex-col md:flex-row p-5 rounded-md shadow shadow-orange-950 "
          data-aos="fade-right"
        >
          <div className="md:w-[40%] space-y-3 md:space-y-5 ">
            <h5 className="font-bold text-lg">Kalenga High School</h5>
            <p>
              Student :{" "}
              <span className="ml-3 bg-orange-400 text-white px-2 rounded">
                Jan 2016 - Feb 2018
              </span>
            </p>
          </div>
          <div className="md:w-[60%] space-y-3 md:space-y-5">
            <h5 className="font-bold text-lg">
              Certificate of Secondary School
            </h5>
            <p className="text-justify md:text-start">
              In 2018, I aced my exams with a GPA of 5 in humanities, earning a
              scholarship and topping my district. I loved playing sports back
              then. Now, as a web developer, I use my MERN skills to create
              amazing things online. It's a journey from academic success to
              tech innovation, fueled by a passion for continuous learning.
            </p>
            <a
              className="btn btn-xs btn-success text-white "
              href="https://drive.google.com/file/d/1K3XDzwBiLbmtUIdE9vq_gUbLIcGj3ulV/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button>see result</button>
            </a>
          </div>
        </div>
        <div className="divider"></div>

        {/* hsc */}
        <div
          className="flex flex-col md:flex-row p-5 rounded-md shadow shadow-orange-950"
          data-aos="fade-right"
        >
          <div className="md:w-[40%] space-y-3 md:space-y-5 ">
            <h5 className="font-bold text-lg">Moulvibazar Govt. Collage</h5>
            <p>
              Student :{" "}
              <span className="ml-3 bg-orange-400 text-white px-2 rounded">
                Jan 2022 - Apr 2024
              </span>
            </p>
          </div>
          <div className="md:w-[60%] space-y-3 md:space-y-5">
            <h5 className="font-bold text-lg">
              Certificate of Higher Secondary
            </h5>
            <p className="text-justify md:text-start">
              Due to financial and family issues, I faced a 4-year gap in my
              education. Now, as an HSC candidate participating in exams in
              2024, I'm optimistic about achieving excellent results.
              Concurrently, I'm honing my skills in MERN stack web app
              development. Post-HSC, I aim to pursue an honors degree,
              contemplating subjects like English or Geography.
            </p>
            <button className="btn btn-xs btn-success text-white ">
              cooming soon
            </button>
          </div>
        </div>
        <div className="divider"></div>

        {/* programming hero */}
        <div
          className="flex flex-col md:flex-row p-5 rounded-md shadow shadow-orange-950 "
          data-aos="fade-right"
        >
          <div className="md:w-[40%] space-y-3 md:space-y-5 ">
            <h5 className="font-bold text-lg">Programming Hero</h5>
            <p>
              Student :{" "}
              <span className="ml-3 bg-orange-400 text-white px-2 rounded">
                June 2023 - December 2023
              </span>
            </p>
          </div>
          <div className="md:w-[60%] space-y-3 md:space-y-5">
            <h5 className="font-bold text-lg">Certificate of web training</h5>
            <p className="text-justify md:text-start">
              It's been a rewarding journey at Programming Hero. Over 6 months
              of hard work, I delved into front-end MERN stack web app
              development. In this dynamic field, my daily curiosity fuels
              continuous learning. I achieved excellent results in the course,
              gaining valuable insights and skills. My commitment is to seek and
              explore new technologies.
            </p>
            <a
              className="btn btn-xs btn-success text-white "
              href="https://drive.google.com/file/d/1CHc68vG2TnNJv2GaKamtqsVxUOZ_WxRk/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button>see result</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
