import React from 'react'
import { FaGithub } from "react-icons/fa";
import { IoIosOpen } from "react-icons/io";

const Card = ({heading,TechStack,Img,para,git,live,liveText,year}) => {
  return (
    <div className='relative border bg-gray-50 rounded-md shadow-md pb-4 pt-2 cursor-pointer mx-auto w-[90%] md:w-full overflow-hidden group flex flex-col justify-between'>
   
   <div className='absolute top-[0.6rem] left-3'>
        <h1 className='text-purple-600 text-md'>{year}</h1>
      </div>

    <div className='p-3 md:p-5'>
      <div className=' hover:scale-105 duration-300 hover:shadow-lg rounded-lg w-full md:w-[90%] mx-auto h-[17rem] py-5 overflow-hidden'>
        <img className='w-full h-full bg-cover object-contain rounded-lg ' src={Img} alt={heading} />
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
   
    <div className=' ml-5 flex items-center space-x-5'>
     <a
        className='text-lg duration-200 text-purple-600 hover:text-purple-800 font-medium hover:underline underline-offset-2 flex items-center gap-1'
        href={git}
        target='_blank'
        rel='noopener noreferrer'
      >
        <FaGithub /> GitHub
      </a>
      <a
        className='text-lg duration-200 text-purple-600 hover:text-purple-800 font-medium hover:underline underline-offset-2 flex items-center gap-1'
        href={git}
        target='_blank'
        rel='noopener noreferrer'
      >
        <IoIosOpen /> Live
      </a>
    </div>
  
  </div>
  )
}

export default Card
