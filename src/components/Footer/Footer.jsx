import React from 'react'
import { NavLink } from 'react-router-dom'
import { Navlinks } from '../../constant'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
const Footer = () => {

  const FootLink = [
    { logo: <FaGithub/>, href: 'https://github.com/suhasledange' },
    { logo: <FaLinkedin />, href: 'https://in.linkedin.com/in/suhas-ledange-4a0533206' },
    { logo: <FaYoutube/>, href: 'https://www.youtube.com/channel/UC1ynsuU6XPZ2iWw1Gf9SHlQ' }
  ]

  return (
    <div className='z-10 fixed left-0 bottom-1/3 bg-gray-100 drop-shadow-xl rounded-r-lg'>

      <div className='px-4'>
        <ul className='my-4 space-y-5 text-purple-800 text-2xl flex flex-col items-center justify-center'>
          {FootLink.map((item)=>(
            <li key={item.href}>
                
                <a >{item.logo}</a>
            </li>
            ))}
        </ul>
      </div>

    </div>
  )
}

export default Footer
