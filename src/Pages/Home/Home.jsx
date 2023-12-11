import Banner from "../../Components/Banner/Banner"
import Education from "../../Components/Education/Education"
import Skills from "../../Components/Skills/Skills"

const Home = () => {
    return (
        <div>
            <Banner />
            <div className="divider"></div>
            <Skills />
            <div className="divider"></div>
            <Education />
        </div>
    )
}

export default Home