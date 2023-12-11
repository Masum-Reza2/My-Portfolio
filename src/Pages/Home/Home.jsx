import Banner from "../../Components/Banner/Banner"
import Education from "../../Components/Education/Education"
import Projects from "../../Components/Projects/Projects"
import Skills from "../../Components/Skills/Skills"

const Home = () => {
    return (
        <div>
            <Banner />
            <div className="divider"></div>
            <Skills />
            <div className="divider"></div>
            <Education />
            <div className="h-[200vh]">
                <Projects />
            </div>
        </div>
    )
}

export default Home