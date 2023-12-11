import ContestHub from "../ContestHub/ContestHub"
import TouchLajawab from "../TouchLajawab/TouchLajawab"

/* eslint-disable react/no-unescaped-entities */
const Projects = () => {
    return (
        <div className="mt-6">
            <h1 className="btn btn-block btn-sm text-white lg:text-lg px-5 bg-orange-500 hover:bg-orange-500">Projects</h1>
            <p className="font-bold py-3">Some standout projects I've crafted:</p>

            {/* projects */}
            <div className="space-y-6 md:space-y-10">
                <ContestHub />
                <TouchLajawab />
            </div>
        </div>
    )
}

export default Projects