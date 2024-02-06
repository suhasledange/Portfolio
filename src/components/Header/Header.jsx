import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Navlinks } from '../../constant';
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { MdDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";
import useTheme from '../../context/theme';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const {themeMode,lightTheme,darkTheme} = useTheme()
  const themeToggle =()=>{
      themeMode === 'light' ? darkTheme() : lightTheme()
 }


  const handleToggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className='w-full bg-gray-50 dark:bg-gray-800 md:shadow-md shadow-sm dark:drop-shadow-md sticky top-0 z-10'>
      <div className='flex justify-between items-center mx-auto max-w-screen-lg h-[4.5rem]'>
        <div>
          <h1 className='md:ml-0 ml-3 dark:text-purple-100 text-purple-700 font-bold text-2xl'>Suhas Ledange</h1>
        </div>

        
        <div className='lg:hidden z-50'>
          <button
            onClick={handleToggleMenu}
            className=' mr-2 text-2xl dark:text-purple-100 text-purple-700 p-2 focus:outline-none'
          >
            {menuOpen ? <IoMdClose className='text-3xl absolute top-[1.4rem] right-4' /> : <GiHamburgerMenu />}
          </button>
        </div>

      <div className={` ${menuOpen ? 'block' : 'hidden'
            }`}>
     
     <div className='absolute top-0 left-0 bg-black opacity-30 w-full h-screen' onClick={handleToggleMenu}></div>
        <div
          className={`lg:hidden absolute bg-gray-50 dark:bg-gray-800 w-2/4 min-h-screen  pt-20 top-0 right-0 shadow-lg z-40 `}
        >
          
          <ul className=' tracking-wider text-lg flex flex-col gap-5 items-center pt-4'>
            {Navlinks.map((item) => (
              <NavLink
                key={item.text}
                to={item.link}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  `flex items-center mt-5 h-full px-4 font-medium text-md ${isActive ? 'text-purple-700' : 'text-gray-500 '
                  }`
                }
              >
                {item.text}
              </NavLink>
            ))}
            <li onClick={themeToggle} className='mt-20 hover:animate-pulse text-2xl cursor-pointer'>{themeMode === 'light' ? <MdDarkMode/> :<MdLightMode className='text-purple-100 '/> } </li>
          </ul>
        </div>

        </div>

        <div className={`lg:flex h-full hidden`}>
          <ul className='flex items-center tracking-wider text-gray-700 font-medium h-full space-x-4'>
            {Navlinks.map((item) => (
              <NavLink
                key={item.text}
                to={item.link}
                className={({ isActive }) =>
                  `flex items-center h-full px-6 dark:text-purple-100 text-purple-700 font-medium ${isActive ? 'text-white bg-purple-700' : ''
                  }`
                }
              >
                {item.text}
              </NavLink>
            ))}
              <li onClick={themeToggle} className='hover:animate-pulse text-2xl cursor-pointer'>{themeMode === 'light' ? <MdDarkMode/> :<MdLightMode className='text-purple-100 '/> } </li>
          </ul>
        </div>
      </div>
      
      <div>

      </div>

    </div>
    
  );
};

export default Header;
