import React from 'react'
import { Ylogo } from '../../assets';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const YoutubeHead = ({ subscribers, videoCount, viewCount }) => {

  const formatNumber = (number) => {
    if (isNaN(number)) {
      return "_";
    }

    return number < 1e3 ? number : `${(number / 1e3).toFixed(1)}K${number < 1e6 ? '' : number < 1e9 ? 'M' : 'B'}`;
  };


  return (
    <div className='flex items-center lg:justify-evenly justify-between mb-16'>

      <div className='lg:w-40 lg:h-40 md:w-32 md:h-32 w-28 h-28 lg:mx-0 mx-auto overflow-hidden rounded-full'>

        <a href={"https://www.youtube.com/channel/UC1ynsuU6XPZ2iWw1Gf9SHlQ"} title="Visit My Channel" target='_blank'>
        <LazyLoadImage
         className='-mt-[2px] rounded-full'
          alt="X"
          src={Ylogo}
          effect="blur"
          threshold={200}
          width="100%"
          height="100%"
        />
        </a>

      </div>

      <div className='space-y-1 lg:w-auto w-[50%]'>
        
      <a className='font-bold tracking-wide text-2xl mb-3' href={"https://www.youtube.com/channel/UC1ynsuU6XPZ2iWw1Gf9SHlQ"} target='_blank' title="Visit My Channel">Bass Town</a>
      
      { subscribers ?

        <ul className='lg:w-auto w-[70%] flex flex-wrap items-center list-disc space-x-7'>
          
          <span className='text-lg italic'>@basstown10</span>
 
            <li >{formatNumber(subscribers)} subscribers</li>       
            <li>{videoCount} videos</li>
           
        </ul>
        : ""
        
      }

        {
          viewCount ?            
            <p>Total Views : {viewCount}</p>
          :
           <p className=' animate-pulse h-[8rem] md:h-[3rem] w-[10rem] md:w-[24rem] bg-gray-200 rounded-md'></p> 
        } 
      
      </div>
    </div>
  )
}

export default YoutubeHead
