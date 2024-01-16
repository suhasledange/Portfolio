import React from 'react'
import { FaGithub } from "react-icons/fa";
import { IoIosOpen } from "react-icons/io";

const Card = ({heading,TechStack,Img,para,git,live,liveText,year}) => {
  return (
    <div className='relative border bg-gray-50 rounded-md shadow-md pb-2 cursor-pointer mx-auto w-[90%] md:w-full overflow-hidden group'>
    <div className='absolute top-0 left-0 w-full h-full bg-gray-800 opacity-0 group-hover:opacity-90 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 flex items-center justify-center lg:flex-row flex-col md:gap-10 gap-6'>
      <div className='absolute top-5 left-5'>
            <h1 className='text-gray-100 text-xl'>{year}</h1>
      </div>
      
      <a
        className='text-xl text-white font-medium hover:underline underline-offset-2 flex items-center justify-center gap-1'
        href={git}
        target='_blank'
        rel='noopener noreferrer'
      >
        <FaGithub /> GitHub Repository
      </a>
      <a
        className='text-white font-medium text-xl hover:underline underline-offset-2 flex items-center justify-center gap-1'
        href={live}
        target='_blank'
        rel='noopener noreferrer'
      >
        {liveText} <IoIosOpen />
      </a>
    </div>
    <div className='p-3 md:p-5'>
      <div className='w-full md:w-[90%] mx-auto h-[17rem] py-5 overflow-hidden'>
        <img className='w-full h-full bg-cover object-contain rounded-lg' src={Img} alt={heading} />
      </div>
      <div className='space-y-3 mt-4'>
        <h1 className='text-xl text-gray-800 font-medium'>
          Project : <span className=' font-normal text-gray-700'>{heading}</span>{' '}
        </h1>
        <h3 className='font-medium text-gray-800 text-md'>
          Technology : <span className='text-gray-700 text-sm italic'>{TechStack}</span>{' '}
        </h3>
        <p className='text-gray-600'>{para}</p>
      </div>
    </div>
  </div>
  )
}

export default Card
