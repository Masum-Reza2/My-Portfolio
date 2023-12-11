import ContestHub from "../ContestHub/ContestHub"

/* eslint-disable react/no-unescaped-entities */
const Projects = () => {
    return (
        <div className="mt-6">
            <h1 className="btn btn-block btn-sm text-white lg:text-lg px-5 bg-orange-500 hover:bg-orange-500">Projects</h1>
            <p className="font-bold">Some standout projects I've crafted:</p>

            {/* project 1 */}
            <ContestHub />

        </div>
    )
}

export default Projects