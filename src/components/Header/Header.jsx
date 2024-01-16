import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Navlinks } from '../../constant';
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";


const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className='w-full bg-gray-50 md:shadow-md shadow-sm sticky top-0 z-10'>
      <div className='flex justify-between items-center mx-auto max-w-screen-lg h-[4.5rem]'>
        <div>
          <h1 className='md:ml-0 ml-3 text-purple-700 font-bold text-2xl'>Suhas Ledange</h1>
        </div>

        <div className='lg:hidden z-50'>
          <button
            onClick={handleToggleMenu}
            className=' mr-2 text-2xl text-purple-700 p-2 focus:outline-none'
          >
            {menuOpen ? <IoMdClose className='text-3xl' /> : <GiHamburgerMenu />}
          </button>
        </div>

        <div
          className={`lg:hidden absolute bg-gray-50 w-3/4 min-h-screen  pt-20 top-0 right-0 shadow-lg z-40  ${menuOpen ? 'block' : 'hidden'
            }`}
        >

          <ul className=' tracking-wider text-lg flex flex-col gap-5 items-center pt-4'>
            {Navlinks.map((item) => (
              <NavLink
                key={item.text}
                to={item.link}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  `flex items-center h-full px-4 text-purple-700 font-medium text-md ${isActive ? 'text-gray-600' : ''
                  }`
                }
              >
                {item.text}
              </NavLink>
            ))}
          </ul>
        </div>

        <div className={`lg:flex h-full hidden`}>
          <ul className='flex items-center tracking-wider text-gray-700 font-medium h-full space-x-4'>
            {Navlinks.map((item) => (
              <NavLink
                key={item.text}
                to={item.link}
                className={({ isActive }) =>
                  `flex items-center h-full px-6 text-purple-700 font-medium ${isActive ? 'text-white bg-purple-700' : ''
                  }`
                }
              >
                {item.text}
              </NavLink>
            ))}

          </ul>
        </div>
      </div>
      
      <div>

      </div>

    </div>
    
  );
};

export default Header;