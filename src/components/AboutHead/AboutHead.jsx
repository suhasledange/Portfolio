import React from 'react'
import { aboutme } from '../../assets'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const AboutHead = () => {
  return (
    <div className='mt-5 flex flex-col flex-grow items-center mb-10 overflow-x-hidden'>
    <div className=' w-[30rem]'>

    <LazyLoadImage
            className='w-full h-full'
            alt=""
            src={aboutme}
            effect="blur" 
            threshold={200}
            width="100%"
            height="100%"
          />
   
    </div>
    <div className='px-5 md:px-0 text-center  md:max-w-screen-md sm:max-w-screen-sm tracking-wider'>
    <h1 className='text-lg mb-2 font-medium'>Hello! I'm Suhas,</h1>
    <p className='  text-justify text-gray-700 dark:text-gray-400'>A passionate web developer with expertise in crafting dynamic and engaging web experiences using the power of ReactJS. I thrive on turning creative ideas into reality through clean and efficient code. Beyond the world of coding, I wear another hat as a content creator on YouTube. My channel is a haven for music enthusiasts, where I share my love for remixing songs. As a self-taught music producer, I explore the realms of sound, bringing my unique touch to various genres. Whether it's coding or composing, I find joy in the art of creation. Join me on this journey where technology meets melody, and let's build and groove together!</p>
    </div>
    
</div>
  )
}

export default AboutHead
