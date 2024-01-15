import React from 'react'
import { FaGithub } from "react-icons/fa";
import { IoIosOpen } from "react-icons/io";


const Card = ({heading,TechStack,Img,para,git,live,liveText}) => {
  return (
    <div className='relative border rounded-md shadow-md pb-2 cursor-pointer overflow-hidden'>
      <div className='absolute opacity-0 hover:opacity-100 duration-200 hover:top-0 backdrop-blur-sm bg-transparent w-full h-full flex items-center justify-center gap-5'>
             
              <a className='hover:underline underline-offset-2 flex items-center justify-center gap-1' href={git} target='_blank'><FaGithub/> GitHub Repository</a>
             
              <a className='hover:underline underline-offset-2 flex items-center justify-center gap-1' href={git} target='_blank'>{liveText} <IoIosOpen/></a>

      </div>
          <div className='p-5'>
                <div className=' h-[17rem] py-5'>
                  <img className='w-full h-full bg-cover rounded-lg' src={Img}/>
                </div>
                <div className='space-y-3 mt-4'>
                    <h1 className='text-xl text-gray-800 font-medium'>Project : <span className=' font-normal text-gray-700'>{heading}</span> </h1>
                    <h3 className='font-medium text-gray-800 text-md'>Technology : <span className='text-gray-700 text-sm italic'>{TechStack}</span> </h3>
                    <p className='text-gray-600'>{para}</p>
                </div>
          </div>
    </div>
  )
}

export default Card
