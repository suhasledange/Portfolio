import React from 'react'
import { FaGithub } from "react-icons/fa";
import { IoIosOpen } from "react-icons/io";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';


const Card = ({ heading, TechStack, Img, para, git, live, liveText, year }) => {
  return (
    <div className='relative border dark:shadow-xl dark:drop-shadow-xl dark:border-gray-800 dark:bg-gray-800 bg-gray-50 rounded-md shadow-md p-5 cursor-pointer mx-auto w-[90%] md:w-full overflow-hidden group flex flex-col justify-between'>

      <div className='absolute top-[0.6rem] left-3'>
        <h1 className='text-purple-600 text-md'>{year}</h1>
      </div>

      <div className='mt-7'>
        
        <div className='rounded-lg py-2 mx-auto hover:scale-[102%] duration-300'>
          
          <LazyLoadImage
            className='dark:brightness-75 dark:contrast-125 bg-cover object-contain w-full h-full rounded-lg drop-shadow-xl'
            alt={heading}
            src={Img}
            effect="blur" 
            threshold={200}
          />
        </div>
        <div className='space-y-3 mt-4'>
          <h1 className='text-xl dark:text-gray-200 text-gray-800 font-medium'>
            Project : <span className=' font-normal text-gray-700 dark:text-gray-400'>{heading}</span>{' '}
          </h1>
          <h3 className='font-medium dark:text-gray-200 text-gray-800 text-md'>
            Technology : <span className='dark:text-gray-400 text-gray-700 text-sm italic'>{TechStack}</span>{' '}
          </h3>
          <p className='text-gray-600 dark:text-gray-500'>{para}</p>
        </div>


      </div>

      <div className=' mt-5 flex justify-start space-x-5'>
        <a
          className='text-lg duration-200 text-purple-600 hover:text-purple-800 font-medium hover:underline underline-offset-2 flex items-center gap-1'
          href={git}
          target='_blank'
          rel='noopener noreferrer'
          title="Github"
        >
          <FaGithub /> GitHub
        </a>
        <a
          className='text-lg duration-200 text-purple-600 hover:text-purple-800 font-medium hover:underline underline-offset-2 flex items-center gap-1'
          href={live}
          target='_blank'
          rel='noopener noreferrer'
          title="Live"
        >
          <IoIosOpen /> {liveText}
        </a>
      </div>

    </div>
  )
}

export default Card
