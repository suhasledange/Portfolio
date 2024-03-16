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
    <header className='w-full bg-gray-50 dark:bg-gray-800 md:shadow-md shadow-sm dark:drop-shadow-md sticky top-0 z-30'>

      <div className='flex px-3 justify-between items-center mx-auto max-w-screen-lg h-[4rem]  md:h-[4.5rem] relative'>

    {/* mobile */}

      <div onClick={()=>setMenuOpen(false)} className={`${menuOpen ? "translate-x-0" : "translate-x-full"} absolute md:top-[4.5rem] top-16 bg-transparent w-full min-h-screen`}></div>
     
     <div
         className={` ${menuOpen ? "translate-x-0" : "translate-x-full"} transition-transform duration-200  lg:hidden absolute bg-gray-50 border-t-2 border-gray-100 dark:bg-gray-800 w-[60%] min-h-screen top-16 right-0 shadow-lg z-10 `}
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
        
        {/* MOBIEL END */}

        <div onClick={()=>setMenuOpen(false)}>
          <h1 className='dark:text-purple-100 cursor-pointer text-purple-700 font-bold text-2xl'>Suhas Ledange</h1>
        </div>

        
        <div className='lg:hidden flex items-center justify-center'>
          <button
            onClick={handleToggleMenu}
            className='text-2xl dark:text-purple-100 text-purple-700 focus:outline-none'
          >
            {menuOpen ? <IoMdClose className='text-3xl' /> : <GiHamburgerMenu />}
          </button>
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
    
    </header>
    
  );
};

export default Header;
