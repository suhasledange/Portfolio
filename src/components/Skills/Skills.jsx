import React from 'react'
import { FaPencilRuler } from "react-icons/fa";
import { FaServer } from "react-icons/fa";
import { MdOutlineWeb } from "react-icons/md";
import Accordion from '../Accordion/Accordion';

const Skills = () => {

    const skildata =[
        { skill:"UI/UX Design",skills:[
            {name:"Figma",percentage:80},
            {name:"Adobe Photoshop",percentage:76},
        ],
        icon:<FaPencilRuler />},
        
        {skill:"Frontend Development",skills:[
          {name:"HTML",percentage:92},
          {name:"CSS",percentage:80},
          {name:"JavaScript",percentage:85},
          {name:"TailwindCSS",percentage:87},
          {name:"Bootstrap",percentage:71},
          {name:"ReactJS",percentage:83},
          {name:"NextJS",percentage:78},

        ],
        icon:<MdOutlineWeb className='text-lg'/>},
        
        {skill:"Backend Development",skills:[
          {name:"NodeJS",percentage:65},
          {name:"MongoDB",percentage:74},
          {name:"MySQL",percentage:70},
        ],
        icon:<FaServer/>},
    ]
    

  return (
    <div className='w-[90%] lg:max-w-screen-md mx-auto'>
          <h1 className='text-center font-bold text-purple-700 mb-10 text-2xl'>Skills</h1>
            {
              skildata.map(data=>(
                <Accordion key={data.skill}
                icon={data.icon}
                skill={data.skill}
                skills={data.skills}
                />
              ))
            }
      </div>
  )
}

export default Skills
