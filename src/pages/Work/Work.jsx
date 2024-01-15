import React, { useEffect } from 'react'
import { Card, Container } from '../../components'
import Typed from 'typed.js';
import { IoIosArrowDown } from "react-icons/io";
import { CardData } from '../../constant';
import { Link as ScrollLink } from 'react-scroll';
import { blob, favicon, male } from '../../assets';

const Work = () => {

  useEffect(() => {
    const options = {
      strings: ['Web Developer', 'React Developer'],
      typeSpeed: 50,
      backSpeed: 25,
      loop: true,
      showCursor: false,
    };

    const typed = new Typed('#typed-text', options);


    return () => {
      typed.destroy();
    };
  }, []);

  return (

    <Container>
      <section className='h-[37rem] mb-10 flex justify-between md:mx-0 mx-4 flex-col'>

        <div className='flex w-full justify-between items-center h-full'>

          <div className='space-y-14'>
            <div className='space-y-3'>

              <h1 className='text-[3.4rem] custom-font font-bold'>HELLO, I'M SUHAS</h1>

              <div className='h-[3rem]'>
                <span className='text-purple-600 font-semibold text-4xl cursor-none' id="typed-text"></span>
              </div>
              <div className='pt-2 md:w-2/4'>
                <p className='text-lg font-normal text-gray-600'>I'm a passionate web developer specializing in React, where I bring creative and dynamic ideas to life through clean and efficient code and Beyond coding, I'm also a content creator on YouTube</p>
              </div>
            </div>

            <div className=''>
              <a href='../../assets/SuhasLedangeResume.pdf' download="SuhasLedangeResume.pdf" className='text-2xl cursor-pointer hover:text-gray-100 font-medium border-2 hover:bg-purple-700 border-purple-700 text-purple-700 hover:shadow-lg hover:bg-transparent px-5 py-2 duration-200 '>Resume</a>
            </div>
          </div>

          <div className='relative w-[70%] h-[70%] md:hidden hidden lg:block'>
            <img src={male} className='w-full h-full'/> 
            {/* <img src={blob} className='w-full h-full'/> */}
          </div>

        </div>

        <ScrollLink to="work" smooth={true} duration={700} className=' animate-bounce flex items-center justify-center cursor-pointer text-4xl text-purple-700 font-bold'>
          <IoIosArrowDown />
        </ScrollLink>

      </section>


      <section id='work'>
        <div className='grid md:p-0 p-4 md:grid-cols-2 gap-10'>
          {CardData.map((item) => (
            <Card key={item.head} heading={item.head} TechStack={item.TechStack} Img={item.img} para={item.para} git={item.gitLink} live={item.liveLink} liveText={item.liveText} year={item.year} />
          ))}

        </div>
      </section>
    </Container>
  )
}

export default Work
