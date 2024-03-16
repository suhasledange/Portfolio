import React from 'react'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {

  const FootLink = [
    { logo: <FaGithub/>, href: 'https://github.com/suhasledange',title:"Github" },
    { logo: <FaXTwitter/>, href: 'https://x.com/suhas_ledange',title:"Twitter"},
    { logo: <FaLinkedin />, href: 'https://in.linkedin.com/in/suhas-ledange-4a0533206',title:"Linkdin" },
    { logo:<FaInstagram/>, href: 'https://www.instagram.com/suhasledange/',title:"Instagram" },
    { logo: <FaYoutube/>, href: 'https://www.youtube.com/channel/UC1ynsuU6XPZ2iWw1Gf9SHlQ',title:"Youtube" },


  ]
  return (
    <section className='z-10 md:fixed md:left-0 md:bottom-1/3 bg-gray-100 dark:shadow-xl shadow-md dark:bg-gray-800 md:drop-shadow-xl rounded-r-lg md:w-auto w-full mt-5'>

      <div className='w-full'>
        <ul className='md:py-4 py-5 px-4 md:space-y-5 dark:text-purple-100 text-purple-800 text-2xl flex md:gap-0 gap-6 md:flex-col md:items-center justify-center'>
          {FootLink.map((item)=>(
            <li className='hover:text-purple-900 duration-150 cursor-pointer hover:translate-y-[-0.3rem] md:hover:translate-x-1' key={item.href}>
                <a target='_blank' title={item.title} href={item.href}>{item.logo}</a>
            </li>
            
            ))}
        </ul>
      </div>

    </section>
  )
}

export default Footer
