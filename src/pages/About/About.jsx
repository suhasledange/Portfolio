import React from 'react'
import { Container } from '../../components'
import { aboutme } from '../../assets'
import Accordion from '../../components/Accordion/Accordion'
import { FaPencilRuler } from "react-icons/fa";
import { FaServer } from "react-icons/fa";
import { MdOutlineWeb } from "react-icons/md";
const About = () => {


  const skildata =[
    { skill:"UI/UX Design",skills:[
        {name:"Figma",percentage:92},
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
    ],
    icon:<MdOutlineWeb className='text-lg'/>},
    
    {skill:"Backend Development",skills:[
      {name:"Node",percentage:65},
      {name:"MongoDB",percentage:74},
      {name:"MySQL",percentage:70},
    ],
    icon:<FaServer/>},
]



  return (
    <Container>
      <div className='mb-10'>

        <div className='mt-10 flex flex-col flex-grow items-center mb-10 overflow-x-hidden'>
            <div className=' w-[30rem]'>
                  <img className='w-full full' src={aboutme}/>
            </div>
            <div className='px-5 md:px-0 text-center  md:max-w-screen-md sm:max-w-screen-sm tracking-wider'>
            <h1 className='text-lg mb-2 font-medium'>Hello! I'm Suhas,</h1>
            <p className='text-gray-700 dark:text-gray-400'>A passionate web developer with expertise in crafting dynamic and engaging web experiences using the power of ReactJS. I thrive on turning creative ideas into reality through clean and efficient code. Beyond the world of coding, I wear another hat as a content creator on YouTube. My channel is a haven for music enthusiasts, where I share my love for remixing songs. As a self-taught music producer, I explore the realms of sound, bringing my unique touch to various genres. Whether it's coding or composing, I find joy in the art of creation. Join me on this journey where technology meets melody, and let's build and groove together!</p>
            </div>
        </div>

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
      </div>

    </Container>
  )
}

export default About
