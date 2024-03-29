import React, { useState } from 'react'
import { IoIosArrowDown } from "react-icons/io";

const Accordion = ({icon,skill,skills}) => {
    const [isActive,setIsActive] = useState(false)
  
    return (
    <div className='dark:text-black text-white cursor-pointer mb-2'>
        <div className='bg-purple-700 dark:bg-purple-800 flex items-center justify-between p-5' onClick={()=>setIsActive(!isActive)}>
            <div className='flex items-center justify-start space-x-3'>
                <span className='dark:text-gray-100'>{icon}</span>
                <h1 className='text-lg text-gray-100'>{skill}</h1>
            </div>

                <span className={`text-lg ${isActive ? '' : ' rotate-180'}`}>
                 <IoIosArrowDown className='text-gray-100'/>
                 </span>
        </div>
        {
           isActive && skills.map(data=>(
                <div key={data.name} className='dark:bg-purple-600 bg-purple-200 mb-1 p-3 dark:text-gray-50 text-gray-600 hover:bg-purple-100 duration-200 dark:hover:bg-purple-500'>
                <h2>{data.name}</h2> 
                <div className='flex items-center justify-between space-x-4'>          
                <div className='w-full dark:bg-purple-700 bg-purple-400  h-3'>
                    <div style={{ width: `${data.percentage}%`}} className={`bg-purple-700 dark:bg-purple-900 h-full`}></div>
                </div>
                        <span>{data.percentage}%</span>
                </div>
            
            </div>
            ))
        }
    </div>
  )
}

export default Accordion
