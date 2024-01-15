import React from 'react'
import { Container } from '../../components'
import { aboutme } from '../../assets'

const About = () => {
  return (
    <Container>
        <div className='mt-10 h-screen flex flex-col items-center'>
            <div className=' w-[30rem]'>
                  <img className='w-full full' src={aboutme}/>
            </div>
            <div className='px-5 md:px-0 text-center  md:max-w-screen-md sm:max-w-screen-sm tracking-wider'>
            <h1 className='text-lg mb-2 font-medium'>Hello! I'm Suhas,</h1>
            <p className='text-gray-700'>A passionate web developer with expertise in crafting dynamic and engaging web experiences using the power of ReactJS. I thrive on turning creative ideas into reality through clean and efficient code. Beyond the world of coding, I wear another hat as a content creator on YouTube. My channel is a haven for music enthusiasts, where I share my love for remixing songs. As a self-taught music producer, I explore the realms of sound, bringing my unique touch to various genres. Whether it's coding or composing, I find joy in the art of creation. Join me on this journey where technology meets melody, and let's build and groove together!</p>
            </div>
        </div>
    </Container>
  )
}

export default About
