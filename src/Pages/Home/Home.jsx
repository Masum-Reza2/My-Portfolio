import Banner from "../../Components/Banner/Banner"
import ContactMe from "../../Components/ContactMe/ContactMe"
import Education from "../../Components/Education/Education"
import Projects from "../../Components/Projects/Projects"
import Skills from "../../Components/Skills/Skills"

const Home = () => {
    return (
        <div>
            <Banner />
            <div className="divider"></div>
            <div
                data-aos="fade-right"
                data-aos-duration="500"
            >
                <Skills />
            </div>
            <div className="divider"></div>

            <Education />
            <Projects />
            <div className="divider"></div>
            <ContactMe />
        </div>
    )
}

export default Home