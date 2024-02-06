import React from 'react'
import { Ylogo } from '../../assets'

const YoutubeCard = ({title,link}) => {
  return (
    <div className='w-72 mx-auto mb-12'>
        <div className=' '>
        <iframe className='rounded-lg' src={link} allowFullScreen></iframe>
        </div>
        <div className='flex items-center space-x-4 mt-2'>
            <div className='w-10 h-10'>
                 <img className='w-full h-full object-contain' src={Ylogo}/>
            </div>
        <h1 className='text-md font-normal text-gray-700 dark:text-gray-200'>{title.substr(0,48)}...</h1>
        </div>

    </div>
  )
}

export default YoutubeCard
