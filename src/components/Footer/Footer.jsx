import React from 'react'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {

  const FootLink = [
    { logo: <FaGithub/>, href: 'https://github.com/suhasledange' },
    { logo: <FaXTwitter/>, href: 'https://x.com/suhas_ledange' },
    { logo: <FaLinkedin />, href: 'https://in.linkedin.com/in/suhas-ledange-4a0533206' },
    { logo:<FaInstagram/>, href: 'https://www.instagram.com/suhasledange/' },
    { logo: <FaYoutube/>, href: 'https://www.youtube.com/channel/UC1ynsuU6XPZ2iWw1Gf9SHlQ' },


  ]
  return (
    <section className='z-10 lg:fixed lg:left-0 lg:bottom-1/3 bg-gray-100 md:drop-shadow-xl rounded-r-lg md:w-auto w-full mt-5'>

      <div className='w-full'>
        <ul className='lg:py-4 py-5 px-4 lg:space-y-5 text-purple-800 text-2xl flex lg:gap-0 gap-6 lg:flex-col lg:items-center justify-center'>
          {FootLink.map((item)=>(
            <li className='hover:text-purple-900 duration-150 cursor-pointer hover:translate-y-[-0.3rem] lg:hover:translate-x-1' key={item.href}>
                <a target='_blank' href={item.href}>{item.logo}</a>
            </li>
            
            ))}
        </ul>
      </div>

    </section>
  )
}

export default Footer
