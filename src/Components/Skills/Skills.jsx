
import bootStrap from '../../assets/skillIcons/Bootstrap.svg'
import css from '../../assets/skillIcons/CSS.svg'
import expressJs from '../../assets/skillIcons/ExpressJS-Dark.svg'
import firebase from '../../assets/skillIcons/Firebase-Dark.svg'
import git from '../../assets/skillIcons/Git.svg'
import gitHub from '../../assets/skillIcons/Github-Dark.svg'
import html from '../../assets/skillIcons/HTML.svg'
import javascript from '../../assets/skillIcons/JavaScript.svg'
import jwt from '../../assets/skillIcons/JWT.svg'
import mui from '../../assets/skillIcons/MaterialUI-Dark.svg'
import mongoDb from '../../assets/skillIcons/MongoDB.svg'
import nodeJs from '../../assets/skillIcons/NodeJS-Dark.svg'
import react from '../../assets/skillIcons/React-Dark.svg'
import tailwind from '../../assets/skillIcons/TailwindCSS-Dark.svg'
import vercel from '../../assets/skillIcons/Vercel-Dark.svg'

const mySkills = [
    {
        name: 'JavaScript',
        img: javascript
    },
    {
        name: 'React',
        img: react
    },
    {
        name: 'TailwindCSS',
        img: tailwind
    },
    {
        name: 'BootStrap',
        img: bootStrap
    },
    {
        name: 'Html',
        img: html
    },
    {
        name: 'Css',
        img: css
    },
    {
        name: 'Git',
        img: git
    },
    {
        name: 'GitHub',
        img: gitHub
    },
    {
        name: 'Firebase',
        img: firebase
    },
    {
        name: 'MUI',
        img: mui
    },
    {
        name: 'Node.js',
        img: nodeJs
    },
    {
        name: 'Express.js',
        img: expressJs
    },
    {
        name: 'MongoDB',
        img: mongoDb
    },
    {
        name: 'JWT',
        img: jwt
    },
    {
        name: 'Vercel',
        img: vercel
    },
]

const Skills = () => {
    return (
        <div className=" shadow-md shadow-orange-900 rounded-lg">
            <div className="text-center mt-7">
                <p className="btn btn-block btn-sm text-white lg:text-lg px-5 bg-orange-500 hover:bg-orange-500">Skills</p>
                <p className="py-3">The skills, tools and technologies I am really good at:</p>
            </div>
            <div className="grid grid-cols-3 md:grid-cols-5  py-5 lg:py-10 place-items-center gap-10 text-center px-10">

                {
                    mySkills?.map((skill, index) => <div className='' key={index}>
                        <img className='w-[50px] mx-auto transition-all cursor-pointer hover:scale-110 duration-300' src={skill?.img} alt="" />
                        <p>{skill?.name}</p>
                    </div>)
                }
            </div>
        </div>
    )
}

export default Skills