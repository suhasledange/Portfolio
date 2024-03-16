import React, { Suspense, useEffect } from 'react'
import { Card, Container } from '../../components'
import Typed from 'typed.js';
import { IoIosArrowDown } from "react-icons/io";
import { CardData } from '../../constant';
import { Link as ScrollLink } from 'react-scroll';
import { blob, favicon, male, pdf } from '../../assets';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

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

    <Container className="pb-10">
      <section className='h-[37rem] flex flex-col mb-10'>

        <div className='flex w-full justify-between items-center h-[95%]'>

          <div className='space-y-14'>
            
            <div className='space-y-3'>

              <h1 className='text-4xl md:text-[3.4rem] custom-font font-bold'>HELLO, I'M SUHAS</h1>

              <div className='h-[3rem]'>
                <span className='text-purple-600 font-semibold text-3xl md:text-4xl cursor-none' id="typed-text"></span>
              </div>
              
              <div className='pt-2 md:w-[60%]'>
                <p className='text-md text-justify md:text-lg font-normal dark:text-gray-400 text-gray-600'>I'm a passionate web developer specializing in React, where I bring creative and dynamic ideas to life through clean and efficient code and Beyond coding, I'm also a content creator on YouTube.</p>
              </div>
            </div>

            <div className=''>
              <a href={pdf} title="Download Resume" download="SuhasLedangeResume.pdf" className='text-xl md:text-2xl cursor-pointer hover:text-gray-100 font-medium border-2 hover:bg-purple-700 border-purple-700 text-purple-700 hover:shadow-lg px-5 py-2 duration-200 dark:bg-purple-700 dark:text-gray-100 dark:hover:bg-transparent '>Resume</a>
            </div>
          </div>

          <div className='w-[70%] h-[70%] md:hidden hidden lg:block'>
            
            <LazyLoadImage
            className='w-full h-full drop-shadow-2xl'
            alt=""
            src={male}
            effect="blur" 
            threshold={200}
            width="100%"
            height="100%"
          />

          </div>

        </div>

        <ScrollLink to="work" smooth={true} duration={600} className=' animate-bounce flex items-center justify-center cursor-pointer text-4xl text-purple-700 font-bold'>
          <IoIosArrowDown />
        </ScrollLink>

      </section>


      <section id='work'>
        <div className='grid p-0 md:grid-cols-2 gap-10'>
          {CardData.map((item) => (

            <Card key={item.head} heading={item.head} TechStack={item.TechStack} Img={item.img} para={item.para} git={item.gitLink} live={item.liveLink} liveText={item.liveText} year={item.year} />
          
          ))}

        </div>
      </section>
    </Container>

  )
}

export default Work
