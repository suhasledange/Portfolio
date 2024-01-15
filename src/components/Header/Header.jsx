import React from 'react'
import { NavLink } from 'react-router-dom';
import { Navlinks } from '../../constant'


const Header = () => {

  return (
    <div className='w-full bg-gray-50 shadow-md sticky top-0 z-20'>
      <div className='flex justify-between items-center mx-auto max-w-screen-xl h-16'>
        <div>
          <h1 className='text-purple-700 font-bold text-2xl'>Suhas Ledange</h1>
        </div>
        <div className='h-full'>
          <ul className='flex items-center tracking-wide text-gray-700 font-medium h-full'>
            {Navlinks.map((item) => (
              <NavLink key={item.text} to={item.link} className={({ isActive }) => `flex items-center h-full px-4 text-purple-700 font-medium text-md ${isActive ? 'text-white bg-purple-700' : ''}`}>
                {item.text}
              </NavLink>
            ))}
          
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Header
